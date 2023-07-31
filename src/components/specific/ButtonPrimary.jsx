import React from 'react'

function ButtonPrimary(props) {
  return (
    <button type={props.type} 
    className='button-primary w-full py-2 text-white rounded-xl md:rounded-xl'
    disabled = {props.disabled}
    >
            {props.text}
    </button>
  )
}

export default ButtonPrimary