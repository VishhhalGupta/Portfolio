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
          x: e.clientX - 25, // Center the astronaut
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
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="relative w-12 h-12 astronaut-float">
        {/* Astronaut Body */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full border-2 border-gray-400">
          {/* Helmet */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-blue-100 to-blue-200 rounded-full border-2 border-blue-300 opacity-80">
            {/* Reflection */}
            <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-60"></div>
            {/* Face */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-400 rounded-full"></div>
          </div>
          
          {/* Arms */}
          <div className="absolute top-3 -left-2 w-4 h-2 bg-gray-200 rounded-full border border-gray-400 transform rotate-12"></div>
          <div className="absolute top-3 -right-2 w-4 h-2 bg-gray-200 rounded-full border border-gray-400 transform -rotate-12"></div>
          
          {/* Legs */}
          <div className="absolute bottom-0 left-2 w-2 h-4 bg-gray-200 rounded-full border border-gray-400"></div>
          <div className="absolute bottom-0 right-2 w-2 h-4 bg-gray-200 rounded-full border border-gray-400"></div>
          
          {/* Jetpack */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-gradient-to-b from-red-400 to-red-600 rounded border border-red-700">
            {/* Flames */}
            <div className="absolute -bottom-2 left-1 w-1 h-2 bg-gradient-to-b from-orange-400 to-red-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 right-1 w-1 h-2 bg-gradient-to-b from-orange-400 to-red-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Chest Control Panel */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-gray-700 rounded border border-gray-800">
            <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-red-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
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