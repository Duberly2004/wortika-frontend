import { Link, Outlet } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="inline-flex">
          <Link to={'/register/company'} className="bg-white hover:bg-gray-100 color-primary font-semibold py-2 px-4 rounded-l">
            Soy empresa
          </Link>
          <Link to={'/register/candidate'} className="bg-white hover:bg-gray-100 color-primary font-semibold py-2 px-4 rounded-r">
            Soy candidato
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Register;
