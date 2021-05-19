import React from 'react';
import { imageProp } from '../types/types';
import { motion } from 'framer-motion';

const image = ({ alt, url, title, uploadedBy } : imageProp) => {
    return (
        <motion.figure initial={{ opacity : 0 }} animate={{ opacity : 1 }} transition={{ delay : 0.5 }}>
        <img src={url} alt={alt} className='App-imageGrid__image' />
        <figcaption className='App-imageGrid__image__title'>
            <span>{`${title}`}</span>
            <span className='App-imageGrid__image__title__uploader'>{`Uploader : ${uploadedBy.slice(0, uploadedBy.search(/\@/g))}`}</span>
            </figcaption>
        </motion.figure>
    )
}

export default image
