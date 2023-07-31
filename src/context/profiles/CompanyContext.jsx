import { createContext, useContext, useState } from "react";
import { registerCompanyRequest} from "../../api/company.api";
import { profileCompanyRequest } from "../../api/profile.api";

const CompanyContext = createContext();

export function CompanyProvider({ children }) {
  const registerCompany = async (company) => {
    try {
      const res = await registerCompanyRequest(company);
      return res;
    } catch (error) {
      console.log("error al registrar compania", error);
    }
  };
  
  const profileCompany = async () => {
    try {
      const res = await profileCompanyRequest();
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CompanyContext.Provider value={{ registerCompany,profileCompany }}>
      {children}
    </CompanyContext.Provider>
  );
}

export function UseCompany() {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany debe usarse dentro de un contexto");
  }
  return context;
}
