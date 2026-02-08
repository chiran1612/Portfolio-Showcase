import { resumeData } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 bg-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <Badge variant="secondary" className="w-fit mb-2">{project.role}</Badge>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-6 line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
