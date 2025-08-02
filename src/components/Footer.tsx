const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/VishhhalGupta/', icon: '⚡' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/vishal-dharmini/', icon: '💼' },
    { name: 'Twitter', url: 'https://x.com/vishaldharmini/', icon: '🐦' },
    { name: 'Email', url: 'mailto:vishaldharmini@gmail.com', icon: '📧' }
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-arcade-darker border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-pixel text-2xl font-bold text-primary">
              VISHAL DHARMINI
            </h3>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed">
              Full Stack Developer passionate about creating amazing digital experiences 
              with clean code and beautiful design.
            </p>
            <div className="flex items-center gap-2 text-secondary font-mono text-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono font-bold text-secondary text-lg">
              Quick Links
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-mono text-sm"
                >
                  &gt; {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-mono font-bold text-accent text-lg">
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-mono text-sm p-2 rounded border border-border hover:border-primary hover:glow-green"
                >
                  <span>{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 text-center">
          
          {/* Easter Egg */}
          <div className="text-center mt-4">
            <div className="text-xs text-muted-foreground font-mono opacity-50">
            <p className="text-center mt-5 mb-5 text-muted-foreground font-mono text-sm">© 2025 Vishal Dharmini. All rights reserved.</p>
              $ echo "Thanks for visiting! Hope you enjoyed the retro vibes 🕹️"
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;