import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { resumeData } from "@/lib/data";

const profiles = [
  {
    name: "GitHub",
    label: "Explore my code and projects",
    href: resumeData.github,
    Icon: Github,
  },
  {
    name: "LinkedIn",
    label: "Connect with me professionally",
    href: resumeData.linkedin,
    Icon: Linkedin,
  },
];

export function SocialProfiles() {
  return (
    <section id="profiles" className="border-y border-border/60 bg-muted/20 py-14">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Social profiles
            </p>
            <h2 className="text-2xl font-bold md:text-3xl">Find me online</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Visit my GitHub to see my work, or connect with me on LinkedIn.
          </p>
        </div>

        <div className="grid max-w-4xl gap-4 md:grid-cols-2">
          {profiles.map(({ name, label, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}: ${label} (opens in a new tab)`}
              className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card/70 p-5 transition-colors hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{name}</span>
                <span className="block text-sm text-muted-foreground">{label}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}