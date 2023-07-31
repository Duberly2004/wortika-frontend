import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import ButtonPrimary from "../specific/ButtonPrimary";
import "../../styles/components.css";
import { InputForm } from "../specific/ComponentsForm";
import { Link } from "react-router-dom";
import AutenticationCard from "./AutenticationCard";
import { useAuth } from "../../context/auth/AuthContext";
import { Alert } from "@mui/material";

function Login() {
  const navigate = useNavigate();
  const { login, errors} = useAuth();


  return (
    <AutenticationCard
      children={
        <div className="rounded-xl">
          {errors.length <= 0 ? "" : <Alert severity="error">{errors}</Alert>}

          <h1 className="color-primary font-semibold text-2xl text-center">
            <span className="text-gray-600">¡Hola</span>, te damos la{" "}
            <br className="md:block hidden" /> Bienvenida!
          </h1>

          {/* Formik */}
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values, actions) => {
              try {
                await login(values);
                navigate("/profile/");
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <label className="color-text" htmlFor="email">
                    Email
                  </label>
                  <InputForm
                    type="email"
                    name="email"
                    placeholder="duberly@gmail.com"
                    autofocus={true}
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>

                <div className="mt-4">
                  <label className="color-text" htmlFor="password">
                    Contraseña
                  </label>
                  <InputForm
                    type="password"
                    name="password"
                    placeholder="*********"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>

                <div className="text-center mt-4">
                  <Link className="color-text">¿Olvidaste tu contraseña?</Link>
                </div>

                <div className="mt-4">
                  <ButtonPrimary
                    type='submit'
                    text={isSubmitting ? "Iniciando..." : "Iniciar Sesión"}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex flex-row items-center justify-center mt-3">
                  <hr className="bg-gray-w-10 font-bold w-32" />{" "}
                  <span className="text-gray-600 font-semibold px-2">O</span>
                  <hr className="bg-gray-w-10 font-bold w-32" />
                </div>

                <div className="mt-3">
                  <p className="color-text text-center text-md text-gray-w-5 font-normal">
                    <Link
                      to={"/register/company"}
                      className="color-primary font-medium"
                    >
                      {" "}
                      ¡Regístrate{" "}
                    </Link>
                    en Wortika!
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      }
    />
  );
}

export default Login;
