import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

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

    const footer = document.getElementById('main-footer');
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'AI Chatbots', href: '/solutions#ai-chatbots' },
        { name: 'Workflow Automation', href: '/solutions#workflow' },
        { name: 'CRM Solutions', href: '/solutions#crm' },
        { name: 'Marketing Automation', href: '/solutions#marketing' },
        { name: 'Data Analytics', href: '/solutions#analytics' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Finance', href: '/industries/finance' },
        { name: 'Retail', href: '/industries/retail' },
        { name: 'Technology', href: '/industries/technology' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Partners', href: '/partners' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Contact Support', href: '/support' },
        { name: 'System Status', href: '/status' }
      ]
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: 'https://linkedin.com/company/ai-automation'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      href: 'https://twitter.com/ai_automation'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: 'https://github.com/ai-automation'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: 'https://youtube.com/@ai-automation'
    }
  ];

  return (
    <footer id="main-footer" className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className={`border-b border-white/10 py-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Stay Ahead with AI Innovation
              </h3>
              <p className="text-indigo-100 mb-8 text-lg max-w-2xl mx-auto">
                Get the latest insights, case studies, and AI automation trends delivered to your inbox.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubscribed ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className={`py-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                    AI Automation
                  </h3>
                  <p className="text-indigo-200 mb-6 leading-relaxed">
                    Transforming businesses with intelligent automation solutions that drive growth and efficiency.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-lg flex items-center justify-center text-indigo-200 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                        aria-label={`Follow us on ${social.name}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              {footerSections.map((section, sectionIndex) => (
                <div key={section.title} className="lg:col-span-1">
                  <h4 className="text-white font-semibold mb-6 text-lg relative">
                    {section.title}
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-indigo-200 hover:text-white transition-all duration-300 flex items-center group"
                          style={{ animationDelay: `${(sectionIndex * 100) + (linkIndex * 50)}ms` }}
                        >
                          <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 mr-0 group-hover:mr-2"></span>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t border-white/10 py-8 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <div className="text-indigo-200 text-sm">
                © {currentYear} AI Automation. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap gap-6 text-sm">
                {[
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Cookie Policy', href: '/cookies' },
                  { name: 'Security', href: '/security' }
                ].map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-indigo-200 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>

              {/* Back to Top Button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
                aria-label="Back to top"
              >
                <svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;