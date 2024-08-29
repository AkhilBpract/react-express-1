import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const methods = useForm();
  const { register, handleSubmit } = methods;
  const onSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("email")} placeholder="Name" />
        <input type="text" {...register("password")} placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
