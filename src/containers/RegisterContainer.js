import {bindActionCreators} from "redux";
import {register} from "../actions/userActions";
import {connect} from "react-redux";
import Register from "../components/Register";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({register}, dispatch);
}

export default connect(null, mapDispatchToProps)(Register);