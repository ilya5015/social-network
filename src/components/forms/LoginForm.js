import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { loginUser } from "../Redux/auth-reducer";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    login: "",
    password: "",
    rememberMe: false,
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          dispatch(loginUser({ loginData: data }));
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
        <input type="submit" onClick={() => {}} />
      </form>
      <NavLink to="/register">Ещё нет аккаунта? Зарегистрируйся!</NavLink>
    </div>
  );
};

export default LoginForm;
