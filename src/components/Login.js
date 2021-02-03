import React, {useState} from 'react';

const Login = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleClickReset() {
        setLogin('');
        setPassword('');
    }

    function handleClickLogin() {
        handleClickReset();
        const token = 'Basic ' + btoa(`${login}:${password}`)
        props.login(token);
    }

    return (
        <div>
            <label>Login:
                <input
                    onChange={(e) => setLogin(e.target.value)}
                    type='text'
                    value={login}
                />
            </label>
            <label>Password:
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    value={password}
                />
            </label>
            <button className='green' onClick={handleClickLogin}>Login</button>
            <button className='red' onClick={handleClickReset}>Reset</button>
        </div>
    );
};


export default Login;