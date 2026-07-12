import { resumeData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function Learning() {
  if (!resumeData.learning) return null;

  return (
    <section id="learning" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Learning & Development</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-card/50 border-border/60 hover:border-primary/40 transition-colors">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{resumeData.learning.title}</h3>
                <p className="text-muted-foreground mb-4">{resumeData.learning.description}</p>
                <div className="flex flex-wrap gap-2">
                  {resumeData.learning.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-mono text-sm px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
