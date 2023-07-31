import React from "react";
import { PiWarningCircleLight } from "react-icons/pi";
import { InputBorderBottom } from "../specific/ComponentsForm";

function FormRegister(props) {
  return (
        <div className="rounded-xl">
          <p className="mb-4 color-text mt-3 font-semibold">Datos sobre la cuenta</p>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="flex items-center overflow-hidden">
              <InputBorderBottom 
              name="email"
              type="email" 
              text="Correo" 
              required={true}
              onChange={props.handleChange}
              value={props.valueEmail}
              />
            </div>

            <div className="flex items-center overflow-hidden">
              <InputBorderBottom 
              required={true}
              name="password"
              type="password" 
              text="Contraseña" 
              onChange={props.handleChange}
              value={props.valuePassword}
              />
            </div>
            <div></div>
            <div>
              <p className="color-text text-sm flex">
                <span className="mr-1 text-lg color-primary">
                  <PiWarningCircleLight/>
                </span>
                Usa ocho o más caracteres con una combinación de letras, números
                y símbolos.
              </p>
            </div>
          </div>
        </div>
  );
}

export default FormRegister;
