import { AboutStrip } from "@/components/AboutStrip";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { Education } from "@/components/Education";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <AboutStrip />
        <Education />
        <WorkExperience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
