import React, { Suspense } from 'react';
import { AuthProvider } from './AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const SignUp  = React.lazy(() => import('./SignUp'));
const Dashboard = React.lazy(() => import('./Dashboard'));
const  LogIn = React.lazy(() => import('./LogIn'));
const ResetPassword = React.lazy(() => import('./ResetPassword'));
const UpdatePassword = React.lazy(() => import('./UpdatePassword'));

const App = () => {
    

    return (   
        <div className='App-wpapper'>
            <Router>
                <Suspense fallback={<div className='App-spinner'></div>}>
                    <AuthProvider>
                        <Switch>
                            <Route exact path='/ImagegrammApp/' component={Dashboard} />
                            <Route path='/ImagegrammApp/signup' component={SignUp} />
                            <Route path='/ImagegrammApp/login' component={LogIn} />
                            <Route path='/ImagegrammApp/resetPassword' component={ResetPassword} />
                            <Route path='/ImagegrammApp/updatePassword' component={UpdatePassword} />
                        </Switch>
                    </AuthProvider>
                </Suspense>
            </Router>
        </div>
    )
}

export default App
