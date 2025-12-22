import React, { useState, useEffect } from 'react';
import SolutionCard from './SolutionCard';
import SolutionsCarousel from './SolutionsCarousel';

const SolutionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('solutions-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      icon: '🤖',
      title: 'AI Chatbots',
      category: 'ai',
      description: 'Deploy intelligent conversational AI that handles customer inquiries 24/7, reduces response times, and improves customer satisfaction with natural language understanding.',
      features: [
        'Natural language processing for human-like conversations',
        'Multi-channel support (web, mobile, social media)',
        'Automated ticket routing and escalation',
        'Sentiment analysis and customer insights',
        'Seamless handoff to human agents when needed'
      ],
      ctaText: 'Deploy AI Chatbot',
      onCtaClick: () => console.log('AI Chatbot CTA clicked')
    },
    {
      icon: '⚙️',
      title: 'Workflow Automation',
      category: 'automation',
      description: 'Streamline business processes by automating repetitive tasks, reducing manual errors, and freeing up your team to focus on high-value activities.',
      features: [
        'Visual workflow builder with drag-and-drop interface',
        'Automated data entry and document processing',
        'Task scheduling and deadline management',
        'Cross-department process automation',
        'Real-time workflow monitoring and alerts'
      ],
      ctaText: 'Automate Workflows',
      onCtaClick: () => console.log('Workflow Automation CTA clicked')
    },
    {
      icon: '📊',
      title: 'CRM Solutions',
      category: 'crm',
      description: 'Enhance your customer relationship management with AI-powered insights, automated lead scoring, and intelligent follow-up systems that drive conversions.',
      features: [
        'Automated lead capture and qualification',
        'Predictive analytics for sales forecasting',
        'Smart contact management and segmentation',
        'Automated email campaigns and follow-ups',
        'Integration with popular CRM platforms'
      ],
      ctaText: 'Enhance CRM',
      onCtaClick: () => console.log('CRM Solutions CTA clicked')
    },
    {
      icon: '📢',
      title: 'Marketing Automation',
      category: 'marketing',
      description: 'Scale your marketing efforts with AI-driven campaigns, personalized content delivery, and automated customer journey mapping that increases engagement.',
      features: [
        'Personalized content recommendations',
        'Automated social media posting and scheduling',
        'A/B testing and campaign optimization',
        'Customer behavior tracking and analysis',
        'Multi-channel marketing orchestration'
      ],
      ctaText: 'Boost Marketing',
      onCtaClick: () => console.log('Marketing Automation CTA clicked')
    },
    {
      icon: '📈',
      title: 'Data Analytics',
      category: 'analytics',
      description: 'Transform raw data into actionable insights with advanced analytics, predictive modeling, and real-time dashboards that empower data-driven decisions.',
      features: [
        'Real-time data visualization and reporting',
        'Predictive analytics and trend forecasting',
        'Custom KPI tracking and alerts',
        'Automated report generation and distribution',
        'Integration with business intelligence tools'
      ],
      ctaText: 'Analyze Data',
      onCtaClick: () => console.log('Data Analytics CTA clicked')
    },
    {
      icon: '🔒',
      title: 'Cybersecurity AI',
      category: 'security',
      description: 'Protect your business with AI-powered threat detection, automated security monitoring, and intelligent incident response systems that safeguard your digital assets.',
      features: [
        'Real-time threat detection and prevention',
        'Automated vulnerability scanning and patching',
        'Behavioral anomaly detection for insider threats',
        'AI-powered incident response and forensics',
        'Compliance monitoring and reporting automation'
      ],
      ctaText: 'Secure Business',
      onCtaClick: () => console.log('Cybersecurity AI CTA clicked')
    },
    {
      icon: '💰',
      title: 'Financial Intelligence',
      category: 'finance',
      description: 'Optimize financial operations with AI-driven forecasting, automated accounting processes, and intelligent expense management that improves cash flow.',
      features: [
        'Automated invoice processing and payments',
        'AI-powered financial forecasting and budgeting',
        'Expense categorization and fraud detection',
        'Cash flow optimization and alerts',
        'Regulatory compliance and tax automation'
      ],
      ctaText: 'Optimize Finance',
      onCtaClick: () => console.log('Financial Intelligence CTA clicked')
    },
    {
      icon: '👥',
      title: 'HR Automation',
      category: 'hr',
      description: 'Revolutionize human resources with AI-powered recruitment, employee engagement tracking, and automated performance management systems.',
      features: [
        'AI-powered candidate screening and matching',
        'Automated onboarding and training workflows',
        'Employee sentiment analysis and engagement tracking',
        'Performance review automation and insights',
        'Predictive analytics for employee retention'
      ],
      ctaText: 'Transform HR',
      onCtaClick: () => console.log('HR Automation CTA clicked')
    },
    {
      icon: '📦',
      title: 'Supply Chain Intelligence',
      category: 'supply',
      description: 'Optimize supply chain operations with AI-driven demand forecasting, inventory management, and automated supplier relationship management.',
      features: [
        'Demand forecasting and inventory optimization',
        'Automated supplier performance monitoring',
        'Real-time shipment tracking and alerts',
        'Risk assessment and mitigation strategies',
        'Cost optimization and procurement automation'
      ],
      ctaText: 'Optimize Supply Chain',
      onCtaClick: () => console.log('Supply Chain Intelligence CTA clicked')
    },
    {
      icon: '🎯',
      title: 'Customer Experience AI',
      category: 'customer',
      description: 'Enhance customer experience with AI-powered personalization, predictive customer service, and automated satisfaction monitoring systems.',
      features: [
        'Personalized customer journey mapping',
        'Predictive customer service and support',
        'Automated satisfaction surveys and feedback analysis',
        'Churn prediction and retention strategies',
        'Omnichannel experience optimization'
      ],
      ctaText: 'Enhance CX',
      onCtaClick: () => console.log('Customer Experience AI CTA clicked')
    },
    {
      icon: '🏭',
      title: 'Manufacturing Intelligence',
      category: 'manufacturing',
      description: 'Transform manufacturing operations with AI-powered quality control, predictive maintenance, and automated production optimization systems.',
      features: [
        'Predictive maintenance and equipment monitoring',
        'AI-powered quality control and defect detection',
        'Production scheduling and resource optimization',
        'Real-time performance monitoring and alerts',
        'Energy consumption optimization and sustainability'
      ],
      ctaText: 'Optimize Manufacturing',
      onCtaClick: () => console.log('Manufacturing Intelligence CTA clicked')
    },
    {
      icon: '🌐',
      title: 'Digital Transformation',
      category: 'digital',
      description: 'Accelerate digital transformation with comprehensive AI integration, legacy system modernization, and cloud-native automation solutions.',
      features: [
        'Legacy system integration and modernization',
        'Cloud migration and optimization strategies',
        'API development and microservices architecture',
        'Digital workflow transformation and automation',
        'Change management and employee training programs'
      ],
      ctaText: 'Transform Digitally',
      onCtaClick: () => console.log('Digital Transformation CTA clicked')
    }
  ];

  const categories = [
    { key: 'all', label: 'All Solutions', icon: '🎯' },
    { key: 'ai', label: 'AI Solutions', icon: '🤖' },
    { key: 'automation', label: 'Automation', icon: '⚙️' },
    { key: 'crm', label: 'CRM', icon: '📊' },
    { key: 'marketing', label: 'Marketing', icon: '📢' },
    { key: 'analytics', label: 'Analytics', icon: '📈' },
    { key: 'security', label: 'Security', icon: '🔒' },
    { key: 'finance', label: 'Finance', icon: '💰' },
    { key: 'hr', label: 'HR', icon: '👥' },
    { key: 'supply', label: 'Supply Chain', icon: '📦' },
    { key: 'customer', label: 'Customer Experience', icon: '🎯' },
    { key: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
    { key: 'digital', label: 'Digital Transform', icon: '🌐' }
  ];

  const filteredSolutions = filter === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === filter);

  return (
    <section id="solutions-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header with Animation */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Member 3 Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Comprehensive AI-powered solutions designed to transform your business operations and drive growth.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  filter === category.key
                    ? 'bg-indigo-700 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 shadow'
                }`}
                aria-pressed={filter === category.key}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <SolutionsCarousel solutions={filteredSolutions} />

        {/* Desktop Grid */}
        <div className={`hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {filteredSolutions.map((solution, index) => (
            <div
              key={`${solution.title}-${filter}`} // Key includes filter for re-animation
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <SolutionCard
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                ctaText={solution.ctaText}
                onCtaClick={solution.onCtaClick}
                delay={index * 150} // Staggered animation
              />
            </div>
          ))}
        </div>

        {/* Results Counter */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-gray-500 text-sm">
            Showing {filteredSolutions.length} of {solutions.length} solutions
          </p>
        </div>

        {/* Call to Action Section */}
        <div className={`text-center mt-16 p-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Get started with our AI-powered solutions today and see immediate improvements in efficiency and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-200 shadow-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-indigo-700 transition-all duration-200">
              View Pricing
            </button>
          </div>
        </div>

      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default SolutionsSection;