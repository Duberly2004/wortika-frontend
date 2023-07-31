import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PhoneInput  from "react-phone-number-input";
import PhoneInput2 from "react-phone-input-2";
export function InputForm(props) {
  return (
    <input
      type={props.type}
      className="p-4 bg-gray-100 w-full py-2 mt-3 px-3 rounded-xl border-0 outline-none focus:ring-1 focus:ring-gray-w-2 focus:border-gray-w-2"
      name={props.name}
      placeholder={props.placeholder}
      required
      autoFocus={props.autofocus ? true : false}
      onChange={props.onChange}
      value={props.value}
    />
  );
}

export function InputBorderBottom(props) {
  return (
    <TextField
      name={props.name}
      label={props.text}
      variant="standard"
      onChange={props.onChange}
      type={props.type}
      value={props.value}
      required={props.required}
    />
  );
}

export function InputAutocomplete(props) {
  const isOptionEqualToValue = (option, value) => {
    return option.title === value.title;
  };
  return (
    <div spacing={1} sx={{ width: 200 }}>
      <Autocomplete
        options={props.options}
        getOptionLabel={(option) => option.title}
        isOptionEqualToValue={isOptionEqualToValue}
        disableCloseOnSelect={false}
        onChange={props.onChange}
        name={props.name}
        value={props.value.title}
        required={props.required}

        renderInput={(params) => (
          <TextField
            {...params}
            label={props.label}
            variant="standard"
            className="border"
            sx={{
              "& .MuiInputLabel-root": {
                color: "gray", // Cambia el color de la etiqueta
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#339698", // Cambia el color del borde
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#339698", // Cambia el color del borde inferior después de enfocar
              },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "#339698", // Cambia el color del borde inferior al pasar el cursor
              },
            }}
          />
        )}
      />
    </div>
  );
}

export function CodeInputField(props) {
  return (
    <PhoneInput
      className="col-span-2 mt-5"
      international
      countryCallingCodeEditable={false}
      defaultCountry="PE"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      required={props.required}

    />
  );
}


export function PhoneInputField(props) {
  return (
    <PhoneInput2
      value={props.value} // Pasar el valor como prop al componente PhoneInput
      onChange={props.onChange}
      required={props.required}

      isValid={(value, country) => {
        if (value.match(/12345/)) {
          return 'Invalid value: ' + value + ', ' + country.name;
        } else if (value.match(/1234/)) {
          return false;
        } else {
          return true;
        }
      }}
    />
  );
}