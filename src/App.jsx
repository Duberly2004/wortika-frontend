import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Header from "./components/layout/Header";
import Register from "./components/auth/register/Register";
import CompanyRegistration from "./components/auth/register/CompanyRegistration";
import CandidateRegistration from "./components/auth/register/CandidateRegistration";
import ProfilePageCandidate from "./pages/candidate/CandidateProfilePage";
import ProfilePageCompany from "./pages/company/CompanyProfilePage";
import "./App.css";
import { AuthProvider } from "./context/auth/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import IsLoading from "./routes/IsLoading";
import {
  ConfirmEmail,
  NoAccountsToVerify,
  ConfirmEmailSuccessfully,
} from "./components/auth/VerificationEmail";
import { CompanyProvider } from "./context/profiles/CompanyContext";
import { CandidateProvider } from "./context/profiles/CandidateContext";
import Profile from "./routes/Profile";
const urlBase= '/wortika-frontend'
function App() {
  return (
    <AuthProvider>
      <CompanyProvider>
        <CandidateProvider>
          <Header />
          <Routes>
            <Route
              path={`/wortika-frontend/`}
              element={<h1 className="text-3xl font-bold color-primary">Home</h1>}
            />
            <Route
              path={`/wortika-frontend/home-company`}
              element={<h1 className="text-3xl font-bold color-primary">Soy Empresa</h1>}
            />
            <Route
              path={`/wortika-frontend/home-candidate`}
              element={<h1 className="text-3xl font-bold color-primary">Soy Candidato</h1>}
            />
            <Route element={<IsLoading />}>
              <Route path={`/wortika-frontend/login`} element={<Login />} />
            </Route>
            <Route path={`${urlBase}/register/*`} element={<Register />}>
              <Route path="company" element={<CompanyRegistration />} />
              <Route path="candidate" element={<CandidateRegistration />} />
            </Route>
            <Route path={`${urlBase}/confirm-email`} element={<ConfirmEmail />} />
            <Route path={`${urlBase}/confirmation-successfully`} element={<ConfirmEmailSuccessfully />} />
            <Route path={`${urlBase}/no-accounts-to-verify`} element={<NoAccountsToVerify />} />
            <Route path={`${urlBase}/confirmation-expired`} element={<NoAccountsToVerify />} />

            {/* Rutas para usuarios loggeados */}
            <Route element={<ProtectedRoute />}>
              <Route path={`${urlBase}/profile-candidate`} element={<ProfilePageCandidate />} />
              <Route path={`${urlBase}/profile`} element={<Profile />} />
              <Route path={`${urlBase}/profile-company`} element={<ProfilePageCompany />} />
            </Route>
            {/* Ruta para el caso "Not Found" */}
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </CandidateProvider>
      </CompanyProvider>
    </AuthProvider>
  );
}

export default App;
