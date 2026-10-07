import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SegmentsMarquee from "@/components/SegmentsMarquee";
import VideoShowcase from "@/components/VideoShowcase";
import SystemTour from "@/components/SystemTour";
import BigIdea from "@/components/BigIdea";
import Pains from "@/components/Pains";
import Loyalty from "@/components/Loyalty";
import OrderStatus from "@/components/OrderStatus";
import OpsBento from "@/components/OpsBento";
import Compare from "@/components/Compare";
import Pricing from "@/components/Pricing";
import Case from "@/components/Case";
import Faq from "@/components/Faq";
import SignupWizard from "@/components/SignupWizard";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LiveActivityToast from "@/components/LiveActivityToast";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="firstscreen">
        <Hero />
        <SegmentsMarquee />
      </div>
      <VideoShowcase />
      <SystemTour />
      <BigIdea />
      <Pains />
      <Loyalty />
      <OrderStatus />
      <OpsBento />
      <Compare />
      <Pricing />
      <Case />
      <Faq />
      <SignupWizard />
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
      <LiveActivityToast />
      <ScrollReveal />
    </>
  );
}
