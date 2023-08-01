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
function App() {
  return (
    <AuthProvider>
      <CompanyProvider>
        <CandidateProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-3xl font-bold color-primary">Home</h1>
              }
            />
            <Route
              path="/home-company"
              element={
                <h1 className="text-3xl font-bold color-primary">
                  Soy Empresa
                </h1>
              }
            />
            <Route
              path="/home-candidate"
              element={
                <h1 className="text-3xl font-bold color-primary">
                  Soy Candidato
                </h1>
              }
            />
            <Route element={<IsLoading />}>
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="register/*" element={<Register />}>
              <Route path="company" element={<CompanyRegistration />} />
              <Route path="candidate" element={<CandidateRegistration />} />
            </Route>
            <Route path="confirm-email" element={<ConfirmEmail />} />
            <Route
              path="confirmation-successfully"
              element={<ConfirmEmailSuccessfully />}
            />
            <Route
              path="no-accounts-to-verify"
              element={<NoAccountsToVerify />}
            />
            <Route
              path="confirmation-expired"
              element={<NoAccountsToVerify />}
            />

            {/* Rutas para usuarios loggeados */}
            <Route element={<ProtectedRoute />}>
              <Route
                path="profile-candidate"
                element={<ProfilePageCandidate />}
              />
              <Route path="profile" element={<Profile />} />
              <Route path="profile-company" element={<ProfilePageCompany />} />
            </Route>
            <Route path="*" element={<p>Not Fount</p>} />
          </Routes>
        </CandidateProvider>
      </CompanyProvider>
    </AuthProvider>
  );
}

export default App;
