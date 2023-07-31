import React, { useState, useEffect } from "react";
import { UseCompany } from "../../context/profiles/CompanyContext";

export default function CompanyProfilePage() {
  const [company, setCompany] = useState();
  const { profileCompany } = UseCompany();

  useEffect(() => {
    async function fetchData() {
      const res = await profileCompany();
      if(res && res.data) setCompany(res.data)
    } 
    fetchData() 
  }, []);

  return <div>{JSON.stringify(company)}</div>;
}
