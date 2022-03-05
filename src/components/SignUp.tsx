import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthProvider';


const SignUp = () => {
    const [ error, setError ] = useState<string | null>(null);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ message, setMessage] = useState<string | null>(null);

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

    const { signUp } = useAuth();
    const history = useHistory();
    const emailCheckRegexp = /.+@.+\..+/i;

    const onSignInClickHandler : React.MouseEventHandler<HTMLButtonElement> = async (evt) => {
        evt.preventDefault();
        setError(null);
        
        if (confirmPasswordRef.current === null || emailRef.current === null || passwordRef.current === null) {
            return setError('Auth form error');
            
        }

        if (!(emailCheckRegexp.test(emailRef.current.value))) return setError('Email address incorrect') ; 

        if (passwordRef.current.value !== confirmPasswordRef.current.value) return setError(`Password don't match`);

        try {
            setError(null);
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);
        } catch(e) {
            setLoading(false);
            return setError(e.message)
        }

        setLoading(false);
        setMessage('Sing up successfully');

        await window.setTimeout(()=> { 
        history.push('/ImagegrammApp/')
        }, 2000);
    };
    return (
        <form className='App-authForm'>
            <legend className='App-authForm-legend'>
                Sign up to Imagegramm
            </legend>
            
            <fieldset className='App-authForm__fieldset'>
                <label htmlFor='UserEmailField'>
                    User email
                </label>
                <input 
                        type='email' 
                        id='UserEmailField' 
                        ref={emailRef} 
                        placeholder='User email' 
                        required 
                />
                <label htmlFor='PasswordField'>
                    Password
                </label>
                <input 
                        type='password' 
                        id='PasswordField' 
                        ref={passwordRef} 
                        autoComplete='new-password' 
                        placeholder='Password' 
                        required 
                />
                <label htmlFor='PasswordConfirmField'>
                    Password confirm
                </label>
                <input 
                        type='password' 
                        id='PasswordConfirmField' 
                        ref={confirmPasswordRef} 
                        autoComplete='new-password' 
                        placeholder='Password again' 
                        required 
                />
                <button 
                        onClick={ onSignInClickHandler } 
                        disabled={loading} 
                        className='App-authForm__btn'
                >
                    Sign up
                </button>

                {error && ( <div className='error'>
                                {error}
                            </div>)
                }

                {message && (<div className='success'>
                                {message}
                            </div>)
                }

            </fieldset>
            <span className='App-authForm__link'>
                Already have an account :<Link to='/ImagegrammApp/login'>
                                            Log in
                                         </Link>
            </span>
            <span className='App-authForm__link'>
                <Link to='/ImagegrammApp/'>
                    Back to app
                </Link>
            </span>
        </form>
    )
}

export default SignUp;
