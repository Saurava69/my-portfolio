export const metadata = {
  title: 'Technical Skills',
  description: 'Saurav Kumar\'s technical skills and expertise in programming languages (Java, C++, JavaScript, Python), frameworks (Spring Boot, Node.js, SAP CAP), cloud platforms (AWS, Docker, Kubernetes), and databases (PostgreSQL, MySQL, Redis, Kafka).',
  openGraph: {
    title: 'Technical Skills | Saurav Kumar',
    description: 'Technical expertise in Full Stack Development, Cloud Computing, Microservices, and Enterprise Systems',
    url: 'https://www.sauravx.com/skills',
  },
};

export default function Skills() {
  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Programming Languages",
        "description": "Java, C++, JavaScript, Python, SQL"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Backend & Frameworks",
        "description": "Spring Boot, Node.js, SAP CAP, Express"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Databases & Messaging",
        "description": "PostgreSQL, MySQL, Redis, Kafka"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Cloud & DevOps",
        "description": "Docker, Kubernetes, AWS (EC2, S3, SQS), Jenkins, Git"
      }
    ]
  };

  const skills = {
    languages: [
      { name: 'Java', color: 'red' },
      { name: 'C++', color: 'blue' },
      { name: 'JavaScript', color: 'yellow' },
      { name: 'Python', color: 'green' },
      { name: 'SQL', color: 'indigo' }
    ],
    backend: [
      { name: 'Spring Boot', category: 'Backend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'SAP CAP', category: 'Backend' },
      { name: 'Express', category: 'Backend' }
    ],
    databases: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Redis' },
      { name: 'Kafka' }
    ],
    cloud: [
      { name: 'Docker', category: 'Containerization' },
      { name: 'Kubernetes', category: 'Orchestration' },
      { name: 'AWS EC2', category: 'Compute' },
      { name: 'AWS S3', category: 'Storage' },
      { name: 'AWS SQS', category: 'Messaging' },
      { name: 'Jenkins', category: 'CI/CD' },
      { name: 'Git', category: 'Version Control' }
    ],
    concepts: [
      'Microservices Architecture',
      'Concurrency & Multithreading',
      'Object-Oriented Programming (OOP)',
      'Data Structures and Algorithms',
      'Computer Networks',
      'System Design',
      'RESTful API Design',
      'Event-Driven Architecture',
      'Cloud-Native Development',
      'Agile Methodology'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white-900 mb-4">Technical Skills</h1>
          <p className="text-xl text-white-600">
            Comprehensive expertise across full stack development, cloud platforms, and modern technologies
          </p>
        </header>

        <section className="space-y-12">
          <article className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-600 text-white rounded-lg px-3 py-1 mr-3">01</span>
              Programming Languages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {skills.languages.map((skill, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-green-600 text-white rounded-lg px-3 py-1 mr-3">02</span>
              Backend & Frameworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.backend.map((skill, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-indigo-600 text-white rounded-lg px-3 py-1 mr-3">03</span>
              Databases & Messaging
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                  </svg>
                  Databases
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    <span className="text-black font-medium">PostgreSQL</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    <span className="text-black font-medium">MySQL</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    <span className="text-black font-medium">Redis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  Messaging
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    <span className="text-black font-medium">Kafka</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-purple-600 text-white rounded-lg px-3 py-1 mr-3">04</span>
              Cloud & DevOps
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.cloud.map((tool, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                  <p className="font-semibold text-gray-900">{tool.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{tool.category}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AWS Services</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-medium">EC2 (Compute)</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-medium">S3 (Storage)</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-medium">SQS (Messaging)</span>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-orange-600 text-white rounded-lg px-3 py-1 mr-3">05</span>
              Core Concepts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.concepts.map((concept, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <svg className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-900 font-medium">{concept}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-lg mb-6">
            Actively expanding expertise in emerging technologies including GenAI, cloud-native architectures, and enterprise system integration. Committed to staying current with industry best practices and modern development methodologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Current Focus</h3>
              <p className="text-sm">GenAI Integration, Microservices Architecture, Kubernetes Orchestration</p>
            </div>
            <div className="bg-slate-900 bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Learning Approach</h3>
              <p className="text-sm">Hands-on projects, Production deployments, Technical documentation</p>
            </div>
            <div className="bg-slate-900 bg-opacity-20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Problem Solving</h3>
              <p className="text-sm">500+ problems solved on LeetCode, Codeforces, and InterviewBit</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}