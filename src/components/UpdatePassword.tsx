import { EmailAuthProvider } from '@firebase/auth';
import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthProvider';


const UpdatePassword = () => {
    const [ error, setError ] = useState<string | null>(null);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ message, setMessage] = useState<string | null>(null);

    const passwordRef = useRef<HTMLInputElement | null>(null);
    const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

    const { updatePass, currentUser } = useAuth();
    const user = currentUser?.email;
    const history = useHistory();

    const onUpdateClickHandler : React.MouseEventHandler<HTMLButtonElement> = async (evt) => {
        evt.preventDefault();
        setError(null);
        
        if (confirmPasswordRef.current === null ||  passwordRef.current === null) {
            return setError('Auth form error');
            
        }
        if (passwordRef.current.value !== confirmPasswordRef.current.value) return setError(`Password don't match`);
        if (!currentUser) {
            return setError('User not found')
        }
        try {
            setError(null);
            setLoading(true);
            await updatePass(currentUser, passwordRef.current.value);
        } catch(e) {
            setLoading(false);
            return setError(e.message)
        }
        
        setLoading(false);
        setMessage('Password updated successfully');
        await window.setTimeout(()=> { 
        history.push('/ImagegrammApp/')
        }, 2000);
    };
    return (
        <>
        {user && 
        (<form className='App-authForm'>
            <legend className='App-authForm-legend'>Update Password</legend>
            <fieldset className='App-authForm__fieldset'>
                <label htmlFor='UserEmailField'>User email</label>
                <input type='email' id='UserEmailField' defaultValue={user} disabled placeholder='User email' required />
                <label htmlFor='PasswordField'>Password</label>
                <input type='password' id='PasswordField' ref={passwordRef} autoComplete='new-password' placeholder='New password' required />
                <label htmlFor='PasswordConfirmField'>Password confirm</label>
                <input type='password' id='PasswordConfirmField' ref={confirmPasswordRef} autoComplete='new-password' placeholder='New password again' required />
                <button onClick={ onUpdateClickHandler } disabled={loading} type="submit" className='App-authForm__btn'>Update password</button>
                {error && (<div className='error'>{error}</div>)}
                {message && (<div className='success'>{message}</div>)}
            </fieldset>
            <span className='App-authForm__link'><Link to='/ImagegrammApp/'>Back to app</Link></span>
        </form>)}
        {!currentUser && <h2>You need to login for update password</h2>}
        </>
    )
}
export default UpdatePassword
