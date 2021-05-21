import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  AuthCheck,
  // StorageImage,
  useAuth,
  // useSigninCheck,
} from "reactfire";

const Register = (props) => {
  const auth = useAuth();
  // const { status, data: signInCheckResult } = useSigninCheck();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUp = ({ email, password }) => {
    console.log("signUp", email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(props.history.push("/ingresar"))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode, errorMessage", errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="heading-secondary text-center">Regístrate</div>
      <form onSubmit={handleSubmit(signUp)} className="form">
        <div className="form__control">
          <label className="form__label">Nombre de usuario</label>
          <input
            className="form__input"
            {...register("username", { required: true })}
          />
        </div>
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
            type="password"
            {...register("password", { required: true })}
            className="form__input"
          />
        </div>
        {errors.password || errors.email ? (
          <span>Por favor, llene todos los campos.</span>
        ) : null}
        <input type="submit" />
        <div className="form__cta-register">
          ¿Ya estás registrado? <Link to="/login">Haz click aquí!</Link>
        </div>
      </form>
    </>
  );
};

export default Register;
