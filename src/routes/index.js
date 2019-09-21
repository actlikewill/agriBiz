import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from "../components/Layout";
import Profile from "../pages/Profile";



const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Layout>
            <Switch>
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </Layout>
    </Switch>
);

export default Routes;
