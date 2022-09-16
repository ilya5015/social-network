import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/hooks";
import { registerUser } from "../Redux/auth-reducer";

const RegistrationForm = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    login: "",
    password: "",
    email: "",
    name: "",
  });
  return (
    <div>
      <form
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
        <input type="submit" onClick={() => {}} />
      </form>
    </div>
  );
};

export default RegistrationForm;
