import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  AuthCheck,
  // StorageImage,
  useAuth,
  // useSigninCheck,
} from "reactfire";

const Login = (props) => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signIn = ({ email, password }) => {
    console.log("email, password", email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        props.history.push("/");
        console.log("success");
      })
      .catch((error) => {
        console.log("success", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode, errorMessage", errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="heading-secondary text-center">Ingresar</div>
      <form onSubmit={handleSubmit(signIn)} className="form">
        <div className="form__control">
          <label className="form__label">Correo electrónico</label>
          <input
            type="email"
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
          ¿Necesitas registrarte? <Link to="/registrarse">Haz click aquí!</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
