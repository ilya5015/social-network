import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { loginUser } from "../Redux/auth-reducer";
import { Button, Form, Input } from "antd";
import { toggleIsFetching } from "../Redux/auth-reducer";
import "./LoginForm.css";

const LoginForm = () => {
  const [isFetching, isAuth] = useAppSelector((state) => [
    state.authReducer.isFetching,
    state.authReducer.isAuth,
  ]);
  const dispatch = useAppDispatch();

  const onFinish = (data) => {
    console.log("Success:", data);
    dispatch(toggleIsFetching({ toggler: true }));
    dispatch(loginUser({ loginData: data })).then(() => {
      dispatch(toggleIsFetching({ toggler: false }));
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const { register, handleSubmit } = useForm({
  //   login: "",
  //   password: "",
  //   rememberMe: false,
  // });

  // isAuth ? (
  //   <Navigate to="/profile" />
  // ) :
  if (isAuth) {
    return <Navigate to="/profile" />;
  } else {
    return (
      <div className="login-form">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 10,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="login"
            name="login"
            rules={[
              {
                required: true,
                message: "Please input your login!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={isFetching ? { color: "red" } : {}}
          >
            Submit
          </Button>
        </Form>
        <div>
          <NavLink to="/register">Ещё нет аккаунта? Зарегистрируйтесь!</NavLink>
        </div>
      </div>
    );
  }
};

export default LoginForm;
