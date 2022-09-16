import React from "react";
import { useForm } from "react-hook-form";
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
        <input type="checkbox" {...register("rememberMe")} id="checkbox1" />
        <label htmlFor="checkbox1">Remember me!</label>
        <input type="submit" onClick={() => {}} />
      </form>
    </div>
  );
};

export default LoginForm;
