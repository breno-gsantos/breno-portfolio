import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const portfolioData = [
    {
        src: '',
        demo: '',
        code: 'https://github.com/breno-gsantos/ecommerce-admin'
    },
    {
        src: '/tattoo-app.png',
        demo: 'https://personal-tattoo-app.vercel.app/',
        code: 'https://github.com/breno-gsantos/personal_tattoo-app'
    },
    {
        src: '/SiteImage1.png',
        demo: '',
        code: 'https://github.com/breno-gsantos/bird-app'
    },
    {
        src: '/mia-reynolds.png',
        demo: '',
        code: 'https://github.com/breno-gsantos/mia-reynolds'
    },
    {
        src: '',
        demo: '',
        code: ''
    },
    {
        src: '',
        demo: '',
        code: ''
    },
]

export default function Portfolio() {
    return (
        <section id="portfolio" className="w-full md:h-screen">
            <div className="max-w-screen-lg container mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h1 className="text-4xl font-bold inline border-b-4 border-black dark:border-white/75">Portfolio</h1>
                    <h2 className="py-6">Dê uma olhada em algum dos meus projetos</h2>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolioData.map(({src, demo, code}) => (
                        <div key={src} className="shadow-md shadow-gray-600 rounded-lg">
                                <Image src={src} alt={src} className="rounded-md duration-200 hover:scale-105 w-full" width={340} height={50} />
                                <div className="flex items-center justify-center">
                                    <Button variant='ghost' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        <Link href={demo} target="_blank">Demo</Link>
                                    </Button>
                                    <Button variant='ghost' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        <Link href={code} target="_blank">Code</Link>
                                    </Button> 
                                </div>
                                
                        </div> 
                    ))}
                    
                </div>
            </div>
        </section>
    )
}