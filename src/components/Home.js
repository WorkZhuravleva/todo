import React from 'react';
import Login from "../containers/LoginContainer";
import Register from "../containers/RegisterContainer";
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "./Main";
import Profile from "./Profile";

const Home = ({login}) => {
    return (
        <Switch>
            <Route exact path='/login'>
                {login ? <Redirect to="/profile"/> : <Login/>}
            </Route>
            <Route exact path='/register'>
                {login ? <Redirect to="/profile"/> : <Register/>}
            </Route>
            <Route exact path={['/', '/home']}>
                {login ? <Redirect to="/profile"/> : <Main/>}
            </Route>
            <Route exact path='/profile'>
                {login ? <Profile/> : <Redirect to="/home"/>}
            </Route>
        </Switch>
    );
};


export default Home;

