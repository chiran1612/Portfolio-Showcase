import { resumeData } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
              
              <Card className="bg-card/50 border-border/60">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <CardTitle className="text-xl text-primary">{job.role}</CardTitle>
                    <Badge variant="outline" className="w-fit font-mono">{job.period}</Badge>
                  </div>
                  <h4 className="text-lg font-medium text-foreground">{job.company}</h4>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
