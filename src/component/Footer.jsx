
import React from 'react'

const leftLinks = ['Our Products', 'About Us', 'Sustainability', 'News']
const rightLinks = ['Contact Us', 'Terms & Conditions', 'Privacy Policy', 'Book Tour']

function FooterLink({ children }) {
  return (
    <li className='flex items-center gap-2.5'>
      <span aria-hidden='true' className='h-2.5 w-2.5 shrink-0 rounded-full bg-[#ef263b]' />
      <a
        className='transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none'
        href='/'
      >
        {children}
      </a>
    </li>
  )
}

function Footer() {
  return (
    <footer className='bg-[#354c36] pt-8 text-[18px] font-light text-[#a7afba] sm:pt-9'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-3 px-8 pb-28 sm:grid-cols-2 sm:gap-16 sm:px-10 md:px-12'>
        <nav aria-label='Company links'>
          <ul className='space-y-3.5'>
            {leftLinks.map((link) => <FooterLink key={link}>{link}</FooterLink>)}
          </ul>
        </nav>
        <nav aria-label='Support links'>
          <ul className='space-y-3.5'>
            {rightLinks.map((link) => <FooterLink key={link}>{link}</FooterLink>)}
          </ul>
        </nav>
      </div>

      <div className='border-t border-[#253628] px-6 py-7 text-center text-[16px]'>
        © Copyright 2026 · Herbal Field Group || Powered by{' '}
        <a className='text-[#344fa8] transition-colors hover:text-[#6681dc]' href='/'>SAN TECH</a>
      </div>
    </footer>
  )
}

export default Footer