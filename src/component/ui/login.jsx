import React from 'react'
import Input from './input.jsx'

function Login({ label, type = 'text', value, onChange, className = '' }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="text-sm font-medium text-secondary-300">{label}</label>}
      <Input type={type} placeholder={label} value={value} onChange={onChange} />
    </div>
  )
}

export default Login

