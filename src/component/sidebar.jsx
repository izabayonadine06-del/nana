
import {useState} from 'react'
import { href } from 'react-router-dom'


const links = [
    {lable: 'Dashboard', href: '/dashboard'},
    {lable: 'Users', href: '/users'},
    {lable: 'Products', href: '/products'},
    {lable: 'Settings', href: '/settings'}
]

function SideBar() {
    const [open, setOpen] = useState(true)
  return (
    <aside className={`bg-linear-to-b from-primary-100 to-primary-300 min-h-screen flex flex-col transition-all duration-300 ${open ? 'w-56' : 'w-14'}`}>
        <button onClick={() => setOpen(!open)} className='text-secondary-50 text-xl p-4 self-end'>
            {open ? '❌' : '☰' }
        </button >
        <nav className='flex flex-col gap-2 px-2'>
            {
                links.map((link)=>(
                    <a 
                    key={link.href}
                    href={link.href}
                    className='text-secondary-50 hover:text-primary-400 transition duration-300 py-2 px-3 rounded-lg hover:bg-primary-300 flex items-center gap-3'
                    >
                        {
                            open && <span>{link.lable}</span>
                        }

                    </a>
                ))
            }
        </nav>
    </aside>
  )
}

export default SideBar