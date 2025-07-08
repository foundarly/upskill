import React, { useState, useEffect, useRef } from 'react';
import { Check, Star, Zap, Crown, Rocket, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
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

  const plans = [
    {
      name: 'Explorer',
      description: 'Perfect for getting started with entrepreneurship',
      monthlyPrice: 49,
      annualPrice: 39,
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        'Access to 5 core courses',
        'Basic community access',
        'Monthly group mentoring',
        'Resource library',
        'Mobile app access',
        'Certificate of completion',
        'Email support',
        'Basic analytics'
      ],
      limits: {
        courses: '5 courses',
        mentoring: 'Group sessions',
        support: 'Email only'
      }
    },
    {
      name: 'Founder',
      description: 'Best for serious entrepreneurs ready to launch',
      monthlyPrice: 99,
      annualPrice: 79,
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      popular: true,
      features: [
        'Access to all courses',
        'Full community access',
        'Weekly 1-on-1 mentoring',
        'Investor introductions',
        'Pitch deck reviews',
        'Launch support package',
        'Premium resources',
        'Expert office hours',
        'Priority support',
        'Advanced analytics',
        'Custom learning path',
        'Networking events'
      ],
      limits: {
        courses: 'All courses',
        mentoring: '1-on-1 sessions',
        support: 'Priority support'
      }
    },
    {
      name: 'Enterprise',
      description: 'For teams and organizations',
      monthlyPrice: 199,
      annualPrice: 159,
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      features: [
        'Everything in Founder',
        'Team collaboration tools',
        'Custom curriculum',
        'Dedicated success manager',
        'White-label options',
        'Advanced analytics',
        'Custom integrations',
        'Priority support',
        'Team management',
        'Bulk licensing',
        'Custom reporting',
        'API access'
      ],
      limits: {
        courses: 'Custom curriculum',
        mentoring: 'Dedicated manager',
        support: 'White-glove support'
      }
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-32 bg-gradient-to-br from-[#1a365d] via-[#2d5a87] to-[#1a365d] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#ff7849]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#ff7849]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Price Tags */}
        <div className="absolute top-1/4 right-1/4 opacity-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 animate-float">
            <span className="text-white font-bold">$79/mo</span>
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 animate-float-delayed">
            <span className="text-white font-bold">Save 20%</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Star className="h-4 w-4 text-[#ff7849] mr-2" />
            <span className="text-sm font-medium text-white">Flexible Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Choose Your
            <span className="block bg-gradient-to-r from-[#ff7849] to-[#ffa366] bg-clip-text text-transparent">
              Success Plan
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Start your entrepreneurial journey with a plan that fits your goals and budget.
          </p>

          {/* Enhanced Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium transition-colors duration-300 ${!isAnnual ? 'text-[#ff7849]' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none ${
                isAnnual ? 'bg-[#ff7849]' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium transition-colors duration-300 ${isAnnual ? 'text-[#ff7849]' : 'text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <div className="bg-[#ff7849] text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                Save 20%
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${
                plan.popular ? 'scale-105 lg:scale-110' : 'hover:scale-105'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-[#ff7849] text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border transition-all duration-500 overflow-hidden ${
                plan.popular 
                  ? 'border-[#ff7849] shadow-[#ff7849]/20' 
                  : 'border-white/20 hover:border-[#ff7849]/50'
              } ${hoveredPlan === index ? 'shadow-3xl' : ''}`}>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Header */}
                <div className="relative text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-black text-[#1a365d]">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500 ml-2">
                        /month
                      </span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-green-600 font-medium mt-2">
                        Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                      </div>
                    )}
                  </div>

                  {/* Plan Limits */}
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {Object.entries(plan.limits).map(([key, value], limitIndex) => (
                      <div key={limitIndex} className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                        <span className="font-medium capitalize">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="relative space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mr-3`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`relative w-full py-4 rounded-xl font-semibold transition-all duration-500 overflow-hidden group ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } ${hoveredPlan === index ? 'scale-105' : ''}`}
                >
                  <div className="relative flex items-center justify-center">
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  
                  {/* Button Hover Effect */}
                  {!plan.popular && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}></div>
                  )}
                </button>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ff7849] rounded-full opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#1a365d] rounded-full opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-gray-300 mb-6 text-lg">
              All plans include a 14-day free trial. No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button className="text-[#ff7849] hover:text-white font-medium flex items-center transition-colors duration-300">
                Compare all features
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-[#ff7849]" />
                  <span className="text-sm">30-day money back</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-[#ff7849]" />
                  <span className="text-sm">Cancel anytime</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-[#ff7849]" />
                  <span className="text-sm">24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;