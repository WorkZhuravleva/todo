export const SUCCESS_TASKS = 'SUCCESS_TASKS';
export const SUCCESS_ADD = 'SUCCESS_ADD';
export const REQUEST_TASKS = 'REQUEST_TASKS';
export const SUCCESS_DELETE = 'SUCCESS_DELETE';
export const SUCCESS_UPDATE = 'SUCCESS_UPDATE';
export const SUCCESS_SORT = 'SUCCESS_SORT';
export const ERROR_TASKS = 'ERROR_TASKS';
export const ERROR_DELETE = 'ERROR_DELETE';

export const requestTasks = () => (
    {
        type: REQUEST_TASKS,
        payload: 'pending...'
    }
);

export const errorTasksAction = () => (
    {
        type: ERROR_TASKS,
        payload: 'Operation error'
    }
);

export const errorDeleteAction = () => (
    {
        type: ERROR_DELETE,
        payload: 'Task not found'
    }
);

export const successTasksAction = data => (
    {
        type: SUCCESS_TASKS,
        payload: {
            tasks: data
        }
    }
);
export const successAddAction = data => (
    {
        type: SUCCESS_ADD,
        payload: data
    }
);

export const successDeleteAction = createdDate => (
    {
        type: SUCCESS_DELETE,
        payload: createdDate
    }
);

export const successUpdateAction = data => (
    {
        type: SUCCESS_UPDATE,
        payload: data
    }
);

export const successSortAction = tasks => (
    {
        type: SUCCESS_SORT,
        payload: tasks
    }
);

export const addTaskAction = (login, newTask) => {
    return dispatch => {
        fetch(`http://localhost:8080/todo/user/${login}/task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"title": newTask})
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(task => dispatch(successAddAction(task)))
            .catch(e => {
                console.log(e.message);
                dispatch(errorTasksAction());
            });
    }
}

export const deleteTaskAction = (login, createdDate) => {
    return dispatch => {
        fetch(`http://localhost:8080/todo/user/${login}/task/${createdDate}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                if (data === true) {
                    dispatch(successDeleteAction(createdDate));
                } else {
                    dispatch(errorDeleteAction());
                }
            })
            .catch(e => {
                console.log(e.message);
                dispatch(errorTasksAction());
            });
    }
}

export const updateTaskAction = (login, createdDate, task) => {
    return dispatch => {
        fetch(`http://localhost:8080/todo/user/${login}/task/${createdDate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => dispatch(successUpdateAction(data)))
            .catch(e => {
                console.log(e.message);
                dispatch(errorTasksAction());
            });
    }
}

export const getTasksAction = (login) => {
    return dispatch => {
        dispatch(requestTasks());
        fetch(`http://localhost:8080/todo/user/${login}/tasks`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => dispatch(successTasksAction(data)))
            .catch(e => {
                console.log(e.message);
                dispatch(errorTasksAction());
            });
    }
}


export const sortTaskAction = (tasks, sort) => {
    if (sort === 'created') {
        tasks.sort((t1, t2) => (new Date(t1.createdDate) - new Date(t2.createdDate)));
    } else if (sort === 'modified'){
        tasks.sort((t1, t2) => (new Date(t1.modifiedDate) - new Date(t2.modifiedDate)));
    }
    return dispatch => dispatch(successSortAction(tasks));
}