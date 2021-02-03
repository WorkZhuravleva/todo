import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {taskReducer} from "../reducer/taskReducer";

const initialState = {
    login: '',
    tasks: [],
    sort: 'created'
};

export const store = createStore(taskReducer, initialState, applyMiddleware(thunk));