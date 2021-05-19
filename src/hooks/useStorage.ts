import { useState, useEffect } from 'react';
import { firebaseApp } from '../firebase/config';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { getFirestore, collection, serverTimestamp, addDoc } from 'firebase/firestore';


const useStorage = (file : File, title : string, user : string) => {
    const [ progress, setProgress ] = useState(0);
    const [ error, setError ] = useState<string|null>(null);
    const [ url, setUrl ] = useState<string|null>(null);

useEffect(() => {
    if (file !== null) {

        const appStorage = getStorage(firebaseApp);
        const storageRef = ref(appStorage, file.name);
        const appDatabase = getFirestore(firebaseApp);
        const collectionRef = collection(appDatabase, 'images');
        const timestamp = serverTimestamp();

    uploadBytesResumable(storageRef, file).on('state_changed', (snapshot)  => {
        let percentage = Math.floor( (snapshot.bytesTransferred / snapshot.totalBytes) * 100 );
        setProgress(percentage);
    }, (err : Error) => {
        setError(err.message);
    }, async () => {
        const url = await getDownloadURL(storageRef);
        const createdAt = timestamp;
        const likedBy = {};
        const uploadedBy = user;
        await addDoc(collectionRef, { url, createdAt, title, uploadedBy, likedBy });
        setUrl(url);
        })
    }
}, [file]);

return { progress, url, error  } 

}

export default useStorage;