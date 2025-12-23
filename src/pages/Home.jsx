import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Lazy load the OptimizedImage component for better performance
const OptimizedImage = lazy(() => import("../components/OptimizedImage"));
import AI from "../assets/AI.png";

export default function AIAutomationLanding() {
  return (
    <main className="font-sans antialiased overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20 lg:py-28 flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-indigo-200">CodeCelix</span> AI-Powered Business Automation
            </h1>
            <p className="mt-5 text-lg text-indigo-100 max-w-xl mx-auto lg:mx-0">
              Automate workflows, boost productivity, and scale faster with intelligent AI-driven solutions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/pricing" 
                className="bg-white text-indigo-700 font-semibold px-7 py-3 rounded-xl shadow hover:scale-105 transition text-center"
              >
                Get Started
              </Link>
              <button 
                onClick={() => window.location.href = '/pricing'}
                className="border border-white/70 text-white px-7 py-3 rounded-xl hover:bg-white/10 transition"
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 animate-fade-in-delay">
            <Suspense fallback={<div className="w-full h-64 bg-gray-200 rounded-2xl animate-pulse"></div>}>
              <OptimizedImage
                src={AI}
                alt="AI Automation Dashboard"
                className="w-full rounded-2xl shadow-2xl"
              />
            </Suspense>
          </div>

        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 animate-fade-in">
            Intelligent Automation Solutions
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Designed to streamline operations, eliminate manual work, and deliver measurable growth.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "AI Workflows",
                desc: "Automate repetitive tasks with smart AI-driven logic.",
                link: "/solutions"
              },
              {
                icon: "📈",
                title: "Real-Time Analytics",
                desc: "Monitor performance and predict outcomes instantly.",
                link: "/solutions"
              },
              {
                icon: "🔗",
                title: "Seamless Integrations",
                desc: "Connect CRM, ERP, and cloud tools effortlessly.",
                link: "/solutions"
              },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AI AUTOMATION TECHNIQUES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Advanced AI Automation Techniques
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              CodeCelix leverages cutting-edge artificial intelligence and machine learning technologies to deliver powerful automation solutions that transform business operations across multiple domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Machine Learning Algorithms",
                description: "Supervised and unsupervised learning models for predictive analytics, classification, and pattern recognition.",
                icon: "🧠",
                techniques: ["Random Forest", "Neural Networks", "SVM", "Deep Learning"]
              },
              {
                title: "Natural Language Processing",
                description: "Advanced NLP for text analysis, sentiment detection, chatbots, and automated content generation.",
                icon: "💬",
                techniques: ["BERT", "GPT Models", "Named Entity Recognition", "Text Classification"]
              },
              {
                title: "Computer Vision",
                description: "Image and video analysis for quality control, object detection, and automated visual inspection.",
                icon: "👁️",
                techniques: ["CNN", "Object Detection", "Image Segmentation", "OCR"]
              },
              {
                title: "Robotic Process Automation",
                description: "Software robots that automate repetitive tasks, data entry, and workflow processes.",
                icon: "🤖",
                techniques: ["UI Automation", "API Integration", "Screen Scraping", "Workflow Orchestration"]
              },
              {
                title: "Predictive Analytics",
                description: "Forecasting models that predict trends, customer behavior, and business outcomes.",
                icon: "📊",
                techniques: ["Time Series Analysis", "Regression Models", "Ensemble Methods", "Statistical Modeling"]
              },
              {
                title: "Intelligent Decision Systems",
                description: "AI-powered decision engines that optimize business processes and resource allocation.",
                icon: "⚡",
                techniques: ["Expert Systems", "Fuzzy Logic", "Genetic Algorithms", "Optimization Models"]
              }
            ].map((technique, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{technique.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {technique.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {technique.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700 text-sm">Key Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {technique.techniques.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AI APPLICATION FIELDS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-slide-up">
              AI Automation Application Fields
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
              Our AI solutions span across diverse industries and business functions, delivering measurable results and competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                category: "Business Process Automation",
                icon: "⚙️",
                applications: [
                  {
                    name: "Invoice Processing",
                    description: "Automated extraction and processing of invoice data using OCR and ML"
                  },
                  {
                    name: "Customer Onboarding",
                    description: "Streamlined KYC processes with document verification and risk assessment"
                  },
                  {
                    name: "Supply Chain Optimization",
                    description: "Demand forecasting and inventory management using predictive models"
                  },
                  {
                    name: "HR Recruitment",
                    description: "Resume screening and candidate matching using NLP algorithms"
                  }
                ]
              },
              {
                category: "Data Analytics & Intelligence",
                icon: "📈",
                applications: [
                  {
                    name: "Customer Behavior Analysis",
                    description: "Real-time analysis of user interactions and purchase patterns"
                  },
                  {
                    name: "Fraud Detection",
                    description: "Anomaly detection systems for financial transaction monitoring"
                  },
                  {
                    name: "Market Sentiment Analysis",
                    description: "Social media and news sentiment tracking for market insights"
                  },
                  {
                    name: "Performance Monitoring",
                    description: "Automated KPI tracking and alert systems for business metrics"
                  }
                ]
              },
              {
                category: "Customer Experience Enhancement",
                icon: "🎯",
                applications: [
                  {
                    name: "Intelligent Chatbots",
                    description: "Conversational AI for 24/7 customer support and engagement"
                  },
                  {
                    name: "Personalization Engines",
                    description: "Dynamic content and product recommendations based on user behavior"
                  },
                  {
                    name: "Voice Assistants",
                    description: "Speech recognition and natural language understanding systems"
                  },
                  {
                    name: "Predictive Support",
                    description: "Proactive issue identification and resolution recommendations"
                  }
                ]
              },
              {
                category: "Quality Control & Monitoring",
                icon: "🔍",
                applications: [
                  {
                    name: "Visual Inspection",
                    description: "Computer vision systems for defect detection in manufacturing"
                  },
                  {
                    name: "Predictive Maintenance",
                    description: "IoT sensor data analysis for equipment failure prediction"
                  },
                  {
                    name: "Content Moderation",
                    description: "Automated filtering of inappropriate content using AI models"
                  },
                  {
                    name: "Compliance Monitoring",
                    description: "Regulatory compliance checking and reporting automation"
                  }
                ]
              }
            ].map((field, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{field.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {field.category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {field.applications.map((app, appIndex) => (
                    <div
                      key={appIndex}
                      className="border-l-4 border-indigo-500 pl-4 py-2"
                    >
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {app.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {app.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY STACK ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our AI Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We utilize industry-leading frameworks, libraries, and platforms to build robust and scalable AI automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                category: "Machine Learning",
                technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM"],
                color: "bg-blue-100 text-blue-800"
              },
              {
                category: "Data Processing",
                technologies: ["Apache Spark", "Pandas", "NumPy", "Apache Kafka", "Elasticsearch", "MongoDB"],
                color: "bg-green-100 text-green-800"
              },
              {
                category: "Cloud Platforms",
                technologies: ["AWS SageMaker", "Google Cloud AI", "Azure ML", "Docker", "Kubernetes", "MLflow"],
                color: "bg-purple-100 text-purple-800"
              },
              {
                category: "Development Tools",
                technologies: ["Python", "R", "Java", "Node.js", "React", "FastAPI"],
                color: "bg-orange-100 text-orange-800"
              }
            ].map((stack, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {stack.category}
                </h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 ${stack.color}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST STATS ================= */}
      <section className="bg-indigo-700 py-20 text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {[
            { value: "1,500+", label: "Businesses Automated" },
            { value: "500K+", label: "Daily Tasks Processed" },
            { value: "99.2%", label: "Client Satisfaction" },
            { value: "24/7", label: "AI Monitoring" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-indigo-600/40 backdrop-blur rounded-2xl p-8 hover:scale-105 transition cursor-pointer"
              onClick={() => window.location.href = '/pricing'}
            >
              <h3 className="text-4xl md:text-5xl font-bold">
                {stat.value}
              </h3>
              <p className="mt-3 text-indigo-100">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}