import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm({
    email: "",
    password: "",
    rememberMe: false,
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          defaultValue=""
          {...register("email", { required: true })}
          placeholder="email"
        />
        <input
          defaultValue=""
          {...register("password", { required: true })}
          placeholder="password"
        />
        <input type="checkbox" {...register("rememberMe")} id="checkbox1" />
        <label htmlFor="checkbox1">Remember me!</label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
