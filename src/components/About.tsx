const About = () => {
  const skills = [
    { name: 'Frontend', tech: ['React', 'TypeScript', 'Tailwind'] },
    { name: 'Backend', tech: ['Node.js', 'Python', 'PostgreSQL'] },
    { name: 'Tools', tech: ['Git', 'Docker', 'AWS'] },
    { name: 'Design', tech: ['Figma', 'UI/UX', 'Responsive'] }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-pixel font-bold text-primary mb-4 glitch" data-text="ABOUT_ME">
            ABOUT_ME
          </h2>
          <div className="w-32 h-1 bg-gradient-neon mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Text */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 glow-green">
              <div className="text-primary font-mono font-bold mb-4 text-lg">
                $ Who am I
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                I'm a passionate full-stack developer who loves turning complex problems into elegant, 
                user-friendly solutions. With a strong foundation in modern web technologies, I create 
                applications that are not just functional, but delightful to use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or playing retro arcade games for inspiration.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-secondary font-mono font-bold mb-4 text-lg">
                $ cat experience.txt
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-foreground">3+ years of professional development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-100"></div>
                  <span className="text-foreground">Full-stack web applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
                  <span className="text-foreground">Responsive design & UX focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></div>
                  <span className="text-foreground">Agile development methodologies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Skills Grid */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-accent font-mono font-bold mb-6 text-lg">
                $ ls skills/
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="bg-muted rounded-lg p-4 border border-border hover:border-primary transition-colors duration-300 group"
                  >
                    <h3 className="font-mono font-bold text-primary mb-3 group-hover:neon-text transition-all duration-300">
                      {skill.name}
                    </h3>
                    <div className="space-y-2">
                      {skill.tech.map((tech, techIndex) => (
                        <div 
                          key={tech}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-mono"
                        >
                          &gt; {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center group hover:glow-green transition-all duration-300">
                <div className="text-2xl font-bold text-primary group-hover:neon-text">15+</div>
                <div className="text-sm text-muted-foreground font-mono">Projects</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center group hover:glow-cyan transition-all duration-300">
                <div className="text-2xl font-bold text-secondary group-hover:text-secondary">50+</div>
                <div className="text-sm text-muted-foreground font-mono">Commits</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center group hover:glow-purple transition-all duration-300">
                <div className="text-2xl font-bold text-accent group-hover:text-accent">3+</div>
                <div className="text-sm text-muted-foreground font-mono">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;