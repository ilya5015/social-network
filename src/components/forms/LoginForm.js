import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { loginUser } from "../Redux/auth-reducer";
import { Button, Form, Input } from "antd";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    login: "",
    password: "",
    rememberMe: false,
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div>
      <form>
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
        <Button
          onClick={handleSubmit((data) => {
            console.log(data);
            dispatch(loginUser({ loginData: data }));
          })}
        >
          Отправить
        </Button>
      </form>
      <Button type="link">
        <NavLink to="/register">Ещё нет аккаунта? Зарегистрируйся!</NavLink>
      </Button>
    </div>
  );
};

export default LoginForm;
