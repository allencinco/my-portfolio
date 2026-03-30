import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg p-6 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-5">
        <GraduationCap className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Education</h2>
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Bachelor of Science in Information Technology
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Holy Cross of Davao College, Davao City, Philippines
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 pt-2">2020 – 2025</p>
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Senior High School - Computer System Servicing
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Kapalong National High School, Davao del Norte, Philippines
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 pt-2">2018 – 2020</p>
      </div>
    </div>
  );
}
