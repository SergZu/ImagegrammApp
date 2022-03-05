import React, { Suspense, useState } from 'react'
const ImageGrid = React.lazy(() => import('./ImageGrid'));
import Modal from './Modal';
import Title from './Title';
import UploadForm from './UploadForm';
import AuthForm from './AuthForm';
import { modalImageProps } from '../types/types';

const Dashboard = () => {
    const [ selectedImg, setSelectedImg ] = useState<modalImageProps|null>(null);
    
    const onKeyDownHandler : React.KeyboardEventHandler<HTMLDivElement> = (evt) => {
        if (evt.key === 'Escape' || evt.key === 'Esc') setSelectedImg(null);
    }
    return (
        <div className='App' onKeyDown={onKeyDownHandler}>
            <div className='App-header'>
                <Title />
                <AuthForm />
            </div>
            <UploadForm />
            <Suspense fallback={<div className='App-spinner'></div>}>
                <ImageGrid setSelectedImg={setSelectedImg} />
            </Suspense>
            {selectedImg && <Modal 
                                    selectedImg={selectedImg} 
                                    setSelectedImg={setSelectedImg} 
                                    /> }
        </div>
    )
}

export default Dashboard
