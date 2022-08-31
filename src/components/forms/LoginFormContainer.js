import { connect } from "react-redux/es/exports";
import { thunkLoginUser } from "../Redux/auth-reducer";
import LoginForm from "./LoginForm";

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { loginUser: thunkLoginUser })(
  LoginForm
);
