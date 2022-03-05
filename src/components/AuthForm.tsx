import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider'

const AuthForm = () => {

    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const { currentUser, logOut } = useAuth();
    const user = currentUser?.email;

    const logOutHandler : React.MouseEventHandler<HTMLButtonElement> = async () => {
        setError(null);
        setLoading(true);
        try {
            await logOut()
        } catch(e) {
            setError(new Error('Failed to logout'))
        }
        setLoading(false);
    }

    const name = (user) ? 
                            user.slice(0, user.search(/\@/g)) : 
                            null;

    const layout = currentUser ? (
                                    <div className='App-logoutForm'>
                                        <h3>
                                            {`Active user : ${name}`}
                                        </h3>
                                        <Link to='/ImagegrammApp/updatePassword'>
                                            <button className='App-logout__btn'>
                                                Update password
                                            </button>
                                        </Link>
                                        <button 
                                                onClick={logOutHandler} 
                                                disabled={loading} 
                                                className='App-logout__btn'
                                        >
                                            Log out
                                        </button>
                                        {error && (<span className='error'>
                                            {error.message}
                                        </span>)} 
                                    </div>
                                    ): 
                                    (
                                        <nav className='App-auth__nav'>
                                            <Link to='/ImagegrammApp/login'>
                                                Log in
                                            </Link>
                                            <Link to='/ImagegrammApp/signup'>
                                                Sign up
                                            </Link>
                                        </nav>
                                    );

    return (
        <>
        {layout}
        </>
    )
}

export default AuthForm;
