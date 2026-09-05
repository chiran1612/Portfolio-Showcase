import { resumeData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-6 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for hire
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hello, I'm <br />
            <span className="text-primary text-glow">{resumeData.name}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground font-mono mb-6">
            {resumeData.title}
          </h2>
          
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            {resumeData.summary}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden relative font-mono text-sm leading-relaxed max-w-lg mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Terminal Header */}
            <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto text-xs text-muted-foreground">bash — 80x24</div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 text-muted-foreground">
              <div className="mb-4">
                <span className="text-primary">user@chiran:~$</span> java -version
                <div className="text-foreground mt-1">
                  java version "24.0.1" 2025-04-15<br/>
                  Java(TM) SE Runtime Environment (build 24.0.1+9)<br/>
                  Java HotSpot(TM) 64-Bit Server VM (build 24.0.1+9)
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-primary">user@chiran:~$</span> cat skills.json
                <div className="text-foreground mt-1">
                  {`{`}
                  <div className="pl-4">
                    "backend": ["Spring Boot", "Java", "REST APIs"],<br/>
                    "database": ["MongoDB", "SQL"],<br/>
                    "devops": ["Docker", "Nginx"]
                  </div>
                  {`}`}
                </div>
              </div>

              <div>
                <span className="text-primary">user@chiran:~$</span> <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
