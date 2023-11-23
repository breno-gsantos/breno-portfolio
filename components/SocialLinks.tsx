import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link';

const socialData = [
    {
        label: 'Linkedin',
        href: 'https://www.linkedin.com/in/breno-giovanni-98658125b/',
        icon: FaLinkedin,
        style: 'rounded-tr-md'
    },
    {
        label: 'Github',
        href: 'https://github.com/breno-gsantos',
        icon: FaGithub
    },
    {
        label: 'Mail',
        href: 'mailto:brenogiovanniolintho@gmail.com',
        icon: HiOutlineMail
    },
    {
        label: 'Resume',
        href: '/Currículo.docx',
        icon: BsFillPersonLinesFill,
        style: 'rounded-br-md'
    },
    
]

export default function SocialLinks() {
    return (
        <section className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {socialData.map((item) => (
                    <li key={item.href} className={`flex justify-between items-center w-40 h-14 px-4 text-white font-medium bg-black dark:bg-white dark:text-black dark:font-medium ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${item.style}`}>
                        <Link href={item.href} target='_blank' className='flex items-center justify-between w-full'>
                            {item.label} <item.icon className='w-7 h-7' />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}