import { firebaseApp } from '../firebase/config';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { likesType } from '../types/types';

const updateFirestore = async (prop : string, value : likesType, col : string, id: string) => {
    const appDatabase = getFirestore(firebaseApp);
    const documentRef = doc(appDatabase, col, id);
    
        try {
            await updateDoc(documentRef, {[prop] : value});
        } catch(err) {
            return err.message
        }
        return true
    }

    export default updateFirestore;
    