import { useState, useEffect } from 'react';
import {fireStorage, firestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        // Refences
        const storageRef = fireStorage.ref(file.name);
        const collectionRef = firestore.collection('images');

        storageRef.put(file).on('state_changed', (snapshot)=>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, err => {
            setError(err)
        }, async ()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt =  timestamp();
            collectionRef.add({ url, createdAt })
            setUrl(url) 
        })

    }, [file]);

    return { progress, error, url }
}

export default useStorage;