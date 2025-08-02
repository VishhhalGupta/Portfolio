import { useEffect, useState } from 'react';

const SpaceBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          delay: Math.random() * 3
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  useEffect(() => {
    const createFlowingStar = () => {
      const star = document.createElement('div');
      star.className = 'flowing-star absolute w-1 h-1 bg-white rounded-full opacity-60';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = '-10px';
      star.style.animationDuration = (Math.random() * 3 + 5) + 's';
      
      const container = document.querySelector('.stars-container');
      if (container) {
        container.appendChild(star);
        setTimeout(() => {
          star.remove();
        }, 8000);
      }
    };

    const interval = setInterval(createFlowingStar, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stars-container fixed inset-0 pointer-events-none z-0">
      {stars.map(star => (
        <div
          key={star.id}
          className="star absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default SpaceBackground;