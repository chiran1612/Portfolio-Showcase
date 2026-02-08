import { resumeData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

export function Certifications() {
  if (!resumeData.certifications) return null;

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border/60 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <p className="font-medium text-lg">{cert}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
