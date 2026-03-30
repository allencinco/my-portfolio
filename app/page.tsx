import ProfileCard from "@/components/ProfileCard";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import CertificatesSection from "@/components/CertificatesSection";
import ExtracurriculalActivitiesSection from "@/components/ExtracurricularctivitiesSection";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      
      {/* 🌙 Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ModeToggle />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <ProfileCard />
              <AboutSection />
              <EducationSection />
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-2 space-y-6">
            <ExperienceSection />
            <ProjectsSection />
            <GallerySection />
            <CertificatesSection />
            <ExtracurriculalActivitiesSection />
          </div>

        </div>
      </div>
    </div>
  );
}