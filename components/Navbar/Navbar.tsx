import Link from 'next/link'
import { ModeToggle } from '../Dark Mode/ModeToggle'
import { MobileNavbar } from './MobileNavbar'

export const linksData = [
    {
        href: '#home',
        label: 'Home'
    },
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#portfolio',
        label: 'Portfolio'
    },
    {
        href: '#experience',
        label: 'Experience'
    },
    {
        href: '#contact',
        label: 'Contact'
    },
]

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center w-full h-20 fixed px-4 bg-black dark:bg-white'>
            <div>
                <Link href='/' className='text-5xl font-signature ml-2 text-white dark:text-black'>Breno</Link>
            </div>

            <ul className='hidden md:flex'>
                {linksData.map(({href, label}) => (
                    <li key={href} className='hover:scale-105 duration-100 text-white dark:text-black'>
                        <Link href={href} className='px-4 capitalize font-medium'>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='text-white dark:text-black'>
               <ModeToggle /> 
            </div>
            
            <div className='md:hidden'>
                <MobileNavbar />
            </div>
        </nav>
    )
}