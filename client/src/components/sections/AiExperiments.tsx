import { resumeData } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bot, Plug, Zap, MessageSquare, RefreshCw, TestTube, Book } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Bot, Plug, Zap, MessageSquare, RefreshCw, TestTube, Book
};

export function AiExperiments() {
  if (!resumeData.aiExperiments) return null;

  return (
    <section id="ai-experiments" className="py-20 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Experiments</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.aiExperiments.map((exp, index) => {
            const Icon = iconMap[exp.icon] || Bot;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 border-border/60 hover:border-primary/40 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
