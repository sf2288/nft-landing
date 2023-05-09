import React from 'react';

export default function Button({ variant, children, className = 'w-48' }) {
  return (
    <button
      className={`${
        variant ? 'bg-transparent  gradient_border' : 'btn_gradient'
      } ${className} py-2 sm:py-3 rounded-full flex justify-center items-center sm:text-xl text-lg`}
    >
      {children}
    </button>
  );
}
