import React from 'react';

const Button = ({type, onClick, children}) => {
  const cn = type === "primary" ? "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out":
    "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out";
  return (
    <button onClick={onClick} className={cn}>
      { children }
    </button>
  )
}

export default Button;
