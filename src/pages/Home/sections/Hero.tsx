import React, { useEffect, useRef } from 'react';
import MotionWrapper from '../../../components/ui/MotionWrapper';
import Typography from '../../../components/ui/Typography';
import TypeWriter from '../../../components/ui/TypeWriter';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper animation="fadeInUp">
            <Typography 
              variant="h1" 
              className="text-5xl md:text-7xl mb-6 leading-tight text-white max-w-4xl"
            >
              Transform Your Ideas Into Reality
            </Typography>
            <Typography className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              <TypeWriter 
                text="We create innovative software solutions that help businesses thrive in the digital age."
                delay={75}
                startDelay={1000}
              />
            </Typography>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Hero;