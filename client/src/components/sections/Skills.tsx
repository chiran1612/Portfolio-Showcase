import { resumeData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Server, Code, Cloud } from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: resumeData.skills.languages
    },
    {
      title: "Frameworks",
      icon: <Server className="w-6 h-6 text-blue-500" />,
      skills: resumeData.skills.frameworks
    },
    {
      title: "Tools & DevOps",
      icon: <Cloud className="w-6 h-6 text-purple-500" />,
      skills: resumeData.skills.tools
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-orange-500" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 bg-background w-12 h-12 rounded-lg flex items-center justify-center border border-border">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-mono text-xs">
                        {skill}
                      </Badge>
                    ))}
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
