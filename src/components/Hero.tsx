import React, { useEffect, useState } from 'react';
import { ArrowRight, Users, Rocket, TrendingUp, Sparkles, Play } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Advanced Background with Mesh Gradient */}
      <div className="absolute inset-0">
        {/* Animated Mesh Gradient */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 120, 73, 0.15) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(26, 54, 93, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, #f7fafc 0%, #ffffff 25%, #f7fafc 50%, #ffffff 75%, #f7fafc 100%)
            `
          }}
        />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#ff7849] to-[#e66938] rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-[#1a365d] to-[#2d5a87] rounded-lg rotate-45 opacity-10 animate-bounce"></div>
          <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-gradient-to-br from-[#ff7849] to-[#1a365d] rounded-full opacity-15 animate-ping"></div>
        </div>

        {/* Advanced Grid Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="advanced-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="url(#gridGradient)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff7849" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#1a365d" stopOpacity="0.05"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#advanced-grid)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center min-h-screen justify-center">
          {/* Animated Badge */}
          <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
              <Sparkles className="h-4 w-4 text-[#ff7849] mr-2 animate-pulse" />
              <span className="text-sm font-medium text-[#1a365d]">
                #1 Platform for Startup Education
              </span>
              <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Headline with Advanced Typography */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black text-[#1a365d] mb-8 leading-[0.9] transform transition-all duration-1200 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="block">Learn to Build</span>
            <span className="block bg-gradient-to-r from-[#ff7849] via-[#e66938] to-[#ff7849] bg-clip-text text-transparent animate-gradient-x">
              Real Startups
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-normal text-gray-600 mt-4">
              Not Just Earn Certificates
            </span>
          </h1>
          
          {/* Enhanced Subheading */}
          <p className={`text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1200 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Join the education platform where aspiring founders become 
            <span className="font-semibold text-[#1a365d]"> successful entrepreneurs </span>
            through practical learning and real startup ecosystem access.
          </p>

          {/* Advanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center gap-6 mb-16 transform transition-all duration-1200 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group relative px-8 py-4 bg-[#ff7849] text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7849] to-[#e66938] transition-all duration-300 group-hover:scale-110"></div>
              <div className="relative flex items-center justify-center">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm text-[#1a365d] rounded-2xl font-semibold text-lg border-2 border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-2xl">
              <div className="flex items-center justify-center">
                <Users className="h-5 w-5 mr-2" />
                Join Community
                <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </button>
          </div>

          {/* Enhanced Social Proof with Animations */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl transform transition-all duration-1200 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { icon: Users, label: '500+ active founders', value: '500+', color: 'from-blue-500 to-purple-600' },
              { icon: Rocket, label: '120+ launched startups', value: '120+', color: 'from-green-500 to-teal-600' },
              { icon: TrendingUp, label: '$50M+ total funding raised', value: '$50M+', color: 'from-orange-500 to-red-600' }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#1a365d] mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Achievement Cards */}
        <div className="absolute top-1/4 left-4 lg:left-12 hidden lg:block">
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <div className="text-sm font-semibold text-[#1a365d]">Sarah just launched!</div>
                <div className="text-xs text-gray-500">EcoTrack - $2M raised</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/3 right-4 lg:right-12 hidden lg:block">
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 animate-float-delayed">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#ff7849] mb-1">98%</div>
              <div className="text-xs text-gray-600">Success Rate</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#ff7849] rounded-full mx-0.5 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-1/4 hidden lg:block">
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 animate-bounce-slow">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#ff7849] to-[#e66938] rounded-full flex items-center justify-center">
                <Rocket className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#1a365d]">Live Session</div>
                <div className="text-xs text-gray-500">Starting in 5 min</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-[#ff7849] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#ff7849] rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-xs text-gray-500 mt-2">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;