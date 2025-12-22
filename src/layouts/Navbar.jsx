import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ 
  logo = "AI Automation", 
  navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ],
  ctaButton = { text: "Get Started", href: "#get-started" }
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeSidebar = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => () => document.body.style.overflow = 'unset', []);

  // Reusable components
  const ArrowIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  const NavLink = ({ link, className, onClick, children }) => {
    const baseClass = `relative px-5 py-3 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-xl overflow-hidden ${className}`;
    const content = (
      <>
        <span className="relative z-10">{link.name}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-8 rounded-full" />
        {children}
      </>
    );

    return link.path ? (
      <Link to={link.path} className={baseClass} onClick={onClick}>{content}</Link>
    ) : (
      <a href={link.href} className={baseClass} onClick={onClick}>{content}</a>
    );
  };

  const MobileNavLink = ({ link, index, onClick }) => {
    const baseClass = `flex items-center px-4 py-4 text-gray-700 font-semibold rounded-xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-50 group-hover:to-purple-50 group-hover:text-indigo-700 group-hover:translate-x-2 transform ${isOpen ? `animate-slide-in-${index}` : ''}`;
    const content = (
      <>
        <span className="flex-1">{link.name}</span>
        <ArrowIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
      </>
    );

    return (
      <div className="group" style={{ animationDelay: `${index * 100}ms` }}>
        {link.path ? (
          <Link to={link.path} className={baseClass} onClick={onClick}>{content}</Link>
        ) : (
          <a href={link.href} className={baseClass} onClick={onClick}>{content}</a>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed w-full top-0 z-50 bg-white transition-all duration-500 ease-out ${
        isScrolled ? 'shadow-2xl shadow-black/10 border-b border-gray-200/50' : 'shadow-lg shadow-black/5 border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 group">
              <Link to="/" className="relative text-2xl lg:text-3xl font-black tracking-tight text-gray-900 hover:text-indigo-600 transition-all duration-300" onClick={closeSidebar}>
                <span className="relative z-10 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                  {logo}
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  <NavLink link={link} />
                </div>
              ))}
              
              {/* CTA Button */}
              {ctaButton && (
                <div className="ml-8">
                  <a href={ctaButton.href} className="group relative inline-flex items-center px-8 py-3 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                    <span className="relative z-10">{ctaButton.text}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    <ArrowIcon className="ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={toggleSidebar} className="relative p-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-label="Toggle mobile sidebar">
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  {['-translate-y-1.5', '', 'translate-y-1.5'].map((pos, i) => (
                    <span key={i} className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                      isOpen 
                        ? i === 0 ? 'rotate-45 translate-y-1.5' : i === 1 ? 'opacity-0 scale-0' : '-rotate-45 -translate-y-1.5'
                        : pos
                    }`} />
                  ))}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={closeSidebar} />
        
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-all duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link to="/" className="text-xl font-black text-gray-900 hover:text-indigo-600 transition-colors duration-300" onClick={closeSidebar}>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{logo}</span>
            </Link>
            <button onClick={closeSidebar} className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="p-6 space-y-2">
            {navLinks.map((link, index) => (
              <MobileNavLink key={index} link={link} index={index} onClick={closeSidebar} />
            ))}
          </div>

          {/* CTA Button */}
          {ctaButton && (
            <div className="absolute bottom-6 left-6 right-6">
              <a href={ctaButton.href} onClick={closeSidebar} className={`flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/50 hover:scale-105 group ${isOpen ? 'animate-slide-up' : ''}`} style={{ animationDelay: '400ms' }}>
                <span>{ctaButton.text}</span>
                <ArrowIcon className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-in-0, slide-in-1, slide-in-2, slide-in-3 {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-0, .animate-slide-in-1, .animate-slide-in-2, .animate-slide-in-3 { animation: slide-in-0 0.5s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
      `}</style>
    </>
  );
};

export default Navbar;