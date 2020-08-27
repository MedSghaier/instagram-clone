import { useState, useEffect } from 'react';
import { firestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    useEffect(()=>{
        const unsub = firestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshot)=>{
                let documents = [];
                snapshot.docs.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                });
                console.log(documents);
                setDocs(documents);
            });
        
        return () => unsub();
    },[collection]);
    
    return { docs };
}

export default useFirestore;