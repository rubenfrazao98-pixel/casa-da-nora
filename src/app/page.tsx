import HeroNora from "@/components/HeroNora";
import OptionsSection from "@/components/OptionsSection";
import BookingSection from "@/components/BookingSection";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="w-full relative">
      <LoadingScreen />
      <HeroNora />
      <OptionsSection />
      <BookingSection />
    </main>
  );
}
