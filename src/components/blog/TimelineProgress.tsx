'use client';
import React, { useEffect, useRef, useState } from 'react';

export function TimelineProgress() {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector('article');
      if (!article || !progressRef.current) return;

      const articleRect = article.getBoundingClientRect();
      const articleStart = articleRect.top + window.scrollY;
      const articleHeight = articleRect.height;
      const scrollTop = window.scrollY - articleStart;
      
      // Calculate progress based on article position
      const scrollProgress = Math.max(0, Math.min(1, scrollTop / (articleHeight - window.innerHeight)));
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main progress line */}
      <div 
        className="absolute left-0 top-0 h-full w-[2px] origin-top bg-border"
        style={{
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
      />
      
      {/* Animated progress overlay */}
      <div 
        ref={progressRef}
        className="absolute left-0 top-0 h-full w-[2px] origin-top bg-primary"
        style={{
          transform: `scaleY(${progress})`,
          transition: 'transform 0.1s ease',
        }}
      >
        {/* Glow effect */}
        <div 
          className="absolute -right-[3px] top-0 h-4 w-2"
          style={{
            background: 'var(--primary)',
            borderRadius: '4px',
            filter: 'blur(4px)',
            opacity: 0.5,
            transform: `translateY(${progress * 100}%)`,
            transition: 'transform 0.1s ease',
          }}
        />
      </div>
    </>
  );
} 