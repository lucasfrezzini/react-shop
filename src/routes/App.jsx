import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/recovery-password" component={RecoveryPassword}></Route>
                    <Route exact path="/send-email" component={SendEmail} />
                    <Route exact path="/new-password" component={NewPassword} />
                    <Route exact path="/account" component={MyAccount} />
                    <Route exact path="/signup" component={CreateAccount} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/orders" component={Orders} />
                    <Route exact path="*" component={NotFound}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>        
    )
}

export default App
