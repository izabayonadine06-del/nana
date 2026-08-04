import React from 'react';

function Button({ children, type = 'button', onClick, className = '', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary-200 hover:bg-primary text-secondary-50 font-medium rounded-lg px-6 py-2 transition disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

