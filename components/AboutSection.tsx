import { Code, Palette, Camera, BarChart3 } from "lucide-react";

const skills = [
  { icon: Code, name: "Full-Stack Dev", color: "text-blue-600" },
  { icon: Palette, name: "UI/UX Design", color: "text-purple-600" },
  { icon: Camera, name: "Photo and Video Editor", color: "text-green-600" },
  { icon: BarChart3, name: "Data Analytics", color: "text-orange-600" },
];
export default function AboutSection() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg p-6 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>

      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
        I’m a web developer and designer from the Philippines, focused on building clean, efficient digital experiences.
        After completing my Bachelor’s degree in Information Technology, I’ve been working on a variety of projects that blend front‑end frameworks (React/Next.js) with strong design sensibilities.
        My work aims to solve problems while delighting users through thoughtful interaction and visual clarity.
        Besides coding, I bring a creative background in photography, videography, and graphic design. These disciplines help me approach development with an eye for composition, color, and storytelling. 
        I’m constantly learning new tools and techniques so I can deliver solutions that are as reliable as they are beautiful.
      </p>

      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Skills</h3>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Icon className={`w-5 h-5 ${skill.color}`} />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
