import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="heading-secondary text-center">Ingresa</div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form__control">
          <label className="form__label">Correo electrónico</label>
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
          ¿Necesitas registrarte? <Link to="/register">Haz click aquí!</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
