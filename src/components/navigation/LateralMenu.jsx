import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useAuth } from "../../context/auth/AuthContext";
export default function LateralMenu() {
  const { isAutenticated, logout } = useAuth();
  const location = useLocation();
  const isHomeCompany = location.pathname === "/home-company";
  const linkTo = isHomeCompany ? "/home-candidate" : "/home-company";
  const linkText = isHomeCompany ? "Soy Candidato" : "Soy Empresa";
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
  ];

  return (
    <div className="flex border">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 duration-300 fixed left-0 top-0`}
      >
        {isAutenticated ? (
          <IoIosArrowBack
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
        ) : null}
        <div className="flex gap-x-4 items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/wortika-file-uploads.appspot.com/o/globals%2Fwortika-logo.svg?alt=media&token=020ebb10-baac-4fb3-ac74-accolor-primary"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        {isAutenticated ? (
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div>
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
  );
}
