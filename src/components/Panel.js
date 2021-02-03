import React, {useState} from 'react';
import {Redirect} from "react-router-dom";

const Panel = props => {
    const [task, setTask] = useState('');

    const handleClickButtonAdd = () => {
        props.addTask(props.login, task);
        setTask('');
    }

    const handleClickLogout = () => {
        props.logout();
        return <Redirect to={"/home"}/>
    }

    const handleChangeSelect = (event) => {
        props.sortTask(props.tasks, event.target.value);
    }

    return (
        <div className='panel'>
            <div className='add'>
                <textarea
                    className='newTask'
                    placeholder='Add new task'
                    value={task}
                    onChange={event => setTask(event.target.value)}
                />
                <button className='addButton' onClick={handleClickButtonAdd}>Add item</button>
            </div>
            <div className='sorting'>
                <p>Sort by:</p>
                <select className='select' onChange={event => {handleChangeSelect(event)}}>
                    <option value='created'>Created Date</option>
                    <option value='modified'>Modified Date</option>
                </select>
            </div>
            <button className='clear' onClick={handleClickLogout}>Logout</button>
        </div>
    );
}

export default Panel;