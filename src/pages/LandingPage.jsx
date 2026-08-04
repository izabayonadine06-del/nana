import React from 'react'
import NavBar from '../component/NavBar.jsx'
import Footer from '../component/Footer.jsx'
import Layout from '../component/layout.jsx'
import StateManagement from '../component/StateManagement.jsx'

function LandingPage() {
  return (
    <Layout>
      <div className='bg-primary-100 rounded-2xl flex.'>
        <h1 className='text-secondary-50'>Welcome to dev sale e commerce platform</h1>
      </div>
      <StateManagement />
    
    </Layout>
  )
}




export default LandingPage