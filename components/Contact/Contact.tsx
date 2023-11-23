import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="w-full h-screen p-4">
            <div className="container mx-auto max-w-screen-lg">
                <div className="pb-8">
                    <h1 className="text-4xl font-bold inline border-b-4 border-black dark:border-white/75">Contact</h1>
                    <h2 className="py-6">Preencha o formulário abaixo para entrar em contato comigo</h2>
                </div>
                <div className="flex items-center justify-center">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}