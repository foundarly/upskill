import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Rocket, ArrowRight, Zap, Target, Globe } from 'lucide-react';

const ValueProposition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const features = [
    {
      icon: BookOpen,
      title: 'Practical Learning',
      description: 'Learn by building real products and solving actual business problems, not just theoretical concepts.',
      highlight: 'Build real startups',
      color: 'from-blue-500 to-cyan-500',
      stats: '95% hands-on',
      details: [
        'Real-world case studies',
        'Live project development',
        'Industry expert guidance',
        'Peer collaboration'
      ]
    },
    {
      icon: Users,
      title: 'Founder Network',
      description: 'Connect with like-minded entrepreneurs, mentors, and investors in our exclusive community.',
      highlight: 'Active community',
      color: 'from-purple-500 to-pink-500',
      stats: '10K+ members',
      details: [
        'Weekly networking events',
        'Mentor matching program',
        'Investor introductions',
        'Global community access'
      ]
    },
    {
      icon: Rocket,
      title: 'Launch Support',
      description: 'Get direct access to resources, funding opportunities, and expert guidance to launch your startup.',
      highlight: 'Real funding access',
      color: 'from-orange-500 to-red-500',
      stats: '$50M+ raised',
      details: [
        'Pitch deck development',
        'Investor introductions',
        'Launch strategy support',
        'Post-launch mentorship'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#ff7849]/5 to-[#1a365d]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#1a365d]/5 to-[#ff7849]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ff7849]/10 to-[#1a365d]/10 border border-[#ff7849]/20 mb-6">
            <Zap className="h-4 w-4 text-[#ff7849] mr-2" />
            <span className="text-sm font-medium text-[#1a365d]">Why Choose Upskill Foundarly?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#1a365d] mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-[#ff7849] to-[#e66938] bg-clip-text text-transparent">
              Entrepreneurial Journey
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We don't just teach entrepreneurship—we create successful entrepreneurs through 
            <span className="font-semibold text-[#1a365d]"> practical experience </span>
            and real-world connections.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group-hover:border-[#ff7849]/30">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute -top-2 -right-2 bg-white rounded-full px-3 py-1 shadow-lg border border-gray-100">
                    <span className="text-xs font-bold text-[#ff7849]">{feature.stats}</span>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-[#1a365d] mb-4 group-hover:text-[#ff7849] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature List */}
                <div className="space-y-2 mb-6">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-[#ff7849] rounded-full mr-3"></div>
                      {detail}
                    </div>
                  ))}
                </div>
                
                {/* Highlight Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff7849]/10 text-[#ff7849] text-sm font-medium mb-6">
                  <Target className="h-3 w-3 mr-2" />
                  {feature.highlight}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-[#ff7849] to-[#e66938] text-white py-3 rounded-xl font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#ff7849] to-[#e66938] rounded-full opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-[#1a365d] to-[#2d5a87] rounded-full opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#1a365d] to-[#2d5a87] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern id="value-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#value-grid)" />
              </svg>
            </div>

            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of entrepreneurs who have transformed their ideas into successful businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ff7849] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e66938] transition-colors duration-300 flex items-center justify-center group">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Explore Platform
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;