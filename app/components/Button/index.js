import React from 'react';

export default function Button({ variant, children, className = 'w-48' }) {
  return (
    <button
      className={`${
        variant ? 'bg-transparent  gradient_border' : 'btn_gradient'
      } ${className} h-12 rounded-3xl flex justify-center items-center text-xl`}
    >
      {children}
    </button>
  );
}
