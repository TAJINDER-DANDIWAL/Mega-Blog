import React from 'react'

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {label}
    </button>
  )
}

export default Button
