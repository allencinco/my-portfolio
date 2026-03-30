import { Award } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    issuer: "Online Learning Platform",
    date: "2024",
    description: "Comprehensive certification in modern web development with React and Next.js",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    issuer: "Design Academy",
    date: "2024",
    description: "Professional certification in user interface and user experience design principles",
  },
  {
    id: 3,
    title: "JavaScript Advanced Programming",
    issuer: "Tech Institute",
    date: "2023",
    description: "Advanced JavaScript programming concepts and best practices",
  },
  {
    id: 4,
    title: "Video Editing Certification",
    issuer: "Media Production School",
    date: "2023",
    description: "Professional video editing and post-production techniques",
  },
  {
    id: 5,
    title: "Graphic Design Professional",
    issuer: "Creative Skills Academy",
    date: "2023",
    description: "Professional graphic design and visual communication certification",
  },
  {
    id: 6,
    title: "TypeScript Mastery",
    issuer: "Code Academy",
    date: "2024",
    description: "Complete mastery of TypeScript for scalable application development",
  },
];

export default function CertificatesSection() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg p-6 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-6 h-6 text-amber-600" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Certificates & Awards</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {cert.issuer}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              {cert.description}
            </p>
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
              {cert.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
