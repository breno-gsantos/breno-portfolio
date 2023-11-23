const aboutData = [
    {
        title: 'Sobre',
        textOne: "Olá, eu sou Breno Giovanni! Um apaixonado desenvolvedor com mais de um ano de experiência na criação de páginas web inovadoras. Meu mundo gira em torno das tecnologias de ponta, onde eu faço meus projetos utilizando ferramentas como Next.js, React, Typescript, TailwindCSS, Shadcn-UI e Prisma. Além de criar API's com API Routes, tenho uma noção básica de criação usando Ruby on Rails.",
        textTwo: 'Encaro cada projeto como uma oportunidade de aprendizado e crescimento. Estou constantemente estudando e buscando oportunidades para expandir meu conhecimento e colaborar com projetos inovadores. Se você procura um desenvolvedor dedicado e apaixonado, estou pronto para transformar suas idéias em realidade.'
    }
]

export default function About() {
    return (
        <section id="about" className="w-full h-screen">
            {aboutData.map(({title, textOne, textTwo}) => (
                <div key={title} className="max-w-screen-lg container mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                       <h1 className="text-4xl font-bold inline border-b-4 border-black dark:border-white/75">{title}</h1> 
                    </div>
                    <p className="text-xl mt-20">{textOne}</p>
                    <br />
                    <p className="text-xl">{textTwo}</p>
                </div>
            ))}
            
        </section>
    )
}