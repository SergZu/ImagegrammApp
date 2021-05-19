import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthProvider';


const LogIn = () => {
    const [ error, setError ] = useState<string>('');
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ message, setMessage ] = useState<string>('');

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const { logIn } = useAuth();
    const history = useHistory();
    const emailCheckRegexp = /.+@.+\..+/i;

    const onLogInClickHandler : React.MouseEventHandler<HTMLButtonElement> = async (evt) => {
        evt.preventDefault();
        
        if (emailRef.current === null || passwordRef.current === null) {
            return setError('Auth form error');
            
        }
        if (!(emailCheckRegexp.test(emailRef.current.value))) return setError('Email address incorrect') ; 
        try {
            setError('');
            setLoading(true);
            await logIn(emailRef.current.value, passwordRef.current.value);
        } catch(e) {
            const { message } = e;
            setLoading(false);
            return setError(message);
        }           
        setLoading(false);
            setMessage('Log in successfully');
            await window.setTimeout(()=> { 
            history.push('/')
        }, 2000); 
    };
    return (
        <form className='App-authForm'>
            <legend className='App-authForm-legend'>Log in to Imagegramm</legend> 
            <fieldset className='App-authForm__fieldset'>
                <label htmlFor='UserEmailField'>User email</label>
                <input type='email' id='UserEmailField' ref={emailRef} placeholder='User email' required />
                <label htmlFor='PasswordField'>Password</label>
                <input type='password' id='PasswordField' ref={passwordRef} autoComplete='current-password' placeholder='Password' required />
                <button onClick={onLogInClickHandler} disabled={loading} className='App-authForm__btn'>Log In</button>
                {error && (<div className='error'>{error}</div>)}
                {message && (<div className='success'>{message}</div>)}
            </fieldset>
            <span className='App-authForm__link'>Need an account :<Link to='/ImagegrammApp/signup'>Sign up</Link></span>
            <span className='App-authForm__link'>Forgot password ? <Link to='/ImagegrammApp/resetPassword'>Reset password</Link></span>
            <span className='App-authForm__link'><Link to='/ImagegrammApp/'>Back to app</Link></span>
        </form>
    )
}

export default LogIn
