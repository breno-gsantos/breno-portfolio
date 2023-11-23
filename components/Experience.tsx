import { cn } from '../lib/utils';
import Image from "next/image";

const technologies = [
    {
        src: '/html.png',
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        src: '/css.png',
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        src: '/javascript.png',
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        src: '/typescript.png',
        title: 'TypeScript',
        style: 'shadow-blue-700'
    },
    {
        src: '/react.png',
        title: 'React',
        style: 'shadow-cyan-500'
    },
    {
        src: '/tailwind.png',
        title: 'Tailwind CSS',
        style: 'shadow-sky-400'
    },
    {
        src: '/nextjs.png',
        title: 'Next JS',
        style: 'shadow-black dark:shadow-white'
    },
    {
        src: '/github.png',
        title: 'Github',
        style: 'shadow-gray-500'
    },
    {
        src: '/prisma.png',
        title: 'Prisma',
        style: 'shadow-gray-500/50'
    },
    {

        src: '/ruby.png',
        title: 'Ruby on Rails',
        style: 'shadow-red-600'
    },
    {

        src: '/postgresql.png',
        title: 'PostgreSQL',
        style: 'shadow-blue-300'
    },
]

export default function Experience() {
    return (
        <section data-name='experience' className="w-full md:h-screen" id="experience">
            <div className="max-w-screen-lg container mx-auto p-4 flex flex-col justify-center w-full h-full">

                <div>
                    <p className="text-4xl font-bold border-b-4 border-black dark:border-white/75 p-2 inline">Experiências</p>
                    <p className="py-6">Tecnologias na qual eu trabalho</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {technologies.map(({src, style, title}) => (
                        <div key={title} className={cn("shadow-md hover:scale-105 duration-500 py-2 rounded-lg", style)}>
                            <Image src={src} alt={src} width={80} height={80} className="mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}