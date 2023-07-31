import React, { useState } from "react";
import { Alert } from "@mui/material";

import AutenticationCard from "../AutenticationCard";
import AboutAcount from "../AboutAccount";
import {
  CodeInputField,
  InputAutocomplete,
  InputBorderBottom,
  PhoneInputField,
} from "../../specific/ComponentsForm";
import ButtonPrimary from "../../specific/ButtonPrimary";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/AuthContext";
import { UseCompany } from "../../../context/profiles/CompanyContext";


function CompanyRegistration() {
  const { register, errors } = useAuth();
  const { registerCompany } = UseCompany()
  const navigate = useNavigate();
  const [code, setCode] = useState("+51");
  return (
    <AutenticationCard
      children={
        <div className="rounded-xl">
          {errors.length <= 0 ? "" : <Alert severity="error">{errors}</Alert>}
          <h1 className="color-primary font-semibold text-2xl text-center">
            Registrate como Empresa
          </h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
              name: "",
              size: "",
              sector: "",
              phone: "",
              country: "",
              address: "",
              website: "",
            }}
            onSubmit={async (values, action) => {
              try {
                const {
                  email,
                  password,
                  name,
                  size,
                  sector,
                  phone,
                  country,
                  address,
                  website,  
                } = values;

                const res = await register({ email, password,profile_name:'company' });
                console.log('el response es ', res)
                if(res.data) {
                  const userId = res.data.id
                  const resCompany = await registerCompany({userId,name, size, sector, phone, country, address, website})
                  if(res.data && resCompany.data) return navigate("/confirm-email");
                }
              } catch (error) {
                console.log('Errror en el formulario de registro',error);
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
                  {/* Informacion sobre la empresa */}
                  <div className="col-span-2">
                    <p className="mb-4 color-text mt-3 font-semibold">
                      Información sobre la empresa
                    </p>
                  </div>

                  <div className="col-span-2">
                    <InputBorderBottom
                      name="name"
                      type="text"
                      text="Nombre Comercial"
                      onChange={handleChange}
                      value={values.name}
                      required={true}
                    />
                  </div>

                  <InputAutocomplete
                    label="Sector industrial"
                    name="sector"
                    onChange={(e, value) => {
                      const sectorValue = value ? value.title : "";
                      setFieldValue("sector", sectorValue);
                    }}
                    value={values.sector}
                    required={true}
                    options={[
                      { title: "Manufactura" },
                      { title: "Tecnología de la Información" },
                      { title: "Automotriz" },
                      { title: "Energía" },
                      { title: "Alimentos y Bebidas" },
                      { title: "Construcción" },
                      { title: "Aeroespacial" },
                      { title: "Farmacéutica" },
                      { title: "Electrónica" },
                      { title: "Telecomunicaciones" },
                      { title: "Química" },
                      { title: "Transporte y Logística" },
                      { title: "Textil y Moda" },
                      { title: "Salud y Cuidado" },
                      { title: "Medio Ambiente" },
                      { title: "Financiero y Banca" },
                      { title: "Servicios Profesionales" },
                      { title: "Educación" },
                      { title: "Turismo y Hospitalidad" },
                      { title: "Medios y Entretenimiento" },
                      { title: "Otros" },
                      // Agrega más sectores según sea necesario
                    ]}
                    
                  />

                  <InputAutocomplete
                    label="Tamaño de la empresa"
                    name="size"
                    required={true}
                    onChange={(e, value) => {
                      const sizeValue = value ? value.title : "";
                      setFieldValue("size", sizeValue);
                    }}
                    value={values.size}
                    options={[
                      { title: "Microempresa (0-9 empleados)" },
                      { title: "Pequeña empresa (10-49 empleados)" },
                      { title: "Mediana empresa (50-249 empleados)" },
                      { title: "Gran empresa (250 o más empleados)" },
                      { title: "Empresa individual (Empresario/a independiente)" },
                      { title: "Startup (Empresa emergente)" },
                      { title: "Pyme (Pequeña y Mediana Empresa)" },
                      { title: "Corporación (Corporation)" },
                      { title: "Multinacional (Empresa con operaciones internacionales)" },
                      { title: "No aplica" },
                      // Agrega más opciones según sea necesario
                    ]}
                  />

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

                  <InputBorderBottom
                    name="address"
                    type="text"
                    text="Dirección (Opcional)"
                    onChange={handleChange}
                    value={values.address}
                  />

                  <InputBorderBottom
                    name="website"
                    type="url"
                    text="Sitio web"
                    onChange={handleChange}
                    value={values.website}
                  />

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

export default CompanyRegistration;
