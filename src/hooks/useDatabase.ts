import { firebaseApp } from '../firebase/config';
import { getFirestore, collection, orderBy, query, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const useFirestore = (col : string) => {
    const [docs, setDocs] = useState<any>([]);
    const appDatabase = getFirestore(firebaseApp);
    const targetColl = collection(appDatabase, col);
    const q = query( targetColl, orderBy('createdAt', 'desc') );
  
    useEffect(() => {
      const unsub = onSnapshot(q, (querySnapshot) => {
        let documents : any = [];
        querySnapshot.forEach((doc) => {
            documents.push({...doc.data() as object, id: doc.id});
        });
        setDocs(documents);
      });
         
      return () => unsub();
    }, [col]);
  
    return { docs };
  }
  
  export default useFirestore;