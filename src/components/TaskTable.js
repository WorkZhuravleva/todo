import React from 'react';
import Task from "./Task";

const TaskTable = props => {

    const handleDeleteTask = (login, id) => {
        props.deleteTask(login, id);
    }

    const handleUpdateTask = (login, id, content) => {
        props.updateTask(login, id, content);
    }

    return (
        <div className='taskTable'>
            <table className='table'>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Created Date</th>
                    <th>Modified Date</th>
                    <th>Done</th>
                    <th>Delete/Update</th>
                </tr>
                </thead>
                <tbody>
                {props.tasks ? props.tasks.map(item => <Task key={item.createdDate}
                                                             login={props.login}
                                                             task={item}
                                                             deleteTask={handleDeleteTask}
                                                             updateTask={handleUpdateTask}
                />) : <div/>}
                </tbody>
            </table>
        </div>
    );
}

export default TaskTable;