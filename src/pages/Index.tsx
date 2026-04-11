import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import Values from "@/components/Values";
import WeekendLifestyle from "@/components/WeekendLifestyle";
import Products from "@/components/Products";
import Lifestyle from "@/components/Lifestyle";
import PreciousMoments from "@/components/PreciousMoments";
import Campaign from "@/components/Campaign";
import Process from "@/components/Process";
import Eco from "@/components/Eco";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import Merch from "@/components/Merch";
import BrandPartners from "@/components/BrandPartners";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandStrip />
      <Values />
      <WeekendLifestyle />
      <Products />
      <Lifestyle />
      <PreciousMoments />
      <Campaign />
      <Process />
      <Eco />
      <Testimonials />
      <Events />
      <Merch />
      <BrandPartners />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
