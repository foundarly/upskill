import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Play, ExternalLink, Award, TrendingUp, Users } from 'lucide-react';

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentStory((prev) => (prev + 1) % stories.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const stories = [
    {
      name: 'Sarah Chen',
      startup: 'EcoTrack',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Upskill Foundarly didn\'t just teach me about startups—they connected me with the right mentors and investors. Within 6 months, I launched EcoTrack and raised $2M in seed funding.',
      longQuote: 'The practical approach and real-world connections made all the difference. I went from having just an idea to building a team, developing our MVP, and securing funding. The mentorship program was invaluable.',
      metrics: {
        funding: '$2M',
        growth: '300%',
        users: '50K+',
        team: '12'
      },
      hasVideo: true,
      industry: 'Climate Tech',
      founded: '2023',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Marcus Rodriguez',
      startup: 'HealthFlow',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The practical approach and real-world projects made all the difference. I went from idea to profitable SaaS in 8 months with the skills I learned here.',
      longQuote: 'What sets Upskill apart is the focus on building real products. Every course had practical assignments that contributed to my actual startup. The community support was incredible.',
      metrics: {
        funding: '$500K',
        growth: '200%',
        users: '25K+',
        team: '8'
      },
      hasVideo: false,
      industry: 'HealthTech',
      founded: '2023',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Lisa Park',
      startup: 'CreativeSpace',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The community support was incredible. I found my co-founder through the platform and we\'ve built something amazing together.',
      longQuote: 'Beyond the courses, the network is what truly makes this platform special. The connections I made here became my advisors, customers, and even my co-founder. It\'s a complete ecosystem.',
      metrics: {
        funding: '$1.2M',
        growth: '250%',
        users: '100K+',
        team: '15'
      },
      hasVideo: true,
      industry: 'Creative Tech',
      founded: '2022',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'David Thompson',
      startup: 'LogiLink',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'From corporate employee to successful entrepreneur in 18 months. The structured learning path and mentorship were game-changers.',
      longQuote: 'I was stuck in corporate for 10 years before finding Upskill. The structured approach gave me confidence to make the leap. Now LogiLink is growing 40% month-over-month.',
      metrics: {
        funding: '$3.5M',
        growth: '400%',
        users: '75K+',
        team: '20'
      },
      hasVideo: false,
      industry: 'Logistics',
      founded: '2022',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
    setIsAutoPlaying(false);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
    setIsAutoPlaying(false);
  };

  const currentStoryData = stories[currentStory];

  return (
    <section ref={sectionRef} id="stories" className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#ff7849]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#1a365d]/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating Success Icons */}
        <div className="absolute top-1/4 left-1/4 opacity-10">
          <Award className="h-8 w-8 text-[#ff7849] animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 opacity-10">
          <TrendingUp className="h-6 w-6 text-[#1a365d] animate-bounce" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#ff7849]/10 to-[#1a365d]/10 border border-[#ff7849]/20 mb-6">
            <Users className="h-4 w-4 text-[#ff7849] mr-2" />
            <span className="text-sm font-medium text-[#1a365d]">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#1a365d] mb-6 leading-tight">
            From Learners to
            <span className="block bg-gradient-to-r from-[#ff7849] to-[#e66938] bg-clip-text text-transparent">
              Successful Founders
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the entrepreneurs who transformed their ideas into successful startups through our platform.
          </p>
        </div>

        {/* Main Story Display */}
        <div className="relative mb-16">
          <div className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <div className="order-2 lg:order-1">
                {/* Header */}
                <div className="flex items-start mb-6">
                  <div className="mr-4">
                    <Quote className="h-12 w-12 text-[#ff7849] opacity-50" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-3xl font-bold text-[#1a365d]">
                        {currentStoryData.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentStoryData.color}`}></div>
                        <span className="text-sm text-gray-500">{currentStoryData.industry}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-[#ff7849] font-semibold mb-4">
                      <span>Founder of {currentStoryData.startup}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">Founded {currentStoryData.founded}</span>
                    </div>
                  </div>
                </div>
                
                {/* Quote */}
                <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  "{currentStoryData.longQuote}"
                </blockquote>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {Object.entries(currentStoryData.metrics).map(([key, value], index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="text-2xl md:text-3xl font-bold text-[#ff7849] mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize font-medium">
                          {key === 'funding' ? 'Funding Raised' : 
                           key === 'growth' ? 'Growth Rate' : 
                           key === 'users' ? 'Active Users' : 'Team Size'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={`flex-1 bg-gradient-to-r ${currentStoryData.color} text-white py-4 px-6 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center`}>
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Visit {currentStoryData.startup}
                  </button>
                  {currentStoryData.hasVideo && (
                    <button className="px-6 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-[#ff7849] hover:text-[#ff7849] transition-colors duration-300 flex items-center justify-center">
                      <Play className="h-5 w-5 mr-2" />
                      Watch Story
                    </button>
                  )}
                </div>
              </div>

              {/* Image/Video Section */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentStoryData.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <img
                    src={currentStoryData.image}
                    alt={currentStoryData.name}
                    className="relative w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Video Overlay */}
                  {currentStoryData.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                        <Play className="h-8 w-8 text-[#ff7849]" />
                      </div>
                    </div>
                  )}

                  {/* Success Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-[#ff7849]" />
                      <span className="text-sm font-semibold text-[#1a365d]">Success Story</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <button
            onClick={prevStory}
            className="group bg-white shadow-lg hover:shadow-xl text-[#1a365d] p-4 rounded-full transition-all duration-300 hover:scale-110 border border-gray-100"
          >
            <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>

          {/* Story Indicators */}
          <div className="flex gap-3">
            {stories.map((story, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentStory(index);
                  setIsAutoPlaying(false);
                }}
                className={`group relative transition-all duration-300 ${
                  index === currentStory ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div className={`w-16 h-16 rounded-full overflow-hidden border-3 transition-all duration-300 ${
                  index === currentStory 
                    ? `border-[#ff7849] shadow-lg shadow-[#ff7849]/30` 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Progress Ring for Active Story */}
                {index === currentStory && isAutoPlaying && (
                  <div className="absolute inset-0 rounded-full">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="#ff7849"
                        strokeWidth="2"
                        strokeDasharray="301.59"
                        strokeDashoffset="301.59"
                        className="animate-[progress_5s_linear_infinite]"
                      />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={nextStory}
            className="group bg-white shadow-lg hover:shadow-xl text-[#1a365d] p-4 rounded-full transition-all duration-300 hover:scale-110 border border-gray-100"
          >
            <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Auto-play Control */}
        <div className="text-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-[#ff7849] text-white hover:bg-[#e66938]'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isAutoPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>
      </div>

      {/* Custom CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          from {
            stroke-dashoffset: 301.59;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;