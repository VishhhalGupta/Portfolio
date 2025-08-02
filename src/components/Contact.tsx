import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '⚡',
      url: 'https://github.com',
      color: 'primary'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com',
      color: 'secondary'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com',
      color: 'accent'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:vishal@example.com',
      color: 'primary'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-pixel font-bold text-primary mb-4 glitch" data-text="CONTACT_ME">
            CONTACT_ME
          </h2>
          <div className="w-32 h-1 bg-gradient-neon mx-auto rounded-full"></div>
          <p className="text-muted-foreground font-mono mt-6">
            $ ping vishal.dev
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Form */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-mono font-bold text-secondary mb-6">
                $ send_message.sh
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-foreground font-mono focus:border-primary focus:outline-none focus:glow-green transition-all duration-300"
                    placeholder="Your name here..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-foreground font-mono focus:border-primary focus:outline-none focus:glow-green transition-all duration-300"
                    placeholder="your.email@domain.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-foreground font-mono focus:border-primary focus:outline-none focus:glow-green transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button type="submit" className="w-full arcade-button">
                  Send Message →
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Contact Info & Social Links */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-mono font-bold text-accent mb-6">
                $ cat contact_info.json
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-primary">📍</div>
                  <div className="font-mono text-foreground">
                    Available for remote work worldwide
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-secondary">⏰</div>
                  <div className="font-mono text-foreground">
                    Response time: &lt; 24 hours
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-accent">💬</div>
                  <div className="font-mono text-foreground">
                    Open to collaborations & opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-mono font-bold text-primary mb-6">
                $ ls social_networks/
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-muted border border-border rounded-lg hover:border-primary transition-all duration-300 group hover:glow-green"
                  >
                    <div className="text-2xl">{social.icon}</div>
                    <div className="font-mono text-foreground group-hover:text-primary transition-colors">
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-mono font-bold text-secondary mb-4">
                $ fortune
              </h3>
              <blockquote className="text-muted-foreground font-mono italic text-sm leading-relaxed">
                "The best way to predict the future is to invent it." 
                <br />
                <span className="text-accent">- Alan Kay</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;