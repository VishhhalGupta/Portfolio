import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SpaceBackground from '@/components/SpaceBackground';
import Astronaut from '@/components/Astronaut';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-space relative">
      <SpaceBackground />
      <Astronaut />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
