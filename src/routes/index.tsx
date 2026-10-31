import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProfiles } from "@/components/sections/SocialProfiles";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Learning } from "@/components/sections/Learning";
import { AiExperiments } from "@/components/sections/AiExperiments";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { resumeData } from "@/lib/data";

const SITE_URL = "https://chiranjeev-portofolio-site.lovable.app/";
const PAGE_DESCRIPTION =
  "Chiranjeev Singh is a Java Backend Developer with 3+ years building Spring Boot services, REST APIs, MongoDB and SQL systems, Docker deployments and Nginx tuning.";

const currentEmployer = resumeData.experience[0]?.company;
const almaMater = resumeData.education[0]?.school;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resumeData.name,
  jobTitle: resumeData.title,
  description: PAGE_DESCRIPTION,
  email: `mailto:${resumeData.email}`,
  telephone: resumeData.phone,
  url: SITE_URL,
  sameAs: [resumeData.github, resumeData.linkedin],
  ...(currentEmployer ? { worksFor: { "@type": "Organization", name: currentEmployer } } : {}),
  ...(almaMater ? { alumniOf: { "@type": "CollegeOrUniversity", name: almaMater } } : {}),

  knowsAbout: [
    ...resumeData.skills.languages,
    ...resumeData.skills.backend,
    ...resumeData.skills.databases,
    ...resumeData.skills.cloudDevOps,
  ],
};

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <SocialProfiles />
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chiranjeev Singh | Java Backend Developer – Spring Boot & REST APIs" },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: "Chiranjeev Singh | Java Backend Developer" },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema),
      },
    ],
  }),
  component: Home,
});
