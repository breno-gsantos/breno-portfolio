import About from "@/components/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </main>
  )
}
