import React from 'react';
import useDatabase from '../hooks/useDatabase';
import { imageGridProps } from '../types/types';
import Image from './Image';
import { motion } from 'framer-motion';

const ImageGrid = ( {setSelectedImg} : imageGridProps ) => {
    const { docs } = useDatabase('images');
    const imageLayout = docs ? docs.map((doc : any) => (
    <motion.li key={doc.id} className='App-imageGrid__imgWrapper' tabIndex={0} layout whileHover={{opacity : 1}}
    onClick={(evt : React.MouseEvent) : void => { setSelectedImg({url: doc.url, id: doc.id, likes: doc.likedBy, author: doc.uploadedBy, title: doc.title});}} 
    onKeyPress={(evt : React.KeyboardEvent) : void => { if (evt.key === 'Enter') setSelectedImg({url: doc.url, id: doc.id, likes: doc.likedBy, author: doc.uploadedBy, title: doc.title}) }}>
        <Image alt={`Uploaded image ${doc.id}`} url={doc.url} title={doc.title} likes={doc.likedBy} uploadedBy={doc.uploadedBy} />
    </motion.li>
    )) : null;
    return (
        <ul className='App-imageGrid'>
           { imageLayout }
           { !imageLayout  && <h4>There are no images uploaded yet</h4>} 
        </ul>
    )
}

export default ImageGrid
