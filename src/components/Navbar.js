import React from "react";
import { Link } from "react-router-dom";
import {
  AuthCheck,
  // StorageImage,
  useAuth,
  // useSigninCheck,
} from "reactfire";

const Navbar = () => {
  const auth = useAuth();
  // const { status, data: signInCheckResult } = useSigninCheck();

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (signInCheckResult.signedIn === true) {
  //   return <FavoritesList />;
  // } else {
  //   return <SignInForm />;
  // }

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="navbar">
      <div className="navbar__nav">
        <ul className="navbar__list-items">
          <li className="navbar__item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="navbar__item">
            <Link to="/productos">Productos</Link>
          </li>
          <li className="navbar__item">
            <Link to="/nosotros">Nosotros</Link>
          </li>
        </ul>
        <div className="navbar__logo">
          <Link to="/" className="heading-secondary">
            Razors
          </Link>
        </div>
        <ul className="navbar__list-items">
          {/*
        Render `ProfileCard` only if a user is signed in.
        Otherwise, render `LoginForm`
       */}
          <AuthCheck
            fallback={
              <li className="navbar__item">
                <Link to="/ingresar">Ingresar</Link>
              </li>
            }
          >
            <li className="navbar__item">
              <Link onClick={signOut} to="/">
                Logout
              </Link>
            </li>
          </AuthCheck>
          <li className="navbar__item">
            <Link to="/subir_producto">Subir</Link>
          </li>
          {/* <li className="navbar__item">
            <Link to="/carrito">Cart</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
