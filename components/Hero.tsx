import { heroData } from '@/constants/data'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className='h-screen w-full' id='home'>
            <div className='container mx-auto max-screen-lg flex flex-col items-center justify-center h-full px-4 lg:flex-row'>
                <div>
                    {heroData.map(({text, title}) => (
                        <div className='flex flex-col justify-center h-full' key={text}>
                            <h1 className='text-4xl sm:text-7xl font-bold'>{title}</h1>
                            <p className='py-4 dark:font-light max-w-md'>{text}</p>
                        </div>
                    ))}
                    <Button variant='premium' size='lg' className='gap-x-2 text-white'>
                        Portfolio <MdOutlineKeyboardArrowRight size={25} />
                    </Button>
                </div>
                <Image src='/heroImage.jpg' alt='Hero-Image' width={476} height={524} className='rounded-2xl hidden lg:block transition-all' />
            </div>
        </section>
    )
}