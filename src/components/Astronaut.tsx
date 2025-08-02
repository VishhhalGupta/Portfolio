import { useEffect, useState } from 'react';
import astronautImg from '@/assets/astronaut.png';

const Astronaut = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add slight delay and smoothing to make astronaut lag behind cursor
      setTimeout(() => {
        setPosition({
          x: e.clientX - 25,
          y: e.clientY - 25
        });
      }, 100);
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(150%, 150%)'
      }}
    >
      <div className="relative w-12 h-12 astronaut-float">
        <img src="src\assets\astronaut.png" alt="astronaut" />
        
        {/* Floating particles around astronaut */}
        <div className="absolute -inset-4">
          <div className="absolute top-0 left-0 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute top-2 right-0 w-0.5 h-0.5 bg-blue-300 rounded-full animate-ping animation-delay-300"></div>
          <div className="absolute bottom-0 left-2 w-0.5 h-0.5 bg-purple-300 rounded-full animate-ping animation-delay-600"></div>
          <div className="absolute bottom-2 right-2 w-1 h-1 bg-cyan-300 rounded-full animate-ping animation-delay-900"></div>
        </div>
      </div>
    </div>
  );
};

export default Astronaut;