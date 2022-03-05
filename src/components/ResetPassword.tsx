import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ResetPassword = () => {
   const [ error, setError ] = useState<string | null>(null);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ message, setMessage] = useState<string | null>(null);

    const emailRef = useRef<HTMLInputElement | null>(null);

    const { resetPassword } = useAuth();
    const history = useHistory();
    const emailCheckRegexp = /.+@.+\..+/i;

    const onResetClickHandler : React.MouseEventHandler<HTMLButtonElement> = async (evt) => {
        evt.preventDefault();
        setError(null);
        
        if (emailRef.current === null) {
            return setError('Auth form error');
            
        }
        if (!(emailCheckRegexp.test(emailRef.current.value))) return setError('Email address incorrect') ; 

        try {
            setError(null);
            setLoading(true);
            await resetPassword(emailRef.current.value);
        } catch(e) {
            setLoading(false);
            return setError(e.message)
        }

        setLoading(false);
        setMessage('Password reset successful, check your inbox for further instructions');

        await window.setTimeout(()=> { 
        history.push('/ImagegrammApp/')
        }, 2000);
    };
    return (
        <form className='App-authForm'>
            <legend className='App-authForm-legend'>
                Password Reset
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
                <button 
                        onClick={onResetClickHandler} 
                        disabled={loading} 
                        className='App-authForm__btn'
                >
                    Reset password
                </button>

                {error && (<div className='error'>
                               {error}
                           </div>)
                }

                {message && (<div className='success'>
                                {message}
                             </div>)
                }

            </fieldset>
            <span className='App-authForm__link'>
                <Link to='/ImagegrammApp/'>
                    Back to app
                </Link>
            </span>
        </form>
    )
}


export default ResetPassword
