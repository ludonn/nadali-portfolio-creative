import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  const [isHovering, setIsHovering] = useState(false);
  const letters = ['L', 'U', 'D', 'O', 'V', 'I', 'C', 'A', ' ', 'N', 'A', 'D', 'A', 'L', 'I'];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getTransform = (index: number) => {
    const distance = isHovering ? 0.5 : 0.2;
    return {
      x: (mousePosition.x - 0.5) * 20 * distance * (index % 3),
      y: (mousePosition.y - 0.5) * 20 * distance * (index % 2),
      rotate: (mousePosition.x - 0.5) * 10 * distance
    };
  };

  return (
    <motion.div 
      className="flex flex-col items-center font-impact tracking-wider leading-tight"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <div className="flex mb-2">
        {letters.slice(0, 8).map((letter, index) => (
          <motion.span
            key={`ludovica-${index}`}
            className="text-8xl md:text-9xl lg:text-[10rem] text-nadali-brown font-black inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              ...getTransform(index)
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              delay: index * 0.05
            }}
            whileHover={{
              scale: [1, 1.2, 1],
              color: '#6F826A',
              transition: { duration: 0.3 }
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="flex">
        {letters.slice(9).map((letter, index) => (
          <motion.span
            key={`nadali-${index}`}
            className="text-8xl md:text-9xl lg:text-[10rem] text-nadali-brown font-black inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0,
              ...getTransform(index + 9)
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              delay: (index + 9) * 0.05
            }}
            whileHover={{
              scale: [1, 1.2, 1],
              color: '#6F826A',
              transition: { duration: 0.3 }
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedLogo;
