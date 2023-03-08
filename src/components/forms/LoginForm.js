import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { loginUser } from "../Redux/auth-reducer";
import { Button, Form, Input } from "antd";
import { toggleIsFetching } from "../Redux/auth-reducer";
import "./LoginForm.css";
import { useForm } from "antd/lib/form/Form";

const LoginForm = () => {
  const [isFetching, isAuth] = useAppSelector((state) => [
    state.authReducer.isFetching,
    state.authReducer.isAuth,
  ]);
  const dispatch = useAppDispatch();

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [form] = useForm();

  const handleOnFinish = (data) => {
    console.log("Success:", data);
    dispatch(toggleIsFetching({ toggler: true }));
    dispatch(loginUser({ loginData: data })).then(() => {
      dispatch(toggleIsFetching({ toggler: false }));
    });
  };

  const handleOnFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleFormChange = () => {
    console.log("fields error", form.getFieldsError());
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    setIsSubmitDisabled(hasErrors);
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
          form={form}
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
          onFinish={handleOnFinish}
          onFinishFailed={handleOnFinishFailed}
          autoComplete="off"
          onFieldsChange={handleFormChange}
        >
          <Form.Item
            name="login"
            rules={[
              {
                required: true,
                message: "Please input your login!",
              },
            ]}
          >
            <Input placeholder="login" className="login-form__input" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input placeholder="Пароль" className="login-form__input" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={isFetching ? { color: "red" } : {}}
            disabled={isSubmitDisabled}
          >
            Войти
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
