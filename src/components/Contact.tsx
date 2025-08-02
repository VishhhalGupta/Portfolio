import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Use the full Google Apps Script URL directly
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbyaWTaJ7wJsKjL6pNqcLPQu94PMKGxdWaSa15tBz9jfpEAW-qd3VC7CKTtkE8dpI7zf/exec';

      // Send as form data which is more compatible with Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: formDataToSend,
        // The following headers are typically not needed for Google Apps Script but good practice
        // 'Content-Type': 'application/x-www-form-urlencoded' is handled by FormData
        mode: 'no-cors' // This is crucial for cross-origin requests to Google Apps Script
      });

      // Google Apps Script responses with 'no-cors' mode are opaque, 
      // so we can only check for a success message after the request is finished.
      // If the request completes without an error, we can assume success.
      // In a real-world scenario with a proxy, you would check response.ok.
      // For a direct Apps Script call with 'no-cors', the response status is always 0.
      if (response) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // This part might not be reachable with 'no-cors'
        setError('Failed to submit form. Please try again.');
      }

    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
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
      url: 'https://github.com/VishhhalGupta/',
      color: 'primary'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/vishal-dharmini/',
      color: 'secondary'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://x.com/vishaldharmini',
      color: 'accent'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:vishaldharmini@gmail.com',
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
                
                <button 
                  type="submit" 
                  className="w-full arcade-button"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
                
                {success && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-500 rounded text-green-300 text-center font-mono">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {error && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-300 text-center font-mono">
                    {error}
                  </div>
                )}
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