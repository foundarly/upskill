import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a365d] to-[#2d5a87] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="cta-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Build Your 
          <span className="text-[#ff7849]"> Startup Journey?</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of entrepreneurs who have transformed their ideas into successful businesses. Start your journey today.
        </p>

        {/* Email Signup Form */}
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff7849] focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitted}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-[#ff7849] text-white hover:bg-[#e66938]'
              }`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Subscribed!
                </>
              ) : (
                <>
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-[#ff7849]" />
            <span>Free 14-day trial</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-[#ff7849]" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-[#ff7849]" />
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <p className="text-gray-300 mb-4">
            Have questions? Get in touch with our team.
          </p>
          <button className="text-[#ff7849] hover:text-white font-medium flex items-center mx-auto">
            <Mail className="h-4 w-4 mr-2" />
            contact@foundarly.com
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;