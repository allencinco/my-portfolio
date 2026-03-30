import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Track Guard",
    description:
      "An IoT-based system Emergency Alert System (Web and Mobile) for personal safety and security",
    tags: ["Next.js", "Firebase", "UI/UX", "ReactNative", "Typescript", "IoT"],
    link: "https://github.com/TrackGuard",
  },
  {
    title: "BoostCV",
    description:
      "Create standout, ATS-friendly resumes in minutes with tools designed to highlight your strengths and help you land more interview calls.",
    tags: ["Next.js", "Drizzle ORM", "TursoDB"],
    link: "https://boostcv.vercel.app/",
  },
  {
    title: "Jm-Kurier",
    description:
      "Jm-Kurier is a courier service website that provides efficient and reliable delivery solutions for customers.",
    tags: ["Next.js", "ShadCN/UI", "Tailwind CSS"],
    link: "https://jm-kurier.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg p-6 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 transition-all hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md dark:hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer dark:bg-gray-800/50"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md font-medium transition-all group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}