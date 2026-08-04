import React from 'react'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'

function Layout({children}){
    return(
        <div className='flex flex-col min-h-screen bg-primary-50'>
            <NavBar/>
            <main className='flex-1 p-6'>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
export default Layout