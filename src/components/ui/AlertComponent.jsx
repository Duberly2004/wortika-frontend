import React from 'react'
import AutenticationCard from '../auth/AutenticationCard'
import { Link } from 'react-router-dom';

export default function AlertComponent(props) {
  return (
<AutenticationCard
      children={
        <div className="color-text text-center">
          <h1 className="font-bold text-xl my-3">{props.title}</h1>

          {props.text}
          <div className="flex justify-center  m-4">
            <img
              className="w-60"
              src={props.image}
              alt="Ilustración de éxito de Wortika"
            />
          </div>
          <div className="flex grid-rows-2 justify-evenly mb-4">
            <Link
              to={props.linkBtn1} //url para el button 1
              className="bg-gray-100 py-2 px-2 color-primary rounded-xl md:rounded-xl"
            >
              {props.button1Text}
            </Link>
            <Link
              to={props.linkBtn2}
              className="button-primary py-2 px-2 text-white rounded-xl md:rounded-xl"
              target={props.target ? props.target : '_self'}
            >
              {props.button2Text}
            </Link>
          </div>
        </div>
      }
    />
  );
}
