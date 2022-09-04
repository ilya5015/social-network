import { connect } from "react-redux/es/exports";
import { thunkLoginUser } from "../../components/Redux/auth-reducer";
import LoginForm from "./_LoginForm";

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { loginUser: thunkLoginUser })(
  LoginForm
);
