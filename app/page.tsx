import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import NotableWorks from "@/components/sections/NotableWorks";
import ExperienceSummary from "@/components/sections/ExperienceSummary";
import EducationSummary from "@/components/sections/EducationSummary";
import ResearchInterestsSummary from "@/components/sections/ResearchInterestsSummary";

export default function Home() {
  return (
    <div className="w-full py-6 sm:py-8 md:py-10">
      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        <Hero />
        <Introduction />
        <NotableWorks />
        <ExperienceSummary />
        <EducationSummary />
        <ResearchInterestsSummary />
      </div>
    </div>
  );
}
