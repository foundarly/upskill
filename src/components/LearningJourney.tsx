import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, CheckCircle, Clock, Users, Rocket, Target, Zap, Award, Play, ArrowRight, Star, TrendingUp, BookOpen, Brain, Network, Lightbulb } from 'lucide-react';

const LearningJourney = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setProgress((activeStep + 1) * 25), 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeStep]);

  const steps = [
    {
      title: 'Learn',
      subtitle: 'Master the Fundamentals',
      description: 'Build a solid foundation with practical courses designed by successful entrepreneurs. Learn business strategy, market validation, and essential startup skills.',
      icon: BookOpen,
      color: '#2563eb', // Blue
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-blue-600',
      duration: '4-6 weeks',
      completion: '95%',
      details: [
        'Business model development',
        'Market research & validation',
        'Financial planning basics',
        'Product development strategy'
      ],
      metrics: {
        courses: '12+',
        hours: '40+',
        projects: '3'
      }
    },
    {
      title: 'Connect',
      subtitle: 'Build Your Network',
      description: 'Join our community of entrepreneurs, mentors, and investors. Build relationships that will accelerate your startup journey.',
      icon: Network,
      color: '#7c3aed', // Purple
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-purple-600',
      duration: '2-3 weeks',
      completion: '88%',
      details: [
        'Weekly founder meetups',
        'Mentor matching program',
        'Investor introduction sessions',
        'Peer collaboration opportunities'
      ],
      metrics: {
        connections: '50+',
        mentors: '5+',
        events: '8+'
      }
    },
    {
      title: 'Build',
      subtitle: 'Create Your MVP',
      description: 'Turn your idea into reality. Get hands-on experience building your minimum viable product with expert guidance and feedback.',
      icon: Lightbulb,
      color: '#059669', // Emerald
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-600',
      gradientFrom: 'from-emerald-500',
      gradientTo: 'to-emerald-600',
      duration: '6-8 weeks',
      completion: '92%',
      details: [
        'MVP development guidance',
        'User testing & feedback',
        'Iterative improvement',
        'Technical mentorship'
      ],
      metrics: {
        mvps: '1-2',
        feedback: '100+',
        iterations: '5+'
      }
    },
    {
      title: 'Launch',
      subtitle: 'Go to Market',
      description: 'Launch your startup with confidence. Access funding opportunities, develop your go-to-market strategy, and scale your business.',
      icon: Rocket,
      color: '#dc2626', // Red
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-600',
      gradientFrom: 'from-red-500',
      gradientTo: 'to-red-600',
      duration: '4-6 weeks',
      completion: '85%',
      details: [
        'Pitch deck development',
        'Go-to-market strategy',
        'Funding introductions',
        'Launch event support'
      ],
      metrics: {
        funding: '$2M+',
        launches: '120+',
        success: '85%'
      }
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 border border-gray-200 mb-6">
            <Target className="h-4 w-4 text-gray-600 mr-2" />
            <span className="text-sm font-semibold text-gray-700">Your Learning Path</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Journey to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
              Entrepreneurship
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow our proven 4-step process that has helped hundreds of founders build successful startups from idea to launch.
          </p>

          {/* Progress Bar */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-3 text-sm text-gray-500">
              <span>Start</span>
              <span className="font-semibold text-gray-700">{progress}% Complete</span>
              <span>Launch</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setActiveStep(index)}
              >
                <div className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-500 shadow-lg hover:shadow-xl ${
                  activeStep === index 
                    ? `${step.borderColor} shadow-lg` 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  
                  {/* Step Header */}
                  <div className="flex items-center mb-6">
                    <div className={`relative flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold transition-all duration-500 ${
                      activeStep === index 
                        ? `bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} scale-110` 
                        : activeStep > index
                        ? 'bg-gradient-to-br from-emerald-500 to-emerald-600'
                        : 'bg-gray-400'
                    }`}>
                      {activeStep > index ? (
                        <CheckCircle className="h-8 w-8" />
                      ) : (
                        React.createElement(step.icon, { className: "h-8 w-8" })
                      )}
                      
                      {/* Active indicator */}
                      {activeStep === index && (
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${step.gradientFrom} ${step.gradientTo} animate-ping opacity-30`}></div>
                      )}
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </div>
                      </div>
                      <p className="text-gray-600 font-medium">{step.subtitle}</p>
                    </div>
                    
                    <ChevronRight className={`ml-4 h-5 w-5 transition-all duration-500 ${
                      activeStep === index ? `rotate-90 ${step.textColor}` : 'text-gray-400'
                    }`} />
                  </div>

                  {/* Completion Rate */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Success Rate</span>
                      <span className={`text-sm font-bold ${step.textColor}`}>{step.completion}</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} h-full rounded-full transition-all duration-1000`}
                        style={{ width: step.completion }}
                      ></div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(step.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className={`${step.bgColor} rounded-lg p-3 border ${step.borderColor}`}>
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-8 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="sticky top-8">
            <div className={`bg-white rounded-2xl p-8 shadow-xl border-2 ${steps[activeStep].borderColor} relative overflow-hidden`}>
              {/* Background accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${steps[activeStep].bgColor} rounded-full blur-2xl opacity-50`}></div>
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${steps[activeStep].gradientFrom} ${steps[activeStep].gradientTo} flex items-center justify-center mr-4`}>
                    {React.createElement(steps[activeStep].icon, { className: "h-7 w-7 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {steps[activeStep].title}
                    </h3>
                    <p className={`text-lg font-medium ${steps[activeStep].textColor}`}>
                      {steps[activeStep].subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {steps[activeStep].description}
                </p>

                {/* Feature List */}
                <div className="space-y-4 mb-8">
                  {steps[activeStep].details.map((detail, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center p-4 ${steps[activeStep].bgColor} rounded-xl border ${steps[activeStep].borderColor} hover:shadow-md transition-all duration-300`}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-br ${steps[activeStep].gradientFrom} ${steps[activeStep].gradientTo} rounded-full mr-4 flex-shrink-0`}></div>
                      <span className="text-gray-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className={`flex-1 bg-gradient-to-r ${steps[activeStep].gradientFrom} ${steps[activeStep].gradientTo} text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center`}>
                    <Play className="h-5 w-5 mr-2" />
                    Start This Step
                  </button>
                  <button className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300">
                    Learn More
                  </button>
                </div>

                {/* Progress Indicator */}
                <div className="mt-8 flex justify-center">
                  <div className="flex space-x-3">
                    {steps.map((step, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeStep 
                            ? `bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} scale-125` 
                            : index < activeStep
                            ? 'bg-emerald-500'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-20 grid md:grid-cols-4 gap-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { label: 'Success Rate', value: '94%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
            { label: 'Active Learners', value: '10K+', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
            { label: 'Completed Journeys', value: '2.5K+', icon: Award, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
            { label: 'Average Time', value: '16 weeks', icon: Clock, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`${stat.bg} rounded-2xl p-6 border ${stat.border} hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bg} rounded-xl mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;