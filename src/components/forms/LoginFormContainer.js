import { connect } from "react-redux/es/exports";
import { loginUser } from "../Redux/auth-reducer";
import LoginForm from "./LoginForm";

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { loginUser })(LoginForm);
