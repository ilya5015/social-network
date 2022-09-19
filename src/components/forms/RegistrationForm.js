import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/hooks";
import { registerUser } from "../Redux/auth-reducer";
import { Button, Checkbox, Form, Input } from "antd";

const RegistrationForm = () => {
  const dispatch = useAppDispatch();

  const onFinish = (data) => {
    console.log("Success:", data);
    dispatch(registerUser({ registrationData: data }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const { register, handleSubmit } = useForm({
  //   login: "",
  //   password: "",
  //   email: "",
  //   name: "",
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
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      {/* <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          dispatch(registerUser({ registrationData: data }));
        })}
      >
        <input
          defaultValue=""
          {...register("login", { required: true })}
          placeholder="login"
        />
        <input
          defaultValue=""
          {...register("password", { required: true })}
          placeholder="password"
        />
        <input
          defaultValue=""
          {...register("email", { required: true })}
          placeholder="email"
        />
        <input
          defaultValue=""
          {...register("name", { required: true })}
          placeholder="name"
        />
        <Button
          onClick={handleSubmit((data) => {
            console.log(data);
            dispatch(registerUser({ registrationData: data }));
          })}
        >
          Отправить
        </Button>
      </form> */}
    </div>
  );
};

export default RegistrationForm;
