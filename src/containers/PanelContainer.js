import {bindActionCreators} from "redux";
import {addTaskAction, getTasksAction, sortTaskAction} from "../actions/taskActions";
import {connect} from "react-redux";
import Panel from "../components/Panel";
import {logout} from "../actions/userActions";

function mapStateToProps (state){
    return {
        login: state.login,
        tasks: state.tasks
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getTasks: getTasksAction,
        addTask: addTaskAction,
        sortTask: sortTaskAction,
        logout: logout
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);