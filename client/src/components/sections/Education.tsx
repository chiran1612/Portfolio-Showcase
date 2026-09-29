import { resumeData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  if (!resumeData.education) return null;

  return (
    <section id="education" className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
              <Card className="bg-card/50 border-border/60 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.school}</p>
                        {edu.location && (
                          <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                        )}
                        {edu.grade && (
                          <p className="text-sm font-mono text-primary mt-2">{edu.grade}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-sm font-mono text-muted-foreground whitespace-nowrap bg-muted px-3 py-1 rounded-md">
                      {edu.period}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
