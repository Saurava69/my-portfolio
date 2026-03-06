const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'Home',
  description: 'Saurav Kumar - Associate Developer at SAP Labs India. Full Stack Developer specializing in Cloud Computing, Microservices, React, Node.js, Java, and Python. Building scalable cloud-native applications on SAP BTP.',
  openGraph: {
    title: 'Saurav Kumar - Software Engineer | Full Stack Developer',
    description: 'Associate Developer at SAP Labs India specializing in Full Stack Development, Cloud Computing, and Microservices',
    url: 'https://www.sauravx.com',
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Saurav Kumar - Software Engineer Portfolio",
    "url": "https://www.sauravx.com",
    "description": "Professional portfolio of Saurav Kumar, Associate Developer at SAP Labs India",
    "author": {
      "@type": "Person",
      "name": "Saurav Kumar"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <section className="bg-gradient-to-br from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Saurav Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Associate Developer | Full Stack Engineer | Cloud & Microservices
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Building scalable cloud-native applications at SAP Labs India. Expertise in Java, Spring Boot, Node.js, React, SAP CAP, and enterprise systems on Cloud platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`${basePath}/Resume.pdf`}
                download
                className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </a>
              <a
                href="https://github.com/saurava69/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sauravkumar25"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="/contact"
                className="bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Summary</h2>
          <article className="prose prose-lg max-w-4xl mx-auto text-gray-300">
            <p>
              Associate Developer at SAP Labs India with strong expertise in full stack development, cloud computing, and microservices architecture.
            </p>
            <p>
              Specialized in architecting cloud-native solutions using Java, Spring Boot, Node.js, and React on SAP BTP. Experience in developing E2E test orchestration platforms, AI-powered automation frameworks, and real-time communication systems. Strong foundation in data structures, algorithms, and system design from National Institute of Technology, Warangal.
            </p>
            <p>
              Passionate about leveraging cutting-edge technologies including GenAI, microservices architecture, Docker, Kubernetes, and AWS to solve complex business problems and deliver measurable impact.
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Full Stack Development</h3>
              <p className="text-gray-400">
                Building end-to-end web applications with React, Node.js, Spring Boot, and modern frameworks. Expertise in RESTful APIs, OData services, and real-time communication with Socket.io.
              </p>
            </article>
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Cloud & Enterprise Systems</h3>
              <p className="text-gray-400">
                Architecting scalable solutions on SAP BTP, AWS, Docker, and Kubernetes. Implementing SAP CAP framework with OData services for enterprise applications.
              </p>
            </article>
            <article className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">AI/ML & Automation</h3>
              <p className="text-gray-400">
                Developing CNN models with TensorFlow, implementing GenAI-based classification systems, and building automated testing frameworks with 85% accuracy.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <article className="border-l-4 border-blue-500 pl-6 bg-gray-800 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-white mb-2">E2E Test Orchestration Platform</h3>
              <p className="text-gray-400">
                Cloud-native platform executing 600+ automated tests on 5 SAP HANA clusters with GenAI-based failure analysis achieving 85% accuracy. Reduced false failures by 30% and cycle time by 50%.
              </p>
            </article>
            <article className="border-l-4 border-green-500 pl-6 bg-gray-800 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Deepfake Detection Pipeline</h3>
              <p className="text-gray-400">
                AI models detecting deepfakes with 98% validation accuracy using EfficientNet-B4, processing 1080p feeds at 18 FPS with 300+ concurrent requests.
              </p>
            </article>
            <article className="border-l-4 border-purple-500 pl-6 bg-gray-800 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Saurity Security Plugin</h3>
              <p className="text-gray-400">
                Enterprise WordPress security plugin with WAF, rate limiting, honeypot, and threat intelligence integration (Cloudflare, AbuseIPDB, Spamhaus). Lighthouse score 98+.
              </p>
            </article>
            <article className="border-l-4 border-orange-500 pl-6 bg-gray-800 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Academic Excellence</h3>
              <p className="text-gray-400">
                99.32 percentile in JEE Mains among 10+ lakh students, NTSE qualified District Topper, graduated from NIT Warangal with 7.69 CGPA. 500+ DSA problems solved.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Open to opportunities in full stack development, cloud engineering, and microservices roles. Let&apos;s build something impactful together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${basePath}/Resume.pdf`}
              download
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download Resume
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/experience"
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>
      </section>
    </>
  );
}