"use client";

import { Award } from "lucide-react";
import { useState } from "react";


const certificates = [
  {
    id: 1,
    title: "Frontend Web Development",
    issuer: "Udemy",
    date: "2025",
    description: "HTML5, CSS3, JavaScript and Bootstrap - Complete frontend development certification",
  },
  {
    id: 2,
    title: "Bootstrap Mastery",
    issuer: "Udemy",
    date: "2025",
    description: "Build Responsive Websites Like a Pro with advanced Bootstrap techniques",
  },
  {
    id: 3,
    title: "Build 11 JavaScript Applications",
    issuer: "Learnify IT",
    date: "2025",
    description: "JavaScript BootCamp focused on building 11 practical web applications",
  },
  {
    id: 4,
    title: "JavaScript Mastery: Basics to Advanced",
    issuer: "Udemy",
    date: "2025",
    description: "Professional expertise in JavaScript from fundamental concepts to advanced patterns",
  },
  {
    id: 5,
    title: "Advanced Canva for Video Editing",
    issuer: "Learnify IT",
    date: "2025",
    description: "Complete video editing and content creation for social media platforms",
  },
  {
    id: 6,
    title: "MCITS 2023 Participation",
    issuer: "Philippine Society of Information Technology Educators",
    date: "2023",
    description: "Active participation in Mindanao Conference for IT Students - May 5, 2023",
  },
];

export default function CertificatesSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedCertificates = isExpanded ? certificates : certificates.slice(0, 4);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg p-6 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-6 h-6 text-amber-600" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Certificates & Awards</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedCertificates.map((cert) => (
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

      {/* Show More Button */}
      {!isExpanded && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsExpanded(true)}
            className="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white font-small rounded-lg transition-colors duration-300"
          >
            Show More ({certificates.length - 4} certificates)
          </button>
        </div>
      )}

      {/* Show Less Button */}
      {isExpanded && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsExpanded(false)}
            className="px-3 py-2 bg-gray-400 hover:bg-gray-500 text-white font-small rounded-lg transition-colors duration-300"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}
      