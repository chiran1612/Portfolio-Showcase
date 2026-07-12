import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Learning } from "@/components/sections/Learning";
import { AiExperiments } from "@/components/sections/AiExperiments";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { resumeData } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Learning />
        <AiExperiments />
        <Education />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-border bg-muted/20">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">Built with React & Spring Boot (Mocked)</p>
        </div>
      </footer>
    </div>
  );
}
