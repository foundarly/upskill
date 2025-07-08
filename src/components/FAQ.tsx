import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: 'What makes Upskill different from other online courses?',
      answer: 'Unlike traditional courses that focus on theory, Upskill provides hands-on experience building real startups. You\'ll work on actual projects, connect with mentors, and get access to funding opportunities through our ecosystem.'
    },
    {
      question: 'Do I need prior business experience to start?',
      answer: 'No prior business experience is required. Our courses are designed for beginners and include step-by-step guidance. Whether you\'re a student, professional, or career changer, you can start your entrepreneurial journey with us.'
    },
    {
      question: 'How does the mentorship program work?',
      answer: 'Our mentorship program connects you with successful entrepreneurs and industry experts. Depending on your plan, you\'ll have access to group mentoring sessions or 1-on-1 meetings to get personalized guidance on your startup journey.'
    },
    {
      question: 'Can I access the courses on mobile devices?',
      answer: 'Yes, all courses are mobile-optimized and available through our mobile app. You can learn on-the-go and access all materials from any device with an internet connection.'
    },
    {
      question: 'What happens after I complete a course?',
      answer: 'After completing courses, you\'ll receive certificates and unlock access to advanced features in the Foundarly ecosystem, including investor networks, launch support, and exclusive community events.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with your learning experience, you can request a full refund within the first 30 days of your subscription.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out to our team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search frequently asked questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7849] focus:border-transparent"
          />
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#ff7849] transition-colors duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="font-semibold text-[#1a365d] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No questions found matching your search.</p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-[#f7fafc] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Get in touch and we'll get back to you within 24 hours.
            </p>
            <button className="bg-[#ff7849] text-white px-6 py-3 rounded-lg hover:bg-[#e66938] transition-colors duration-300 font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;