import React, { useState, useEffect, useRef } from 'react';
import { Clock, Users, Star, Filter, Play, ArrowRight, BookOpen, Award, TrendingUp } from 'lucide-react';

const CourseCatalog = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const filters = [
    { id: 'all', name: 'All Courses', count: 24 },
    { id: 'business', name: 'Business', count: 8 },
    { id: 'product', name: 'Product', count: 6 },
    { id: 'marketing', name: 'Marketing', count: 5 },
    { id: 'finance', name: 'Finance', count: 5 }
  ];

  const courses = [
    {
      title: 'Startup Fundamentals',
      category: 'business',
      duration: '6 weeks',
      level: 'Beginner',
      rating: 4.9,
      students: 1250,
      price: '$99',
      description: 'Master the core principles of building a startup from ideation to launch.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Sarah Chen',
      badge: 'Bestseller',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Product Development Mastery',
      category: 'product',
      duration: '8 weeks',
      level: 'Intermediate',
      rating: 4.8,
      students: 892,
      price: '$149',
      description: 'Learn to build products that customers love using lean methodologies.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Marcus Rodriguez',
      badge: 'New',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Growth Marketing Blueprint',
      category: 'marketing',
      duration: '5 weeks',
      level: 'Advanced',
      rating: 4.9,
      students: 673,
      price: '$199',
      description: 'Scale your startup with proven growth hacking strategies.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Lisa Park',
      badge: 'Hot',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Funding & Investment',
      category: 'finance',
      duration: '4 weeks',
      level: 'Advanced',
      rating: 4.7,
      students: 543,
      price: '$179',
      description: 'Navigate the funding landscape and secure investment for your startup.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'David Thompson',
      badge: 'Premium',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Digital Marketing Essentials',
      category: 'marketing',
      duration: '6 weeks',
      level: 'Beginner',
      rating: 4.6,
      students: 1020,
      price: '$89',
      description: 'Build a strong online presence and attract your first customers.',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Emma Wilson',
      badge: 'Popular',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Business Model Innovation',
      category: 'business',
      duration: '7 weeks',
      level: 'Intermediate',
      rating: 4.8,
      students: 758,
      price: '$129',
      description: 'Design and validate innovative business models that scale.',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Alex Johnson',
      badge: 'Trending',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 6);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} id="courses" className="py-32 bg-gradient-to-br from-[#1a365d] via-[#2d5a87] to-[#1a365d] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#ff7849]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#ff7849]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#ff7849] rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-[#ff7849] rounded-full animate-pulse opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <BookOpen className="h-4 w-4 text-[#ff7849] mr-2" />
            <span className="text-sm font-medium text-white">Premium Course Catalog</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Master Skills That
            <span className="block bg-gradient-to-r from-[#ff7849] to-[#ffa366] bg-clip-text text-transparent">
              Build Startups
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Practical courses designed by successful entrepreneurs to give you the skills you need to build and scale your startup.
          </p>
        </div>

        {/* Enhanced Filters with 3D Effect */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-[#ff7849] text-white shadow-lg shadow-[#ff7849]/30'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <span className="relative z-10 flex items-center">
                {filter.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeFilter === filter.id ? 'bg-white/20' : 'bg-[#ff7849]/20'
                }`}>
                  {filter.count}
                </span>
              </span>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7849] to-[#e66938] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Course Grid */}
        <div className="relative mb-16">
          {/* Scroll Controls */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-white">Featured Courses</h3>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button
                onClick={scrollRight}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayedCourses.map((course, index) => (
              <div
                key={index}
                className={`group relative flex-shrink-0 w-80 bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#ff7849]/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCourse(index)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                {/* Course Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-[#ff7849]">
                    {course.badge}
                  </div>
                  
                  {/* Level Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {course.level}
                  </div>

                  {/* Play Button Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hoveredCourse === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Play className="h-6 w-6 text-[#ff7849]" />
                    </div>
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#1a365d] group-hover:text-[#ff7849] transition-colors duration-300 line-clamp-2">
                      {course.title}
                    </h3>
                    <div className="text-2xl font-bold text-[#ff7849]">{course.price}</div>
                  </div>
                  
                  {/* Instructor */}
                  <p className="text-sm text-gray-500 mb-3">by {course.instructor}</p>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group-hover:scale-105 ${
                    hoveredCourse === index
                      ? `bg-gradient-to-r ${course.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    {hoveredCourse === index ? 'Enroll Now' : 'View Details'}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>

                {/* 3D Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#ff7849]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { icon: Award, label: 'Course Completion Rate', value: '94%', color: 'from-green-500 to-teal-500' },
            { icon: TrendingUp, label: 'Student Success Rate', value: '87%', color: 'from-blue-500 to-cyan-500' },
            { icon: Users, label: 'Active Learners', value: '10K+', color: 'from-purple-500 to-pink-500' }
          ].map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {filteredCourses.length > 6 && (
          <div className={`text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 font-semibold border border-white/20 hover:scale-105"
            >
              {showAll ? 'Show Less' : `View All ${filteredCourses.length} Courses`}
              <ArrowRight className="h-5 w-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseCatalog;