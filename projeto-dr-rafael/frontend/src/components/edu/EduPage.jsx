import { useState } from "react";
import EduHeader from "@/components/edu/EduHeader";
import EduHero from "@/components/edu/EduHero";
import EduAudience from "@/components/edu/EduAudience";
import EduProducts, { HowItWorks } from "@/components/edu/EduProducts";
import EduCourses from "@/components/edu/EduCourses";
import EduAbout from "@/components/edu/EduAbout";
import EduFooter from "@/components/edu/EduFooter";

const EduPage = () => {
  const [query, setQuery] = useState("");

  return (
    <div data-testid="edu-page" className="bg-brand-paper">
      <EduHeader onSearch={setQuery} />
      <main>
        <EduHero />
        <EduAudience />
        <EduProducts />
        <HowItWorks />
        <EduCourses query={query} />
        <EduAbout />
      </main>
      <EduFooter />
    </div>
  );
};

export default EduPage;
