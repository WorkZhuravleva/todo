import React, {useState} from 'react';

const Register = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleClickReset() {
        setLogin('');
        setPassword('');
    }

    function handleClickRegister() {
        const user = {login, password};
        props.register(user);
    }

    return (
        <div>
            <label>login:
                <input
                    onChange={(e) => setLogin(e.target.value)}
                    type='text'
                    value={login}
                />
            </label>
            <label>password:
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    value={password}
                />
            </label>
            <button className='red' onClick={handleClickRegister}>Register</button>
            <button className='green' onClick={handleClickReset}>Reset</button>
        </div>
    );
};

export default Register;