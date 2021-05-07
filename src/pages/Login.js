import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="heading__secondary">Ingresa</div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form__control">
          <label className="form__label">Email</label>
          <input
            className="form__input"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form__control">
          <label className="form__label">Contraseña</label>
          <input
            {...register("password", { required: true })}
            className="form__input"
          />
        </div>
        {errors.password || errors.email ? (
          <span>Por favor, llene todos los campos.</span>
        ) : null}
        <input type="submit" />
        <div className="form__cta-register">
          ¿Necesitas registrarte? <a href="#">Haz click aquí!</a>
        </div>
      </form>
    </>
  );
};

export default Login;
