import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { loginUser } from "../Redux/auth-reducer";
import { Button, Form, Input } from "antd";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const onFinish = (data) => {
    console.log("Success:", data);
    dispatch(loginUser({ loginData: data }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const { register, handleSubmit } = useForm({
  //   login: "",
  //   password: "",
  //   rememberMe: false,
  // });
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
