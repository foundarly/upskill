import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users, BookOpen, Briefcase, TrendingUp, MessageSquare, Award, Zap, Globe, Rocket } from 'lucide-react';

const EcosystemIntegration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated network visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes = [
      { x: canvas.width / 2, y: canvas.height / 2, radius: 30, color: '#ff7849', label: 'Upskill' },
      { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 20, color: '#1a365d', label: 'Community' },
      { x: canvas.width * 0.8, y: canvas.height * 0.3, radius: 20, color: '#1a365d', label: 'Resources' },
      { x: canvas.width * 0.2, y: canvas.height * 0.7, radius: 20, color: '#1a365d', label: 'Jobs' },
      { x: canvas.width * 0.8, y: canvas.height * 0.7, radius: 20, color: '#1a365d', label: 'Investors' },
      { x: canvas.width * 0.5, y: canvas.height * 0.15, radius: 15, color: '#ff7849', label: 'Mentors' },
      { x: canvas.width * 0.5, y: canvas.height * 0.85, radius: 15, color: '#ff7849', label: 'Certification' },
    ];

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      // Draw connections
      ctx.strokeStyle = '#ff7849';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.3;

      nodes.forEach((node, i) => {
        if (i === 0) return; // Skip center node
        const centerNode = nodes[0];
        
        ctx.beginPath();
        ctx.moveTo(centerNode.x, centerNode.y);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(time + i) * 0.2 + 1;
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow effect
        ctx.globalAlpha = 0.3;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse * 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible]);

  const features = [
    {
      icon: Users,
      title: 'Community Access',
      description: 'Connect with 10,000+ entrepreneurs worldwide',
      highlight: 'Active community',
      color: 'from-blue-500 to-cyan-500',
      stats: '10K+ members'
    },
    {
      icon: BookOpen,
      title: 'Resource Library',
      description: 'Access to premium tools and templates',
      highlight: 'Premium resources',
      color: 'from-purple-500 to-pink-500',
      stats: '500+ resources'
    },
    {
      icon: Briefcase,
      title: 'Job Board',
      description: 'Find opportunities with startup-friendly companies',
      highlight: 'Exclusive opportunities',
      color: 'from-green-500 to-teal-500',
      stats: '200+ jobs'
    },
    {
      icon: TrendingUp,
      title: 'Investor Network',
      description: 'Direct access to VCs and angel investors',
      highlight: 'Real funding access',
      color: 'from-orange-500 to-red-500',
      stats: '50+ investors'
    },
    {
      icon: MessageSquare,
      title: 'Expert Mentorship',
      description: '1-on-1 sessions with successful founders',
      highlight: 'Personal guidance',
      color: 'from-indigo-500 to-purple-500',
      stats: '100+ mentors'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Industry-recognized credentials',
      highlight: 'Verified skills',
      color: 'from-pink-500 to-rose-500',
      stats: '95% recognition'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-[#f7fafc] via-white to-[#f7fafc] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-[#ff7849]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-[#1a365d]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ff7849]/10 to-[#1a365d]/10 border border-[#ff7849]/20 mb-6">
            <Globe className="h-4 w-4 text-[#ff7849] mr-2" />
            <span className="text-sm font-medium text-[#1a365d]">Complete Ecosystem</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#1a365d] mb-6 leading-tight">
            Part of the
            <span className="block bg-gradient-to-r from-[#ff7849] to-[#e66938] bg-clip-text text-transparent">
              Foundarly Ecosystem
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Upskill seamlessly integrates with the broader Foundarly platform, giving you access to a complete entrepreneurship ecosystem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Network Visualization */}
          <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
              {/* Canvas for Network Animation */}
              <canvas
                ref={canvasRef}
                className="w-full h-96 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #f7fafc 0%, #ffffff 100%)' }}
              />

              {/* Interactive Feature Cards */}
              <div className="absolute inset-8 pointer-events-none">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`group relative bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-xl pointer-events-auto cursor-pointer ${
                        activeFeature === index ? 'ring-2 ring-[#ff7849] scale-105' : ''
                      }`}
                      onMouseEnter={() => setActiveFeature(index)}
                      style={{
                        transform: `translateY(${Math.sin(Date.now() * 0.001 + index) * 5}px)`,
                      }}
                    >
                      <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-[#1a365d] text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        {feature.description}
                      </p>
                      <div className="text-xs font-bold text-[#ff7849]">
                        {feature.stats}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Central Hub Indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="bg-[#ff7849] text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
                  <span className="font-bold text-sm">Upskill Hub</span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits & Journey */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Active Feature Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${features[activeFeature].color} rounded-xl flex items-center justify-center mr-4`}>
                  {React.createElement(features[activeFeature].icon, { className: "h-6 w-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a365d]">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-[#ff7849] font-medium text-sm">
                    {features[activeFeature].highlight}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {features[activeFeature].description}
              </p>
            </div>

            {/* Journey Steps */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#ff7849] pl-6">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-3">
                  Cross-Platform Benefits
                </h3>
                <p className="text-gray-600 mb-4">
                  Your Upskill progress unlocks additional features across the entire Foundarly ecosystem, creating a seamless journey from learning to launching.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Learn with Upskill',
                    description: 'Complete courses and earn credentials that unlock platform features',
                    icon: BookOpen
                  },
                  {
                    step: '2',
                    title: 'Access Main Platform',
                    description: 'Join the full Foundarly platform with exclusive member benefits',
                    icon: Globe
                  },
                  {
                    step: '3',
                    title: 'Launch Your Startup',
                    description: 'Get funding, mentorship, and launch support through our network',
                    icon: Rocket
                  }
                ].map((item, index) => (
                  <div key={index} className="group flex items-start hover:bg-gray-50 p-4 rounded-xl transition-colors duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#ff7849] to-[#e66938] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1a365d] mb-1 group-hover:text-[#ff7849] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <item.icon className="h-5 w-5 text-gray-400 group-hover:text-[#ff7849] transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex-1 bg-gradient-to-r from-[#ff7849] to-[#e66938] text-white px-6 py-4 rounded-xl hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center shadow-lg">
                Explore Full Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-6 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-[#ff7849] hover:text-[#ff7849] transition-colors duration-300 flex items-center justify-center">
                <Zap className="h-5 w-5 mr-2" />
                See Integration
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-20 grid md:grid-cols-4 gap-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { label: 'Platform Integration', value: '100%', icon: Globe },
            { label: 'Cross-Platform Features', value: '25+', icon: Zap },
            { label: 'Ecosystem Partners', value: '50+', icon: Users },
            { label: 'Success Rate', value: '94%', icon: TrendingUp }
          ].map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#ff7849] to-[#e66938] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#1a365d] mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemIntegration;