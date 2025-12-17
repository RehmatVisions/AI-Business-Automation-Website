import React from "react";
import AI from "./assets/AI.png";
export default function AIAutomationLanding() {
  return (
    <main className="font-sans antialiased overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20 lg:py-28 flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              AI-Powered <span className="text-indigo-200">Business Automation</span>
            </h1>
            <p className="mt-5 text-lg text-indigo-100 max-w-xl mx-auto lg:mx-0">
              Automate workflows, boost productivity, and scale faster with intelligent AI-driven solutions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-white text-indigo-700 font-semibold px-7 py-3 rounded-xl shadow hover:scale-105 transition">
                Get Started
              </button>
              <button className="border border-white/70 text-white px-7 py-3 rounded-xl hover:bg-white/10 transition">
                Book a Demo
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={AI}
              alt="AI Automation"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
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
              },
              {
                icon: "📈",
                title: "Real-Time Analytics",
                desc: "Monitor performance and predict outcomes instantly.",
              },
              {
                icon: "🔗",
                title: "Seamless Integrations",
                desc: "Connect CRM, ERP, and cloud tools effortlessly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
              >
                <div className="text-5xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>
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
              className="bg-indigo-600/40 backdrop-blur rounded-2xl p-8 hover:scale-105 transition"
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
