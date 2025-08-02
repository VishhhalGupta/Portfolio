import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pixel-developer.png";

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.64, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16, duration: 0.48 }}
                  className="text-lg text-primary font-medium"
                >
                  Hello, I'm
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.48 }}
                  className="text-5xl lg:text-7xl font-bold bg-gradient-hero bg-clip-text"
                >
                  Vishal Dharmini
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.48, duration: 0.48 }}
                  className="space-y-2"
                >
                  <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
                    Computer Science Student
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-md">
                    Passionate about Full-Stack Development, Machine Learning, and creating innovative solutions that make a difference.
                  </p>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.64, duration: 0.48 }}
                className="flex gap-4"
              >
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary/40">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary/40">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary/40">
                  <Mail className="w-5 h-5" />
                </Button>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.48 }}
              >
                <Button 
                  onClick={scrollToNext}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-full"
                >
                  Explore My Work
                  <ArrowDown className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.64, ease: "easeOut", delay: 0.24 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.img
                  src={heroImage}
                  alt="Vishal Dharmini - Developer Illustration"
                  className="w-full h-auto rounded-3xl shadow-elevated animate-float"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-gradient-primary rounded-full p-4 shadow-glow"
                >
                  <div className="w-4 h-4 bg-primary-foreground rounded-full" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-primary rounded-full p-3 shadow-glow"
                >
                  <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                </motion.div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.64 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToNext}
        >
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}