import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import SignupPage from '../pages/SignupPage.jsx'
import ProductPage from '../pages/ProductPage.jsx'
import ProductForm from '../routes/ProductForm.jsx'
import UseEffectDemo from '../component/useEffect.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/useEffect" element={<UseEffectDemo />} />

      <Route path="/add-product" element={<ProductForm />} />
    </Routes>
  )
}

export default AppRoutes