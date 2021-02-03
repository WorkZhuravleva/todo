import React, {useState} from 'react';

const Task = props => {
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(props.task.title);

    const handleClickDelete = () => {
        props.deleteTask(props.login, props.task.createdDate);
    }

    const handleClickUpdate = () => {
        setEdit(true);
    }

    const handleClickSave = () => {
        props.updateTask(props.login, props.task.createdDate, {"title": title, "done": props.task.done});
        setEdit(false);
    }

    const handleChangeDone = () => {
        props.updateTask(props.login, props.task.createdDate, {"title": title, "done": !props.task.done});
    }

    return (
        <tr>
            <td>{edit ? <textarea className='newTask'
                                  defaultValue={props.task.title}
                                  onChange={event => setTitle(event.target.value)}/> : props.task.title}</td>
            <td>{props.task.createdDate}</td>
            <td>{props.task.modifiedDate}</td>
            <td>
                <input type='checkbox' checked={props.task.done} onChange={handleChangeDone}/>
            </td>
            <td className='buttons'>
                <button className='red' onClick={handleClickDelete}>Delete</button>
                {edit ? <button className='green' onClick={handleClickSave}>Save</button> : <button className='green' onClick={handleClickUpdate}>Update</button>}
            </td>
        </tr>
    );
}

export default Task;