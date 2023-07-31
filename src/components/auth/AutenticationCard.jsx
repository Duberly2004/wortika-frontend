import React from 'react'

function AutenticationCard(props) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {props.children}
    </div>
    </div>
  )
}

export default AutenticationCard