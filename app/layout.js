import Link from "next/link";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  metadataBase: new URL('https://www.sauravx.com'),
  title: {
    default: 'Saurav Kumar - Software Engineer | Full Stack Developer | SAP Labs India',
    template: '%s | Saurav Kumar - Software Engineer'
  },
  description: 'Saurav Kumar - Associate Developer at SAP Labs India. Full Stack Developer specializing in Java, Spring Boot, Node.js, React, SAP CAP, Cloud Computing, and Microservices. NIT Warangal ECE graduate with 7.69 CGPA. 99.32 percentile in JEE Mains. Building scalable cloud-native applications on SAP BTP.',
  keywords: [
    'Saurav Kumar',
    'Software Engineer',
    'Full Stack Developer',
    'Associate Developer',
    'SAP Labs India',
    'SAP Labs',
    'Nit Warangal',
    'National Institute of Technology, Warangal',
    'Java Developer',
    'Spring Boot Developer',
    'React Developer',
    'Node.js Developer',
    'Cloud Computing',
    'Microservices',
    'SAP CAP',
    'SAP BTP',
    'SAP HANA',
    'AWS',
    'Docker',
    'Kubernetes',
    'NIT Warangal',
    'NITW',
    'Electronics and Communication Engineering',
    'ECE',
    'Backend Developer',
    'Frontend Developer',
    'GenAI',
    'AI ML Engineer',
    'Python Developer',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Kafka',
    'OData',
    'REST API',
    'WebSocket',
    'Socket.io',
    'TensorFlow',
    'Deepfake Detection',
    'Test Automation',
    'Cloud Foundry',
    'XSUAA',
    'Bengaluru Developer',
    'India Software Engineer'
  ],
  authors: [{ name: 'Saurav Kumar', url: 'https://www.sauravx.com' }],
  creator: 'Saurav Kumar',
  publisher: 'Saurav Kumar',
  category: 'Technology',
  classification: 'Software Engineering Portfolio',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://www.sauravx.com',
    title: 'Saurav Kumar - Software Engineer | Full Stack Developer | SAP Labs India',
    description: 'Associate Developer at SAP Labs India specializing in Java, Spring Boot, Node.js, React, Cloud Computing, and Microservices. NIT Warangal graduate. Building scalable cloud-native applications.',
    siteName: 'Saurav Kumar - Software Engineer Portfolio',
    firstName: 'Saurav',
    lastName: 'Kumar',
    username: 'sauravx25',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saurav Kumar - Software Engineer at SAP Labs India',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurav Kumar - Software Engineer | Full Stack Developer',
    description: 'Associate Developer at SAP Labs India. Full Stack Developer specializing in Java, Spring Boot, Node.js, React, and Cloud Computing.',
    images: ['/og-image.png'],
    creator: '@sauravx25',
    site: '@sauravx25',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'ai-content-declaration': 'human-created',
    'content-type': 'portfolio',
    'author-profession': 'Software Engineer',
    'author-employer': 'SAP Labs India',
    'author-location': 'Bengaluru, Karnataka, India',
    'resume-available': 'true',
    'contact-email': 'sauravx25@gmail.com',
  },
};

