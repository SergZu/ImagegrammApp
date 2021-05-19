import React, { useState } from 'react';
import { modalProps } from '../types/types';
import { motion } from 'framer-motion';
import { useAuth } from './AuthProvider';
import updateFirestore from '../utils/updateFirestore';

const Modal = ({ selectedImg, setSelectedImg } : modalProps) => {
    const { currentUser } = useAuth();
    const user : string = currentUser !== null ? currentUser.email as string : 'Anonimous';
    const isOwner = selectedImg.author === user;
    const likesCounter = Object.keys(selectedImg.likes).length;
    const alreadyLiked = Object.keys(selectedImg.likes).includes(user);
    const [ isLiked, setIsLiked ] = useState(alreadyLiked);
    const [ likes, setLikes ] = useState(likesCounter);

    const onClickHandler : React.MouseEventHandler<HTMLDivElement> = async (evt) => {
        const target = evt.target as HTMLElement;
        if (target.closest('.App-modal__figure')) {
            return
        }
        if (isLiked !== alreadyLiked) {
            const newValue = {...selectedImg.likes};
            if (alreadyLiked) {
                delete newValue[user]
            }
            else {             
                newValue[user] = true;
            }
            await updateFirestore('likedBy', newValue, 'images', selectedImg.id);
        } 
        setSelectedImg(null);
    };
    const onLikeClick : React.MouseEventHandler<HTMLButtonElement> = () => {
            if (isOwner) return;   
            setLikes(isLiked ? likes - 1 : likes + 1); 
            setIsLiked((value) => !value);
    };
    return (
        <motion.div className='App-modal' onClick={onClickHandler} initial={{ opacity : 0 }} animate={{ opacity : 1 }}>
            <motion.figure className='App-modal__figure' initial={{ scale : 0.3 }} animate={{ scale : 1 }}>
                <img src={selectedImg.url} alt='large pic' />  
                <figcaption className='App-modal__imgInfo'>
                    <span className='App-modal__imgInfo__row title'>{selectedImg.title}
                        <button className={ isLiked? 'App-modal__imgInfo__likeBtn active' : 'App-modal__imgInfo__likeBtn' } onClick={onLikeClick} disabled={isOwner || user === 'Anonimous'}></button>
                        <span className='App-modal__imgInfo__counter'>{likes}</span>
                    </span>
                    <span className='App-modal__imgInfo__row'>{`Uploaded by : ${selectedImg.author.slice(0, selectedImg.author.search(/\@/g))}`}</span>
                    <span className='App-modal__imgInfo__row'></span>
                </figcaption>
            </motion.figure>
        </motion.div> 
    )
};

export default Modal;
