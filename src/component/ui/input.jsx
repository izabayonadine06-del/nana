import React from 'react'

function Input({ label, name, type = 'text', placeholder, value, onChange, className = '' }) {
  return (
    <div className='flex flex-col gap-1'>
      {label && (
        <label className='text-sm font-medium text-secondary-300'>
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border border-b-secondary-100 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary-50 focus:border-transparent ${className}`}
      />
    </div>
  )
}

export default Input
