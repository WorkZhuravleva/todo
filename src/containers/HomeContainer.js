import {connect} from "react-redux";
import Home from "../components/Home";

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(Home);