const Projects = () => {
  const developmentFlow = [
    {
      step: '01',
      title: 'Wireframing',
      description: 'Creating detailed wireframes and user journey maps to visualize the project structure',
      icon: '📐',
      color: 'primary'
    },
    {
      step: '02', 
      title: 'Design',
      description: 'Crafting beautiful, user-centric interfaces with modern design principles',
      icon: '🎨',
      color: 'secondary'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building robust, scalable applications with clean, maintainable code',
      icon: '⚡',
      color: 'accent'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Comprehensive testing to ensure reliability, performance, and user satisfaction',
      icon: '🧪',
      color: 'primary'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Seamless deployment with CI/CD pipelines and production optimization',
      icon: '🚀',
      color: 'secondary'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and team features',
      tech: ['TypeScript', 'Socket.io', 'MongoDB', 'Redis'],
      status: 'In Progress',
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with interactive charts and reporting',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      status: 'Completed',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative bg-gradient-backdrop">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-pixel font-bold text-primary mb-4 glitch" data-text="MY_PROJECTS">
            MY_PROJECTS
          </h2>
          <div className="w-32 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          <p className="text-muted-foreground font-mono mt-6 max-w-2xl mx-auto">
            $ cat development_process.md
          </p>
        </div>

        {/* Development Flow */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-pixel font-bold text-secondary mb-12 text-center">
            Development Flow: From Idea to Production
          </h3>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-neon transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {developmentFlow.map((phase, index) => (
                <div key={phase.step} className="relative">
                  <div className="bg-card border border-border rounded-lg p-6 text-center group hover:glow-green transition-all duration-300 relative z-10">
                    {/* Step Number */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${phase.color} text-${phase.color}-foreground font-bold text-lg mb-4 mx-auto`}>
                      {phase.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-3xl mb-3">{phase.icon}</div>
                    
                    {/* Title */}
                    <h4 className="font-mono font-bold text-foreground mb-3">
                      {phase.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div>
          <h3 className="text-2xl md:text-3xl font-pixel font-bold text-accent mb-12 text-center">
            Featured Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-card border border-border rounded-lg overflow-hidden group hover:glow-cyan transition-all duration-300">
                {/* Project Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded font-mono ${
                      project.status === 'Completed' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-secondary font-mono font-bold text-sm mb-2">
                      Tech Stack:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded font-mono border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full arcade-button text-sm">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-mono font-bold text-primary mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and create amazing digital experiences.
            </p>
            <button 
              className="arcade-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Build Something Great
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;