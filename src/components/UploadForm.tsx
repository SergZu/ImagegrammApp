import React, { useState } from 'react';
import { useAuth } from './AuthProvider';
import ProgressBar from './ProgressBar';


const UploadForm = () => {
    const [ file, setFile ] = useState<File|null>( null );
    const [ error, setError ] = useState<string|null>( null );
    const [ title, setTitle] = useState<string>('');
    const [ submitReady, setSubmitReady ] = useState<boolean>(false);

    const allowedFileTypes = ['image/png', 'image/jpeg'];

    const { currentUser } = useAuth();

    const addFileHandler : React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        const targetFiles = evt.target.files;

        if (targetFiles !== null && allowedFileTypes.includes(targetFiles[0].type) ) {
            setFile(targetFiles[0]);
            setError(null);
        }
        else {
            setFile(null);
            setError('Please select an image file (*.png or *.jpeg)');
        }
    }

    const onTitleChangeHandler : React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        let value = evt.target.value;
        if (value.length > 65) value = value.slice(0, 65);
        setTitle(value);
    }

    const onSubmitHandler : React.MouseEventHandler<HTMLButtonElement> = (evt) => {
        evt.preventDefault();
        if (file && title.length) setSubmitReady(true);
            else setSubmitReady(false)
    }
    return (
        <form className='App-uploadForm'>
          { currentUser && (<><label htmlFor='file-upload-form' className='file-upload-form__label' tabIndex={0}>
              <input type="file" name="Upload" id="file-upload-form" onChange={addFileHandler} />
          </label>
          { (file && !error) &&(<>
            <label htmlFor='file-upload-title' title='Image title (less than 65 characters)'>Title</label>
            <input type='text' id='file-upload-title' placeholder='Image title' onChange={onTitleChangeHandler} value={title} />
            <button className='App-uploadForm__btn' onClick={onSubmitHandler}>Upload</button></>)}
            {submitReady && <ProgressBar file={file as File} setFile={setFile} setTitle={setTitle} title={title} user={currentUser.email} setSubmitReady={setSubmitReady} />}
          </>)}
          { error && (<div className='error'>{error}</div>) }
          { currentUser === null && (<label className='App-uploadForm__placeholder-noauth'>Uploading files require sign in</label>)} 
        </form>
    )
}

export default UploadForm;
