export const metadata = {
  title: 'Work Experience',
  description: 'Saurav Kumar\'s professional experience at SAP Labs India as Associate Developer and SDE Intern. Building cloud-native E2E test orchestration platforms, AI/ML solutions, and enterprise applications.',
  openGraph: {
    title: 'Work Experience | Saurav Kumar',
    description: 'Professional experience at SAP Labs India building cloud-native applications and AI/ML solutions',
    url: 'https://www.sauravx.com/experience',
  },
};

export default function Experience() {
  const experienceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WorkExperience",
      "name": "Associate Developer",
      "url": "https://www.sap.com",
      "provider": {
        "@type": "Organization",
        "name": "SAP Labs India",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressCountry": "IN"
        }
      },
      "startDate": "2025-07",
      "description": "Building cloud-native E2E test orchestration platform on SAP BTP"
    },
    {
      "@context": "https://schema.org",
      "@type": "WorkExperience",
      "name": "SDE Intern",
      "url": "https://www.sap.com",
      "provider": {
        "@type": "Organization",
        "name": "SAP Labs India",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressCountry": "IN"
        }
      },
      "startDate": "2024-05",
      "endDate": "2024-07",
      "description": "Developed deepfake detection pipeline using EfficientNet-B4"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white-900 mb-4">Work Experience</h1>
          <p className="text-xl text-white-600">
            Professional journey building enterprise-grade applications and AI/ML solutions
          </p>
        </header>

        <section className="space-y-12">
          <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Associate Developer</h2>
                <p className="text-lg text-blue-600 font-semibold">SAP Labs India, Bengaluru</p>
              </div>
              <div className="text-gray-600 font-medium mt-2 md:mt-0">
                July 2025 – Present
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud-Native E2E Test Orchestration Platform</h3>
                <p className="text-gray-700 mb-3">
                  Designed and built a cloud-native E2E test orchestration platform using SAP CAP, Spring Boot, and React, deployed as a multi-tenant SaaS application on SAP BTP.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Designed and built a cloud-native E2E test orchestration platform using <strong>SAP CAP, Spring Boot, and React</strong>, executing <strong>600+ automated tests</strong> across <strong>5 SAP HANA clusters</strong>; deployed as a multi-tenant SaaS application on <strong>SAP BTP</strong> with secure authentication and audit logging.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Implemented <strong>application-level locking and pooled DB isolation</strong> to prevent shared-state conflicts across <strong>200+ concurrent test executions</strong>; reduced false failures by <strong>30%</strong> and cycle time by <strong>50%</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Built a <strong>dynamic dependency resolution engine</strong> with real-time health validation and batch execution, reliably processing <strong>600+ interdependent test cases</strong> per request and supporting hundreds of test plan executions across <strong>5 teams</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Integrated an <strong>asynchronous GenAI-based failure classification service</strong> achieving <strong>85% automated root-cause tagging accuracy</strong> on historical failure dataset, reducing manual triage effort by <strong>60%</strong>.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">SAP CAP</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Java (Spring Boot)</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">SAP HANA</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">OData v4</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">XSUAA</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Cloud Foundry</span>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Impact & Results</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Executed 600+ automated tests across 5 SAP HANA clusters</li>
                  <li>✓ Reduced false failures by 30% and cycle time by 50%</li>
                  <li>✓ Achieved 85% accuracy in GenAI-driven failure classification</li>
                  <li>✓ Reduced manual triage effort by 60%</li>
                  <li>✓ Supported 200+ concurrent test executions</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md p-8 border-l-4 border-green-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">SDE Intern</h2>
                <p className="text-lg text-green-600 font-semibold">SAP Labs India, Bengaluru</p>
              </div>
              <div className="text-gray-600 font-medium mt-2 md:mt-0">
                May 2024 – July 2024
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Deepfake Detection Pipeline</h3>
                <p className="text-gray-700 mb-3">
                  Developed a deepfake detection pipeline using EfficientNet-B4 with production-ready inference performance.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Developed a deepfake detection pipeline using <strong>EfficientNet-B4</strong> trained on <strong>140k+ labeled samples</strong>, achieving <strong>98% validation accuracy</strong> and production-ready inference performance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Built a <strong>Flask-based inference service</strong> supporting <strong>300+ concurrent requests</strong> with real-time image and video processing via <strong>OpenCV and WebRTC</strong>; optimized <strong>1080p stream inference to 18 FPS</strong> through batching and preprocessing improvements.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Key Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">TensorFlow</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Flask</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">OpenCV</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">WebRTC</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Impact & Results</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Achieved 98% validation accuracy in deepfake detection</li>
                  <li>✓ Trained models on 140k+ diverse labeled samples</li>
                  <li>✓ Processed 1080p video feeds at 18 FPS in real-time</li>
                  <li>✓ Handled 300+ concurrent media analysis requests</li>
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Enterprise-Scale Development</h3>
                <p className="text-gray-700 text-sm">Built production systems serving hundreds of concurrent users with high reliability</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">AI/ML Integration</h3>
                <p className="text-gray-700 text-sm">Implemented GenAI and CNN models achieving 85-98% accuracy in production environments</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Cloud Architecture</h3>
                <p className="text-gray-700 text-sm">Designed and deployed multi-tenant cloud-native frameworks on SAP BTP with Cloud Foundry</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Full Stack Excellence</h3>
                <p className="text-gray-700 text-sm">End-to-end development from React frontends to CAP/Spring Boot backends with OData services</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}