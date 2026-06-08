import HeroNora from "@/components/HeroNora";
import NoraAnimation from "@/components/NoraAnimation";
import OptionsSection from "@/components/OptionsSection";
import BookingSection from "@/components/BookingSection";
import LoadingScreen from "@/components/LoadingScreen";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="w-full relative">
      <LoadingScreen />
      <HeroNora />
      <NoraAnimation />
      <OptionsSection />
      <BookingSection />
      <FooterSection />
      <WhatsAppFloat />
      <ScrollToTop />
    </main>
  );
}
