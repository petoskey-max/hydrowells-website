import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheBottle from "@/components/TheBottle";
import ScrollBottleWrapper from "@/components/ScrollBottleWrapper";
import BrandStrip from "@/components/BrandStrip";
import Values from "@/components/Values";

const WeekendLifestyle = lazy(() => import("@/components/WeekendLifestyle"));
const Products = lazy(() => import("@/components/Products"));
const Lifestyle = lazy(() => import("@/components/Lifestyle"));
const PreciousMoments = lazy(() => import("@/components/PreciousMoments"));
const Campaign = lazy(() => import("@/components/Campaign"));
const Process = lazy(() => import("@/components/Process"));
const Eco = lazy(() => import("@/components/Eco"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Events = lazy(() => import("@/components/Events"));
const Merch = lazy(() => import("@/components/Merch"));
const BrandPartners = lazy(() => import("@/components/BrandPartners"));
const CTA = lazy(() => import("@/components/CTA"));
const Contact = lazy(() => import("@/components/Contact"));
const SocialFollow = lazy(() => import("@/components/SocialFollow"));
const Footer = lazy(() => import("@/components/Footer"));
const BackToTop = lazy(() => import("@/components/BackToTop"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollBottleWrapper>
        <Hero hideBottle />
        <BrandStrip />
        <Values />
        <TheBottle hideBottle />
      </ScrollBottleWrapper>
      
      <Suspense fallback={<div className="h-40 flex items-center justify-center text-primary font-bold">loading...</div>}>
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
        <SocialFollow />
        <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
};

export default Index;
