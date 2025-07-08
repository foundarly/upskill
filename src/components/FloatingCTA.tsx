import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      setIsVisible(scrollPercentage > 50 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <div className="bg-[#ff7849] text-white p-4 rounded-lg shadow-lg animate-slide-in-right">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors duration-300"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="pr-6">
          <h3 className="font-bold mb-2">Ready to Start?</h3>
          <p className="text-sm mb-3 opacity-90">
            Join 500+ founders building successful startups
          </p>
          <button className="bg-white text-[#ff7849] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium flex items-center text-sm">
            Get Started Free
            <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;