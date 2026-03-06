export const metadata = {
  title: 'Projects',
  description: 'Saurav Kumar\'s personal projects including Saurity WordPress Security Plugin and ChatWave real-time chat platform. Full stack development showcasing security, scalability, and modern web technologies.',
  alternates: {
    canonical: 'https://www.sauravx.com/projects',
  },
  openGraph: {
    title: 'Projects | Saurav Kumar',
    description: 'Personal projects showcasing full stack development, security systems, and real-time applications',
    url: 'https://www.sauravx.com/projects',
  },
};

export default function Projects() {
  const projectSchema = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Saurity - WordPress Security Plugin",
      "description": "Enterprise-grade WordPress security plugin implementing multi-layer protection with external threat intelligence integration",
      "author": {
        "@type": "Organization",
        "name": "Saurity"
      },
      "url": "https://github.com/saurity/saurity",
      "programmingLanguage": ["PHP", "JavaScript", "Next.js"],
      "keywords": ["wordpress", "security", "WAF", "threat intelligence", "plugin"]
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Saurity - WordPress Security Plugin",
      "description": "Enterprise-grade WordPress security plugin implementing multi-layer protection with external threat intelligence integration",
      "author": {
        "@type": "Organization",
        "name": "Saurity"
      },
      "url": "https://www.saurity.com",
      "programmingLanguage": ["PHP", "JavaScript", "Next.js"],
      "keywords": ["wordpress", "security", "WAF", "threat intelligence", "plugin"]
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "ChatWave",
      "description": "Real-time chat system using Node.js, Socket.io, and React supporting 500+ concurrent users",
      "author": {
        "@type": "Person",
        "name": "Saurav Kumar"
      },
      "url": "https://github.com/Saurava69/realtime-chat-app",
      "programmingLanguage": ["JavaScript", "Node.js", "React"],
      "keywords": ["real-time chat", "websockets", "socket.io", "full stack", "react", "node.js"]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white-900 mb-4">Personal Projects</h1>
          <p className="text-xl text-white-600">
            Building scalable full stack applications with modern technologies
          </p>
        </header>

        <section className="space-y-12">
          {/* Saurity - WordPress Security Plugin */}
          <article className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Saurity</h2>
                <p className="text-lg text-green-600 font-semibold">WordPress Security Plugin</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <a
                  href="https://github.com/saurity/saurity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                >
                  View on GitHub
                </a>
                <a
                  href="https://www.saurity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm"
                >
                  Visit Website
                </a>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Enterprise-grade WordPress security plugin implementing multi-layer protection with external threat intelligence integration. Features include WAF, rate limiting, honeypot systems, and GDPR-compliant logging.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features & Technical Implementation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">•</span>
                    <div>
                      <strong>Multi-Layer Security Protection:</strong> Built an enterprise-grade WordPress security plugin implementing <strong>WAF, rate limiting, and honeypot</strong> with external threat intelligence integration (<strong>Cloudflare API, AbuseIPDB, Spamhaus</strong>); significantly reduced brute-force and malicious traffic while maintaining minimal request latency overhead.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">•</span>
                    <div>
                      <strong>Admin Recovery & Compliance:</strong> Designed a resilient admin recovery system (<strong>kill switch, bypass URL, manual override</strong>) with <strong>GDPR-compliant logging</strong> and adaptive tarpitting.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">•</span>
                    <div>
                      <strong>Marketing Website:</strong> Developed an <strong>SEO-optimized Next.js-based marketing site</strong> with custom CMS and admin dashboard (<strong>Lighthouse score 98+</strong>).
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">S</span>
                    Security Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">WAF</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Rate Limiting</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Honeypot</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Tarpitting</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Kill Switch</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">T</span>
                    Threat Intelligence
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Cloudflare API</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">AbuseIPDB</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Spamhaus</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">B</span>
                    Backend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">PHP</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">WordPress</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">F</span>
                    Frontend & Marketing
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Custom CMS</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">SEO Optimized</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-green-600 text-white rounded-lg px-4 py-3 font-bold text-2xl mr-4">98+</div>
                    <div>
                      <p className="font-semibold text-gray-900">Lighthouse Score</p>
                      <p className="text-sm text-gray-600">Marketing site performance</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-600 text-white rounded-lg px-4 py-3 font-bold text-2xl mr-4">GDPR</div>
                    <div>
                      <p className="font-semibold text-gray-900">Compliant Logging</p>
                      <p className="text-sm text-gray-600">Privacy-focused design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ChatWave */}
          <article className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-purple-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">ChatWave</h2>
                <p className="text-lg text-purple-600 font-semibold">Real-Time Chat Platform</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <a
                  href="https://github.com/Saurava69/realtime-chat-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                >
                  View on GitHub
                </a>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Production-ready real-time chat platform built with Node.js, Socket.io, and React. Designed with horizontally scalable, event-driven architecture using Redis pub/sub for high concurrent user loads.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features & Technical Implementation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 font-bold">•</span>
                    <div>
                      <strong>High-Performance Real-Time System:</strong> Built a real-time chat system using <strong>Node.js, Socket.io, and React</strong>, supporting <strong>500+ concurrent users</strong> with <strong>sub-200ms message latency</strong> under load; designed a <strong>horizontally scalable, event-driven architecture</strong> using <strong>Redis pub/sub</strong>.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3 font-bold">•</span>
                    <div>
                      <strong>Security & Performance:</strong> Implemented <strong>secure authentication and role-based access control with JWT</strong>, optimized message encoding to <strong>reduce bandwidth by 40%</strong>, and persisted chat data using <strong>MongoDB Atlas</strong>.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">F</span>
                    Frontend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Socket.io Client</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">B</span>
                    Backend Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Socket.io</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">MongoDB Atlas</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Redis</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">S</span>
                    Security & Authentication
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">JWT</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Role-Based Access</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">A</span>
                    Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Event-Driven</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Redis Pub/Sub</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Horizontal Scaling</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">Performance Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="bg-purple-600 text-white rounded-lg px-4 py-3 font-bold text-2xl mr-4">500+</div>
                    <div>
                      <p className="font-semibold text-gray-900">Concurrent Users</p>
                      <p className="text-sm text-gray-600">Simultaneous connections handled</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-600 text-white rounded-lg px-4 py-3 font-bold text-2xl mr-4">&lt;200ms</div>
                    <div>
                      <p className="font-semibold text-gray-900">Message Latency</p>
                      <p className="text-sm text-gray-600">Under load conditions</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-600 text-white rounded-lg px-4 py-3 font-bold text-2xl mr-4">40%</div>
                    <div>
                      <p className="font-semibold text-gray-900">Bandwidth Reduction</p>
                      <p className="text-sm text-gray-600">Via optimized encoding</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-600 text-white rounded-lg px-4 py-3 font-bold text-2xl mr-4">∞</div>
                    <div>
                      <p className="font-semibold text-gray-900">Horizontal Scalability</p>
                      <p className="text-sm text-gray-600">Redis pub/sub architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Development Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-700 text-sm">
                Implemented enterprise-grade security measures including WAF, threat intelligence integration, and GDPR-compliant logging
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
              <p className="text-gray-700 text-sm">
                Designed event-driven, horizontally scalable systems using Redis pub/sub and modern cloud patterns
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Production Ready</h3>
              <p className="text-gray-700 text-sm">
                Built with performance optimization, monitoring, and real-world deployment considerations from the start
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}