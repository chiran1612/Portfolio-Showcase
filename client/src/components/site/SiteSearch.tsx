import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { resumeData } from "@/lib/data";

type SearchItem = {
  id: string;
  title: string;
  content: string;
};

const searchItems: SearchItem[] = [
  {
    id: "hero",
    title: "About",
    content: `${resumeData.name} ${resumeData.title} ${resumeData.summary}`,
  },
  {
    id: "experience",
    title: "Work Experience",
    content: resumeData.experience
      .flatMap((job) => [job.role, job.company, job.period, ...job.description])
      .join(" "),
  },
  {
    id: "skills",
    title: "Technical Skills",
    content: Object.values(resumeData.skills).flat().join(" "),
  },
  {
    id: "learning",
    title: "Learning & Development",
    content: `${resumeData.learning.title} ${resumeData.learning.technologies.join(" ")}`,
  },
  {
    id: "ai-experiments",
    title: "AI Experiments",
    content: resumeData.aiExperiments
      .flatMap((experiment) => [experiment.title, experiment.description])
      .join(" "),
  },
  {
    id: "education",
    title: "Education",
    content: resumeData.education
      .flatMap((education) => [education.school, education.degree, education.period])
      .join(" "),
  },
  ...resumeData.projects.map((project) => ({
    id: "projects",
    title: project.name,
    content: [project.name, project.role, project.description, ...project.tech].join(" "),
  })),
  {
    id: "certifications",
    title: "Certifications",
    content: resumeData.certifications.join(" "),
  },
  {
    id: "contact",
    title: "Contact",
    content: `${resumeData.email} ${resumeData.phone} ${resumeData.linkedin}`,
  },
];

export function SiteSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (normalizedQuery.length < 2) return [];

    return searchItems
      .filter((item) => `${item.title} ${item.content}`.toLowerCase().includes(normalizedQuery))
      .filter((item, index, items) => items.findIndex((result) => result.title === item.title) === index)
      .slice(0, 6);
  }, [query]);

  const jumpToResult = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search this portfolio..."
        aria-label="Search this portfolio"
        className="h-11 border-primary/20 bg-card/60 pl-9 font-mono text-sm backdrop-blur-sm"
      />

      {results.length > 0 && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden rounded-lg border border-border bg-card shadow-xl">
          {results.map((result) => (
            <button
              key={`${result.id}-${result.title}`}
              type="button"
              onClick={() => jumpToResult(result.id)}
              className="block w-full border-b border-border/60 px-4 py-3 text-left last:border-0 hover:bg-primary/10"
            >
              <span className="block text-sm font-semibold">{result.title}</span>
              <span className="block truncate text-xs text-muted-foreground">
                Jump to this section
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}