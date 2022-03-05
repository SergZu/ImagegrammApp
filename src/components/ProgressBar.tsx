import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { ProgressBarProps } from '../types/types';
import { motion } from 'framer-motion';

const ProgressBar = ( { 
                        file, 
                        setFile, 
                        setTitle, 
                        setSubmitReady, 
                        title, 
                        user 
                    } : ProgressBarProps) => {

    const { progress, url, error } = useStorage(file, title, user);
    useEffect(() => {
        if(url) {
            setFile(null);
            setTitle('');
            setSubmitReady(false);
        }
    }, [url]);
    return (
        <>
            { error && (<span className='error'>
                            {error}
                        </span>)
            }
            { !error && (<motion.div 
                                    className='App-uploadForm__progressBar' 
                                    initial={{ width : 0 }} 
                                    animate={{ width : `${progress}%` }}>
                        </motion.div>) 
            }
        </>
    )
}

export default ProgressBar;
