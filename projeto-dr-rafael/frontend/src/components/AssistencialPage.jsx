import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import HomeCare, { ForWho } from "@/components/HomeCare";
import HowItWorks, { WarningSigns } from "@/components/HowItWorks";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Location, { FinalCta } from "@/components/Location";
import Footer from "@/components/Footer";

const AssistencialPage = () => (
  <div data-testid="assistencial-page">
    <Header />
    <main>
      <Hero />
      <Marquee />
      <About />
      <Specialties />
      <HomeCare />
      <HowItWorks />
      <ForWho />
      <WarningSigns />
      <Differentials />
      <Testimonials />
      <Faq />
      <Location />
      <FinalCta />
    </main>
    <Footer />
  </div>
);

export default AssistencialPage;
