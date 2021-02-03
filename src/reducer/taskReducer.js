import {
    REQUEST_TASKS,
    SUCCESS_ADD,
    SUCCESS_DELETE,
    SUCCESS_SORT,
    SUCCESS_TASKS,
    SUCCESS_UPDATE
} from "../actions/taskActions";
import {LOGOUT, SUCCESS_RESPONSE} from "../actions/userActions";


export const taskReducer = (state, action) => {
    switch (action.type) {
        case SUCCESS_RESPONSE:
            return {...state, login: action.payload.login, tasks: action.payload.tasks}
        case REQUEST_TASKS:
            return {...state};
        case SUCCESS_ADD:
            return {...state, tasks: [...state.tasks, action.payload]};
        case SUCCESS_DELETE: {
            const tasks = state.tasks.filter(item => item.createdDate !== action.payload);
            return {...state, tasks};
        }
        case SUCCESS_UPDATE: {
            const tasks = [...state.tasks];
            const index = tasks.findIndex(item => item.createdDate === action.payload.createdDate);
            tasks[index] = action.payload;
            return {...state, tasks};
        }
        case SUCCESS_TASKS:
            return {...state, ...action.payload};
        case SUCCESS_SORT:
            return {...state, tasks: [...action.payload]};
        case LOGOUT:
            return {login: '', tasks: [], sort: 'created'};
        default:
            return state;
    }
}