import React, {useState} from 'react';
import {Redirect} from "react-router-dom";

const Main = () => {
    const [page, setPage] = useState('');
    switch (page) {
        case 'login':
            return (<Redirect to="/login"/>);
        case 'register':
            return (<Redirect to="/register"/>);
        default:
            return (
                <div>
                    <button className='green' onClick={() => setPage('login')}>Login</button>
                    <button className='red' onClick={() => setPage('register')}>Register</button>
                </div>
            );
    }
};

export default Main;