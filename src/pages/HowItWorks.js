// src/pages/HowItWorks.js
import { FaDatabase, FaCogs, FaChartLine, FaSyncAlt } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-8">
          How It Works
        </h1>

        {/* Timeline / Steps */}
        <div className="flex flex-col space-y-12">
          {/* Step 1 */}
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0 text-blue-500 text-4xl">
              <FaDatabase />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Step 1: Connect Data Sources</h2>
              <p className="text-gray-700">
                Securely connect your business data sources to allow AI to access the information it needs.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0 text-green-500 text-4xl">
              <FaCogs />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Step 2: Automate Workflows</h2>
              <p className="text-gray-700">
                Set automation rules and triggers to streamline repetitive processes and reduce manual effort.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0 text-yellow-500 text-4xl">
              <FaChartLine />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Step 3: Monitor Insights</h2>
              <p className="text-gray-700">
                Analyze AI-generated insights through interactive dashboards to make informed decisions.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0 text-purple-500 text-4xl">
              <FaSyncAlt />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Step 4: Refine & Optimize</h2>
              <p className="text-gray-700">
                Continuously improve workflows and automation rules based on performance metrics and AI feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
