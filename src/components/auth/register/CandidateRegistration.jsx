import React, { useState } from "react";
import AboutAcount from "../AboutAccount";
import AutenticationCard from "../AutenticationCard";
import {
  InputBorderBottom,
  PhoneInputField,
  CodeInputField,
} from "../../specific/ComponentsForm";
import ButtonPrimary from "../../specific/ButtonPrimary";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/AuthContext";
import { Alert } from "@mui/material";
import { UseCandidate } from "../../../context/profiles/CandidateContext";
function CandidateRegistration() {
  const {register,errors} = useAuth()
  const { registerCandidate } = UseCandidate()
  
  const navigate = useNavigate();
  const [code, setCode] = useState("+51");
  return (
    <AutenticationCard
      children={
        <div className="rounded-xl">
          {errors.length <= 0 ? "" : <Alert severity="error">{errors}</Alert>}
          <h1 className="color-primary font-semibold text-2xl text-center">
            Registrate como Candidato
          </h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
              surnames: "",
              birthdate: "",
              phone: "",
              country: "",
              cv: "",
            }}
            onSubmit={async (values, action) => {
              try {
                const {
                  email,
                  password,
                  name,
                  surnames,
                  birthdate,
                  phone,
                  cv,
                  country
                } = values;

                const res = await register({email,password,profile_name:'candidate'})
                console.log(res);
                if(res.data) {
                  const userId = res.data.id
                  const resCandidate = await registerCandidate({userId,name,surnames,birthdate,phone,cv,country})
                  if(res.data && resCandidate.data) return navigate("/confirm-email");
                }
              } catch (error) {
                console.log('El error es ',error);
              }
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                {/* Datos sobre la cuenta */}
                <AboutAcount
                  handleChange={handleChange}
                  valueEmail={values.email}
                  valuePassword={values.password}
                />
                <div className="grid grid-cols-2 items-center gap-4">
                  <p className="col-span-2 color-text mt-3 font-semibold">
                    Datos personales
                  </p>

                  <div className="overflow-hidden">
                    <InputBorderBottom
                      name="name"
                      type="text"
                      text="Nombres"
                      onChange={handleChange}
                      value={values.name}
                      required={true}
                    />
                  </div>

                  <div className="overflow-hidden">
                    <InputBorderBottom
                      name="surnames"
                      type="text"
                      text="Apellidos"
                      onChange={handleChange}
                      value={values.surnames}
                      required={true}
                    />
                  </div>

                  <p className="col-span-2 color-text mt-3 font-semibold">
                    Fecha Nacimiento
                  </p>
                  <div className="col-span-2">
                    <input
                      name="birthdate"
                      type="date"
                      onChange={handleChange}
                      value={values.birthdate}
                      required={true}
                    />
                  </div>

                  {/* <PhoneInputField/> */}
                  <div className="flex gap-4 col-span-2">
                    <CodeInputField
                      name="phone"
                      required={true}
                      onChange={(e) => {
                        setCode(e);
                        // setFieldValue("phone", e);
                      }}
                      
                    />
                    <PhoneInputField
                      value={code}
                      required={true}
                      onChange={(value, country) => {
                        setFieldValue("phone", value);
                        setFieldValue("country", country.name);
                      }}
                    />
                  </div>

                  <div className="col-span-2">
                    <InputBorderBottom
                      name="cv"
                      type="url"
                      text="URl portafolio (opcional)"
                      onChange={handleChange}
                      value={values.cv}
                    />
                  </div>

                  <div className="col-span-2">
                    <ButtonPrimary 
                      text= {isSubmitting ? "Creando..." : "Crear Cuenta"}
                      type="submit"  
                      disabled = {isSubmitting}
                      />
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      }
    />
  );
}

export default CandidateRegistration;
