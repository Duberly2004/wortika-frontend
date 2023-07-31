import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContext";
import { BiMenuAltRight, BiLogIn, BiLogOut } from "react-icons/bi";
import { FaUserTie } from 'react-icons/fa';
import {IoMdClose} from 'react-icons/io'
function Navigationbar() {
  const { isAutenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const isHomeCompany = location.pathname === "/home-company";
  const linkTo = isHomeCompany ? "/home-candidate" : "/home-company";
  const linkText = isHomeCompany ? "Soy Candidato" : "Soy Empresa";

  const handleLinkLogout = () => {
    if (isAutenticated) {
      logout();
    }
    setIsOpen(true); // Asumiendo que tienes el estado isOpen en el componente
  };

  return (
    <nav className="mb-8 w-full border-gray-200 dark:bg-gray-900 fixed">
      <div className="bg-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center">
          <img
            className="h-6 mr-3"
            src="https://firebasestorage.googleapis.com/v0/b/wortika-file-uploads.appspot.com/o/globals%2Fwortika-logo.svg?alt=media&token=020ebb10-baac-4fb3-ac74-acb9a261c1fd"
            alt="Wortika logo"
          />
        </Link>
        {/* Menu ahburguesa */}
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer md:hidden block color-primary font-bold text-3xl"
        >
          <span> {isOpen? <BiMenuAltRight/> : <IoMdClose/>}</span>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row mx-8">
            <li>
              <Link
                to={linkTo}
                className="color-primary color-primary-hover mx-5 block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                {linkText}
              </Link>
            </li>

            <li>
              <Link
                onClick={isAutenticated ? logout : null}
                to="/login"
                className="color-primary color-primary-hover block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                {isAutenticated ? "Cerrrar Sesion" : "Iniciar Sesion"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Aside */}
      <aside
        className={`fixed ${
          isOpen ? "left-0 -translate-x-full sm:translate-x-0" : null
        }translate-x-0 z-40 w-64 h-screen transition-transform md:hidden block`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                onClick={()=>setIsOpen(true)}
                to={linkTo}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaUserTie className="color-primary" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {linkText}
                </span>
              </Link>
            </li>
            {/* Buton Iniciar sesion */}
            <li>
              <Link
                onClick={handleLinkLogout}
                to="/login"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                {isAutenticated ? <BiLogOut className="color-primary"/> : <BiLogIn className="color-primary"/>}
                <span className="flex-1 ml-3 whitespace-nowrap">
                  {isAutenticated ? "Cerrrar Sesion" : "Iniciar Sesion"}
                </span>
              </Link>
            </li>

            <li></li>
          </ul>
        </div>
      </aside>
    </nav>
  );
}

export default Navigationbar;
