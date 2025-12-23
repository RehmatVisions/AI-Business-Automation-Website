import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const [activeTab, setActiveTab] = useState('industries');
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('industries-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      id: 1,
      name: "Healthcare",
      description: "AI-powered solutions for patient care, diagnostics, and operational efficiency in healthcare systems.",
      icon: "🏥",
      features: ["Patient Monitoring", "Diagnostic AI", "Workflow Automation"]
    },
    {
      id: 2,
      name: "Finance",
      description: "Intelligent automation for fraud detection, risk assessment, and customer service in financial services.",
      icon: "💰",
      features: ["Fraud Detection", "Risk Analysis", "Customer Support"]
    },
    {
      id: 3,
      name: "Manufacturing",
      description: "Smart manufacturing solutions with predictive maintenance and quality control automation.",
      icon: "🏭",
      features: ["Predictive Maintenance", "Quality Control", "Supply Chain"]
    },
    {
      id: 4,
      name: "Retail",
      description: "Enhance customer experience with personalized recommendations and inventory management.",
      icon: "🛍️",
      features: ["Personalization", "Inventory Management", "Customer Analytics"]
    },
    {
      id: 5,
      name: "Education",
      description: "Transform learning with adaptive AI tutoring and automated administrative processes.",
      icon: "🎓",
      features: ["Adaptive Learning", "Student Analytics", "Admin Automation"]
    },
    {
      id: 6,
      name: "Transportation",
      description: "Optimize logistics and fleet management with AI-driven route optimization and safety systems.",
      icon: "🚛",
      features: ["Route Optimization", "Fleet Management", "Safety Systems"]
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Healthcare System Reduces Patient Wait Times by 40%",
      description: "Major hospital network implements AI scheduling system to optimize patient flow and resource allocation.",
      client: "MedCenter Health",
      logo: "🏥",
      featured: true,
      results: ["40% reduction in wait times", "25% increase in patient satisfaction", "$2M annual savings"]
    },
    {
      id: 2,
      title: "Bank Prevents $50M in Fraud with AI Detection",
      description: "Leading financial institution deploys machine learning models for real-time fraud detection and prevention.",
      client: "SecureBank Corp",
      logo: "🏦",
      featured: true,
      results: ["99.8% fraud detection accuracy", "$50M prevented losses", "Real-time processing"]
    },
    {
      id: 3,
      title: "Manufacturing Plant Achieves 99.5% Uptime",
      description: "Automotive manufacturer implements predictive maintenance system to minimize equipment downtime.",
      client: "AutoTech Industries",
      logo: "🔧",
      featured: false,
      results: ["99.5% equipment uptime", "60% reduction in maintenance costs", "Zero unplanned outages"]
    },
    {
      id: 4,
      title: "Retailer Increases Sales by 35% with AI Recommendations",
      description: "E-commerce platform integrates personalized recommendation engine to boost customer engagement.",
      client: "ShopSmart Online",
      logo: "🛒",
      featured: false,
      results: ["35% increase in sales", "50% higher engagement", "20% improved retention"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industries & Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto">
              Discover how CodeCelix AI automation transforms businesses across industries with real-world success stories
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('industries')}
                className={`py-4 px-6 text-lg font-semibold transition-all duration-300 border-b-2 ${
                  activeTab === 'industries'
                    ? 'text-indigo-600 border-indigo-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                Industries
              </button>
              <button
                onClick={() => setActiveTab('case-studies')}
                className={`py-4 px-6 text-lg font-semibold transition-all duration-300 border-b-2 ${
                  activeTab === 'case-studies'
                    ? 'text-indigo-600 border-indigo-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      {activeTab === 'industries' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI automation solutions are tailored for diverse industries, delivering measurable results and competitive advantages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={industry.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/pricing"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {activeTab === 'case-studies' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients who transformed their operations with our AI automation solutions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 border ${
                    study.featured ? 'border-indigo-200 ring-2 ring-indigo-100' : 'border-gray-100'
                  }`}
                >
                  {study.featured && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
                      ⭐ Featured Case Study
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{study.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-indigo-600 font-semibold">{study.client}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/pricing"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-center block"
                  >
                    View Case Study
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Industries;