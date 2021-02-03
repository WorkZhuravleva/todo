import TaskTable from '../components/TaskTable';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {deleteTaskAction, updateTaskAction} from "../actions/taskActions";

function mapStateToProps (state){
    return {
        login: state.login,
        tasks: state.tasks
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        deleteTask: deleteTaskAction,
        updateTask: updateTaskAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskTable);