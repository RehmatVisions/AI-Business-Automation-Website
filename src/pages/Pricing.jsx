import { useState } from 'react';
import { useAlert } from '../contexts/AlertContext';
import { validateContactForm, getValidationClasses } from '../utils/formValidation';

const Pricing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { formSuccess, formError, loading, removeAlert, error } = useAlert();

  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI automation",
      popular: false,
      features: [
        "Up to 5 AI workflows",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations",
        "1 user account",
        "Community access"
      ]
    },
    {
      id: 2,
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies ready to scale their automation",
      popular: true,
      features: [
        "Up to 25 AI workflows",
        "Advanced analytics & reporting",
        "Priority support",
        "Premium integrations",
        "5 user accounts",
        "Custom training sessions",
        "API access",
        "Advanced security features"
      ]
    },
    {
      id: 3,
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with complex needs",
      popular: false,   
   features: [
        "Unlimited AI workflows",
        "Enterprise analytics suite",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited users",
        "On-site training",
        "Full API access",
        "Enterprise security",
        "Custom SLA",
        "Dedicated account manager"
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const validation = validateContactForm(formData);
    setErrors(validation.errors);
    
    if (!validation.isValid) {
      const errorCount = Object.keys(validation.errors).length;
      error(
        'Form Validation Failed', 
        `Please fix ${errorCount} error${errorCount > 1 ? 's' : ''} before submitting.`
      );
    }
    
    return validation.isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      formError('validation');
      return;
    }

    setIsSubmitting(true);
    
    // Show loading alert
    const loadingAlertId = loading(
      'Sending Message...', 
      'Please wait while we process your request.'
    );
   
    // Simulate form submission
    setTimeout(() => {
      // Remove loading alert
      removeAlert(loadingAlertId);
      
      // Show success alert
      formSuccess('contact');
      
      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pricing & Contact
            </h1>
            <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto">
              Choose the perfect CodeCelix plan for your business or get in touch for a custom demo
            </p>
          </div>
        </div>
      </section> 
     {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start automating today with plans designed to grow with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-indigo-600 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>        
          <button
                    onClick={() => {
                      if (plan.name === 'Enterprise') {
                        // Scroll to contact form and show info alert
                        const contactForm = document.querySelector('form');
                        if (contactForm) {
                          contactForm.scrollIntoView({ behavior: 'smooth' });
                          formSuccess('demo');
                        }
                      } else {
                        // Show plan selection alert
                        formSuccess('pricing');
                      }
                    }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact/Demo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Schedule a personalized demo or get in touch with our team to learn how AI automation can transform your business.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Response</h3>
                    <p className="text-gray-600">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Solutions</h3>
                    <p className="text-gray-600">Tailored AI automation for your specific needs</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Support</h3>
                    <p className="text-gray-600">Dedicated team to ensure your success</p>
                  </div>
                </div>
              </div>
            </div>       
     {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Demo</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={getValidationClasses('name', formData.name, errors)}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={getValidationClasses('email', formData.email, errors)}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={getValidationClasses('company', formData.company, errors)}
                    placeholder="Enter your company name"
                  />
                  {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                </div> 
               <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${getValidationClasses('message', formData.message, errors)} resize-none`}
                    placeholder="Tell us about your automation needs..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Request Demo'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;