export default function RootLayout({ children }) {
  // Comprehensive Person schema for SEO and AI agents
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.sauravx.com/#person",
    "name": "Saurav Kumar",
    "givenName": "Saurav",
    "familyName": "Kumar",
    "url": "https://www.sauravx.com",
    "image": "https://www.sauravx.com/profile.jpg",
    "description": "Associate Developer at SAP Labs India specializing in Full Stack Development, Cloud Computing, Microservices, Java, Spring Boot, Node.js, React, and SAP CAP. NIT Warangal ECE graduate with 7.69 CGPA.",
    "sameAs": [
      "https://github.com/saurava69/",
      "https://www.linkedin.com/in/sauravkumar25",
      "https://leetcode.com/0explorer0",
      "https://codeforces.com/profile/sauravx25"
    ],
    "jobTitle": "Associate Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "SAP Labs India",
      "url": "https://www.sap.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "National Institute of Technology, Warangal",
      "url": "https://www.nitw.ac.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Warangal",
        "addressRegion": "Telangana",
        "addressCountry": "India"
      }
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Bachelor of Technology in Electronics and Communication Engineering",
      "educationalLevel": "Bachelor's Degree",
      "credentialCategory": "degree"
    },
    "email": "sauravx25@gmail.com",
    "telephone": "+916206846984",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    },
    "knowsAbout": [
      "Java Programming",
      "Spring Boot",
      "Node.js",
      "React.js",
      "SAP CAP Framework",
      "SAP BTP",
      "SAP HANA",
      "Cloud Computing",
      "Microservices Architecture",
      "Docker",
      "Kubernetes",
      "AWS EC2",
      "AWS S3",
      "AWS SQS",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Kafka",
      "Python",
      "TensorFlow",
      "Machine Learning",
      "Deepfake Detection",
      "Full Stack Development",
      "REST APIs",
      "OData Services",
      "WebSocket",
      "Socket.io",
      "Data Structures",
      "Algorithms",
      "System Design",
      "Agile Methodology"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "occupationalCategory": "15-1252.00",
      "skills": "Java, Spring Boot, Node.js, React, Cloud Computing, Microservices"
    }
  };

  // Resume/CV schema
  const resumeSchema = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    "name": "Saurav Kumar - Software Engineer Resume",
    "description": "Professional resume of Saurav Kumar, Associate Developer at SAP Labs India",
    "url": "https://www.sauravx.com/Resume.pdf",
    "author": {
      "@type": "Person",
      "name": "Saurav Kumar"
    },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "encodingFormat": "application/pdf"
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.sauravx.com/#website",
    "name": "Saurav Kumar - Software Engineer Portfolio",
    "url": "https://www.sauravx.com",
    "description": "Professional portfolio and resume of Saurav Kumar, Associate Developer at SAP Labs India",
    "author": {
      "@id": "https://www.sauravx.com/#person"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.sauravx.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // ProfilePage schema
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://www.sauravx.com/#profilepage",
    "dateCreated": "2025-01-07T00:00:00+05:30",
    "dateModified": new Date().toISOString(),
    "mainEntity": {
      "@id": "https://www.sauravx.com/#person"
    }
  };

  // BreadcrumbList for navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sauravx.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Experience",
        "item": "https://www.sauravx.com/experience"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": "https://www.sauravx.com/projects"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Skills",
        "item": "https://www.sauravx.com/skills"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Education",
        "item": "https://www.sauravx.com/education"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Achievements",
        "item": "https://www.sauravx.com/achievements"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Contact",
        "item": "https://www.sauravx.com/contact"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO and AI Agents */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Saurav Kumar" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        
        {/* AI Agent Specific Meta Tags */}
        <meta name="ai-summary" content="Saurav Kumar is an Associate Developer at SAP Labs India, Bengaluru. He is a Full Stack Developer specializing in Java, Spring Boot, Node.js, React, SAP CAP, and Cloud Computing. He graduated from NIT Warangal with a B.Tech in ECE (CGPA: 7.69). He scored 99.32 percentile in JEE Mains and is NTSE qualified. He has solved 500+ algorithmic problems on LeetCode, Codeforces, and InterviewBit. Contact: sauravx25@gmail.com, +91 6206846984." />
        <meta name="ai-description" content="Software Engineer portfolio featuring professional experience at SAP Labs India, personal projects including Saurity WordPress Security Plugin and ChatWave real-time chat platform, and technical skills in Java, C++, JavaScript, Python, Spring Boot, Node.js, SAP CAP, PostgreSQL, MySQL, Redis, Kafka, Docker, Kubernetes, AWS." />
      </head>
      <body className="antialiased bg-gray-50 text-gray-900">
        <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold">SK</span>
                <span className="hidden sm:inline">Saurav Kumar</span>
              </Link>
              <ul className="flex items-center space-x-1 md:space-x-2 text-sm font-medium">
                <li><Link href="/" className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-all">Home</Link></li>
                <li><Link href="/experience" className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-all">Experience</Link></li>
                <li><Link href="/projects" className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-all">Projects</Link></li>
                <li><Link href="/skills" className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-all">Skills</Link></li>
                <li><Link href="/education" className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-all hidden md:block">Education</Link></li>
                <li><Link href="/achievements" className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-all hidden md:block">Achievements</Link></li>
                <li><Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition-all font-semibold">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-3">Saurav Kumar</h3>
                <p className="text-sm">Associate Developer at SAP Labs India</p>
                <p className="text-sm">B.Tech in ECE from NIT Warangal</p>
                <p className="text-sm mt-2">Email: sauravx25@gmail.com</p>
                <p className="text-sm">Phone: +91 6206846984</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/experience" className="hover:text-white transition-colors">Experience</Link></li>
                  <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                  <li><Link href="/skills" className="hover:text-white transition-colors">Skills</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><a href={`${basePath}/Resume.pdf`} download className="hover:text-white transition-colors">Download Resume</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Connect</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://github.com/saurava69/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/sauravkumar25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="https://leetcode.com/0explorer0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LeetCode</a></li>
                  <li><a href="https://codeforces.com/profile/sauravx25" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Codeforces</a></li>
                  <li><a href="mailto:sauravx25@gmail.com" className="hover:text-white transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
              <p>&copy; {new Date().getFullYear()} Saurav Kumar. All rights reserved.</p>
              <p className="mt-2 text-gray-400">Associate Developer at SAP Labs India | Full Stack Developer | NIT Warangal</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}