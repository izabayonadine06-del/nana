
import React from 'react'
import input from './ui/input.jsx'
import button from './ui/button.jsx'
function NavBar() {
  return (
    <header>
      <div aria-hidden='true' className='h-10 bg-[#586c55]' />
      <nav aria-label='Main navigation' className='bg-white px-5 py-6 shadow-sm sm:py-7'>
       <li>
  <a href="/dashboard" className="hover:text-yellow-300 transition duration-300">
    Dashboard
  </a>
</li>
        <ul className='mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-5 text-[21px] font-medium text-[#16274a] sm:gap-x-11'>
          <li><a className='text-[#586c55] transition-colors hover:text-[#384c37]' href='/'>Home</a></li>
          <li><a className='transition-colors hover:text-[#586c55]' href='/'>About us</a></li>
          <li><a className='transition-colors hover:text-[#586c55]' href='/'>Our Packages</a></li>
          <li><a className='transition-colors hover:text-[#586c55]' href='/'>Media</a></li>
          <li><a className='transition-colors hover:text-[#586c55]' href='/'>Sustainability</a></li>
          <li><a className='transition-colors hover:text-[#586c55]' href='/'>Contact us</a></li>
          <li><a className='transition-colors hover:text-[#586c55]' href='/user'>User</a></li>
           <li><a className='transition-colors hover:text-[#586c55]' href='/login'>Login</a></li>
            <li><a className='transition-colors hover:text-[#586c55]' href='/signup'>Sign Up</a></li>

        </ul>
        <input placeholder={`search`}/>
        <button/>
      </nav>
    </header>
  )
}

export default NavBar