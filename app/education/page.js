export const metadata = {
  title: 'Education',
  description: 'Saurav Kumar\'s educational background - B.Tech in Electronics and Communication Engineering from National Institute of Technology, Warangal with 7.69 CGPA. Academic achievements and coursework.',
  alternates: {
    canonical: 'https://www.sauravx.com/education',
  },
  openGraph: {
    title: 'Education | Saurav Kumar',
    description: 'Educational background from NIT Warangal and academic achievements',
    url: 'https://www.sauravx.com/education',
  },
};

export default function Education() {
  const educationSchema = [
    {
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      "name": "Bachelor of Technology in Electronics and Communication Engineering",
      "educationalLevel": "Undergraduate",
      "recognizedBy": {
        "@type": "EducationalOrganization",
        "name": "National Institute of Technology, Warangal",
        "url": "https://www.nitw.ac.in"
      },
      "dateCreated": "2021-11",
      "expires": "2025-05"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white-900 mb-4">Education</h1>
          <p className="text-xl text-white-600">
            Academic background from premier engineering institution in India
          </p>
        </header>

        <section className="space-y-8">
          <article className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Bachelor of Technology (B.Tech)
                </h2>
                <p className="text-xl text-blue-600 font-semibold mb-2">
                  Electronics and Communication Engineering
                </p>
                <p className="text-lg text-gray-700 font-medium mb-2">
                  National Institute of Technology, Warangal
                </p>
                <p className="text-gray-600">
                  One of India&apos;s top engineering institutions (NIT)
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-bold text-xl mb-2">
                  CGPA: 7.69/10
                </div>
                <p className="text-gray-600 font-medium">November 2021 – May 2025</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Coursework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-medium text-gray-900">Data Structures and Algorithms</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-medium text-gray-900">Object-Oriented Programming</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-medium text-gray-900">Operating Systems</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-medium text-gray-900">Database Management Systems</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold text-gray-900">Strong Foundation in Computer Science</p>
                      <p className="text-gray-700 text-sm">Comprehensive coursework in algorithms, data structures, operating systems, and OOP principles</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Database & Systems Knowledge</p>
                      <p className="text-gray-700 text-sm">Strong understanding of database management systems and system design principles</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">Practical Software Development</p>
                      <p className="text-gray-700 text-sm">Hands-on experience through academic projects and internships at SAP Labs India</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Senior Secondary Education</h2>
                <p className="text-lg text-green-600 font-semibold mb-1">
                  Sunbeam Academy Varanasi, Uttar Pradesh
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold text-lg">
                  95.8%
                </div>
                <p className="text-gray-600 font-medium mt-1">June 2019 – April 2021</p>
              </div>
            </div>
            <p className="text-gray-700">
              Completed 12th grade with exceptional performance, demonstrating strong academic foundation in science and mathematics
            </p>
          </article>

          <article className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-purple-600">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Secondary Education</h2>
                <p className="text-lg text-purple-600 font-semibold mb-1">
                  Jawahar Navodaya Vidyalaya, Buxar, Bihar
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg font-bold text-lg">
                  97.6%
                </div>
                <p className="text-gray-600 font-medium mt-1">August 2014 – April 2019</p>
              </div>
            </div>
            <p className="text-gray-700">
              Outstanding performance in 10th grade from prestigious Jawahar Navodaya Vidyalaya system, demonstrating academic excellence from early education
            </p>
          </article>
        </section>

        <section className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Educational Journey Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">Top 1%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">National Ranking</h3>
              <p className="text-gray-700 text-sm">
                99.32 percentile in JEE Mains among 1 million+ students, securing admission to NIT Warangal
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">4 Years</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premier Institution</h3>
              <p className="text-gray-700 text-sm">
                Rigorous engineering education at NIT Warangal, one of India&apos;s top technical institutes
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">Consistent</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Excellence</h3>
              <p className="text-gray-700 text-sm">
                95%+ scores throughout secondary and senior secondary education demonstrating dedication
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Academic Philosophy</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Education at NIT Warangal provided a strong theoretical foundation combined with practical application opportunities. The rigorous curriculum in Electronics and Communication Engineering, supplemented with computer science coursework, equipped me with problem-solving skills and technical depth essential for software development roles.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The emphasis on data structures, algorithms, and system design during academic years, combined with hands-on internship experience at SAP Labs India, bridged the gap between theoretical knowledge and real-world software engineering practices.
          </p>
        </section>
      </div>
    </>
  );
}
