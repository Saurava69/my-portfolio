export const metadata = {
  title: 'Achievements',
  description: 'Saurav Kumar\'s academic and competitive achievements including 99.32 percentile in JEE Mains among 1 million+ students and NTSE District Topper qualification.',
  alternates: {
    canonical: 'https://www.sauravx.com/achievements',
  },
  openGraph: {
    title: 'Achievements | Saurav Kumar',
    description: 'Academic excellence and competitive achievements demonstrating consistent performance',
    url: 'https://www.sauravx.com/achievements',
  },
};

export default function Achievements() {
  const achievementSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "JEE Mains 99.32 Percentile",
        "description": "Achieved 99.32 percentile marks among 1 million+ students in JEE Mains March 2021"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "NTSE Qualified",
        "description": "Qualified National Talent Search Examination conducted by NCERT"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "District Topper - Class 10 CBSE",
        "description": "Secured District Topper position in Class 10 CBSE Board Examination with 97.6%"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "500+ Algorithmic Problems Solved",
        "description": "Solved 500+ algorithmic problems on Leetcode, Codeforces and InterviewBit"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(achievementSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white-900 mb-4">Achievements</h1>
          <p className="text-xl text-white-600">
            Recognition of academic excellence and competitive performance
          </p>
        </header>

        <section className="space-y-8">
          <article className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg shadow-lg p-8 border-l-4 border-yellow-500">
            <div className="flex items-start mb-6">
              <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-6 flex-shrink-0">
                🏆
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  JEE Mains 99.32 Percentile
                </h2>
                <p className="text-lg text-yellow-700 font-semibold mb-2">
                  Among 1 Million+ Students Nationwide
                </p>
                <p className="text-gray-600 font-medium">March 2021</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Secured <strong>99.32 percentile</strong> in the Joint Entrance Examination (JEE) Mains, one of India&apos;s most competitive engineering entrance examinations, with over <strong>1 million+ students</strong> appearing nationwide. This outstanding performance placed me in the <strong>top 0.68% of all candidates</strong>.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Achievement Significance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">National Level Competition</p>
                      <p className="text-sm text-gray-600">Competed against 1 million+ candidates from across India</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Top 1% Performance</p>
                      <p className="text-sm text-gray-600">Secured position in top 0.68% of all test takers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">NIT Admission</p>
                      <p className="text-sm text-gray-600">Secured seat at NIT Warangal, a premier engineering institute</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Problem Solving Excellence</p>
                      <p className="text-sm text-gray-600">Demonstrated strong analytical and mathematical skills</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded">
                <p className="text-gray-800 font-medium">
                  <span className="font-bold text-yellow-800">Impact:</span> This achievement opened doors to one of India&apos;s top engineering institutions and validated my problem-solving capabilities, which have been instrumental in my software development career.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-lg p-8 border-l-4 border-green-600">
            <div className="flex items-start mb-6">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-6 flex-shrink-0">
                ⭐
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  NTSE Qualified
                </h2>
                <p className="text-lg text-green-700 font-semibold mb-2">
                  National Talent Search Examination
                </p>
                <p className="text-gray-600 font-medium">June 2019</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Qualified the prestigious <strong>National Talent Search Examination (NTSE)</strong> conducted by NCERT. NTSE is one of India&apos;s most competitive scholarship examinations that identifies and nurtures talented students at the national level.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Achievement Significance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">National Recognition</p>
                      <p className="text-sm text-gray-600">Qualified highly competitive national scholarship examination</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Early Talent Identification</p>
                      <p className="text-sm text-gray-600">Identified as a national talent at the school level</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Comprehensive Assessment</p>
                      <p className="text-sm text-gray-600">Demonstrated aptitude in science, mathematics, and mental ability</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Scholarship Merit</p>
                      <p className="text-sm text-gray-600">Qualified for merit-based scholarship program</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded">
                <p className="text-gray-800 font-medium">
                  <span className="font-bold text-green-800">Impact:</span> NTSE qualification demonstrated early academic promise and strong foundational knowledge across multiple subjects, establishing a pattern of consistent excellence.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg p-8 border-l-4 border-purple-600">
            <div className="flex items-start mb-6">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-6 flex-shrink-0">
                🥇
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  District Topper - Class 10
                </h2>
                <p className="text-lg text-purple-700 font-semibold mb-2">
                  CBSE Board Examination
                </p>
                <p className="text-gray-600 font-medium">June 2019</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Secured <strong>District Topper</strong> position in Class 10 CBSE Board Examination, demonstrating consistent academic excellence and subject mastery across all disciplines at the secondary education level.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Achievement Significance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">District Leadership</p>
                      <p className="text-sm text-gray-600">Achieved highest marks across all subjects in the district</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Academic Excellence</p>
                      <p className="text-sm text-gray-600">Outstanding performance in CBSE board examinations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">All-Round Performance</p>
                      <p className="text-sm text-gray-600">Excelled across science, mathematics, languages, and social studies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Strong Foundation</p>
                      <p className="text-sm text-gray-600">Solid groundwork for future academic achievements</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 border-l-4 border-purple-600 p-4 rounded">
                <p className="text-gray-800 font-medium">
                  <span className="font-bold text-purple-800">Impact:</span> District Topper achievement in Class 10 CBSE boards validated consistent academic performance and comprehensive subject knowledge, setting the foundation for subsequent competitive examination success.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
            <div className="flex items-start mb-6">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mr-6 flex-shrink-0">
                💻
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  500+ Algorithmic Problems Solved
                </h2>
                <p className="text-lg text-blue-700 font-semibold mb-2">
                  LeetCode, Codeforces & InterviewBit
                </p>
                <p className="text-gray-600 font-medium">Ongoing</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Solved <strong>500+ algorithmic problems</strong> across multiple competitive programming platforms including <strong>LeetCode, Codeforces, and InterviewBit</strong>. This demonstrates strong problem-solving abilities and deep understanding of data structures and algorithms.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Platforms & Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">LeetCode</p>
                      <p className="text-sm text-gray-600">Algorithm & coding challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Codeforces</p>
                      <p className="text-sm text-gray-600">Competitive programming</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">InterviewBit</p>
                      <p className="text-sm text-gray-600">Interview preparation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-gray-800 font-medium">
                  <span className="font-bold text-blue-800">Impact:</span> Consistent problem-solving practice has strengthened algorithmic thinking, code optimization skills, and ability to tackle complex technical challenges efficiently.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievement Timeline</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="mb-8 flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mr-6 flex-shrink-0 relative z-10">
                2019
              </div>
              <div className="bg-gray-50 p-6 rounded-lg flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">District Topper - Class 10 CBSE</h3>
                <p className="text-gray-700">Secured District Topper position in Class 10 CBSE Board Examination, demonstrating all-round academic excellence</p>
              </div>
            </div>

            <div className="mb-8 flex items-start">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mr-6 flex-shrink-0 relative z-10">
                2019
              </div>
              <div className="bg-gray-50 p-6 rounded-lg flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">NTSE Qualified</h3>
                <p className="text-gray-700">Qualified National Talent Search Examination conducted by NCERT, identified as national talent at school level</p>
              </div>
            </div>

            <div className="mb-8 flex items-start">
              <div className="bg-yellow-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mr-6 flex-shrink-0 relative z-10">
                2021
              </div>
              <div className="bg-gray-50 p-6 rounded-lg flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">JEE Mains 99.32 Percentile</h3>
                <p className="text-gray-700">Achieved exceptional performance in JEE Mains among 1 million+ students, securing admission to NIT Warangal</p>
              </div>
            </div>

            <div className="mb-8 flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mr-6 flex-shrink-0 relative z-10">
                2025
              </div>
              <div className="bg-gray-50 p-6 rounded-lg flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">B.Tech Graduation</h3>
                <p className="text-gray-700">Graduated from NIT Warangal with 7.69 CGPA in Electronics & Communication Engineering</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mr-6 flex-shrink-0 relative z-10">
                2025
              </div>
              <div className="bg-gray-50 p-6 rounded-lg flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Career</h3>
                <p className="text-gray-700">Started as Associate Developer at SAP Labs India, building enterprise cloud applications</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Achievement Philosophy</h2>
          <p className="text-lg leading-relaxed mb-6">
            These achievements reflect a consistent pattern of academic excellence and competitive performance. From early recognition through NTSE to competing at the national level in JEE, each milestone demonstrates dedication to learning, strong problem-solving capabilities, and the ability to perform under pressure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 bg-opacity-20 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Consistency</h3>
              <p className="text-sm">Maintained excellence from Class 10 through competitive exams and college education</p>
            </div>
            <div className="bg-slate-900 bg-opacity-20 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Competition</h3>
              <p className="text-sm">Performed at the highest level against large candidate pools nationwide</p>
            </div>
            <div className="bg-slate-900 bg-opacity-20 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Foundation</h3>
              <p className="text-sm">Built strong fundamentals that translate to professional software development success</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
