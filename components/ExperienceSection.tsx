import { BriefcaseIcon, Circle } from "lucide-react";

const experiences = [
  {
    title: "Event Coordinator",
    company: "Events by Mai Production",
    year: "2023 – Present",
    description: "Organized and executed various events, ensuring smooth operations and attendee satisfaction",
  },
  {
    title: "Web Developer",
    company: "Highland banana Corporation",
    year: "2025",
    description: "Developed an System Admin for the company website and web applications",
  },
  {
    title: "Videographer and editor",
    company: "UDO Asia Pacific (Thailand) 2024 / UDO Mindanao Qualifier 2024",
    year: "2024",
    description: "During Mindanao Qualifier i was assigned to do graphics design for their social media and it was successful event. and i was hired in UDO Asian Pacific at Chonburi, Thailand to take highlight videos and edit",
  },
  {
    title: "Coordinator Assistant, Designer Assistant",
    company: "Riyadh Season 2026 (filipino week)",
    year: "2025",
    description: "Provided technical assistance and design support for the Riyadh Season 2026 event, contributing to the successful execution of various activities and promotions",
  },
];

export default function ExperienceSection() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg p-6 border border-gray-100 dark:border-gray-800 transition-colors duration-300 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <BriefcaseIcon className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Experience</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex gap-4">
            {/* Timeline indicator */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full mt-1.5"></div>
              {index < experiences.length - 1 && (
                <div className="w-0.5 h-16 bg-gray-200 dark:bg-gray-700 my-2"></div>
              )}
            </div>

            {/* Experience content */}
            <div className="flex-1 pb-2">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                  {exp.year}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
