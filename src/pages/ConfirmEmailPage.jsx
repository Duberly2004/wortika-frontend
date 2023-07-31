import AutenticationCard from "../components/auth/AutenticationCard";
import { Link } from "react-router-dom";
export default function ConfirmEmailPage() {
  return (
    <AutenticationCard
      children={
        <div className="color-text text-center">
          <h1 className="font-bold text-xl my-3">!Todo listo Felipe!</h1>
          <p>
            Hemos enviado un mensage de correo de <br /> confirmación a tu
            correo.
          </p>
          <div className="flex justify-center  m-4">
            <img
              className="w-60"
              src="https://firebasestorage.googleapis.com/v0/b/wortika-file-uploads.appspot.com/o/components%2Fsuccess.svg?alt=media&token=153aef9f-9e4c-4564-ae56-78d6f796d1d8"
              alt="Ilustración de éxito de Wortika"
            />
          </div>
          <div className="flex grid-rows-2 justify-evenly mb-4">
            <Link
              to={"/"}
              className="bg-gray-100 py-2 px-2 color-primary rounded-xl md:rounded-xl"
            >
              Ir al inicio
            </Link>
            <Link
              to={"https://mail.google.com/mail/u/0/#inbox"}
              className="bg-gradient-to-t from-teal-600 to-green-600 py-2 px-2 text-white rounded-xl md:rounded-xl"
            >
              Ver el correo
            </Link>
          </div>
        </div>
      }
    />
  );
}
