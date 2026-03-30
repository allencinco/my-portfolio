"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Student Organization President",
    description: "Led the Tech Innovation Club with 150+ members, organizing 12+ events annually",
    year: "2023 - Present",
  },
  {
    id: 2,
    title: "Volunteer Web Developer",
    description: "Built websites for local non-profits, contributing to 5+ successful digital transformations",
    year: "2023 - 2024",
  },
  {
    id: 3,
    title: "Hackathon Winner",
    description: "Won 1st place in Regional Tech Hackathon 2024 with innovative IoT solution",
    year: "2024",
  },
  {
    id: 4,
    title: "Community Events Coordinator",
    description: "Organized and managed large-scale community events with 500+ participants",
    year: "2023 - Present",
  },
  {
    id: 5,
    title: "Tech Mentorship Program",
    description: "Mentored 20+ junior developers and students in web development fundamentals",
    year: "2024 - Present",
  },
  {
    id: 6,
    title: "Design Competition Finalist",
    description: "Placed in top 3 in National UI/UX Design Competition 2024",
    year: "2024",
  },
];

export default function ExtracurriculalActivitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
    setAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
    setAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg p-6 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
        <Star className="w-6 h-6 text-yellow-600" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Extracurricular Activities
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Slide */}
        <div className="overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-8 min-h-64 flex flex-col justify-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-yellow-600 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {activities[currentIndex].title}
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              {activities[currentIndex].description}
            </p>

            <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
              {activities[currentIndex].year}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
        >
          <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
        >
          <ChevronRight className="w-5 h-5 text-gray-900 dark:text-white" />
        </button>
      </div>

      {/* Dots Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {activities.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-2 bg-yellow-600"
                : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Autoplay Indicator */}
      <div className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400">
        {autoplay ? (
          <span>Auto-playing carousel...</span>
        ) : (
          <button
            onClick={() => setAutoplay(true)}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Resume autoplay
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
