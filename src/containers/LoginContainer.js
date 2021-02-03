import {bindActionCreators} from "redux";
import {login} from "../actions/userActions";
import {connect} from "react-redux";
import Login from "../components/Login";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({login}, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);