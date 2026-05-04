import Navbar from "@/components/layout/Navbar";
import SideNav from "@/components/ui/SideNav";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";
import Hero from "@/components/sections/Hero";
import SegmentedNav from "@/components/sections/SegmentedNav";
import Stats from "@/components/sections/Stats";
import ScaleExperience from "@/components/sections/ScaleExperience";
import Retail from "@/components/sections/Retail";
import Luxury from "@/components/sections/Luxury";
import Dining from "@/components/sections/Dining";
import Attractions from "@/components/sections/Attractions";
import EventsModule from "@/components/sections/EventsModule";
import BookingModule from "@/components/sections/BookingModule";
import Footer from "@/components/layout/Footer";
import PersistentCTA from "@/components/ui/PersistentCTA";

export default function Home() {
  return (
    <main className="relative">
      <PageLoader />
      <CustomCursor />
      <PersistentCTA />
      <Navbar />
      <SideNav />
      <Hero />
      <SegmentedNav />
      <Stats />
      <ScaleExperience />
      <Retail />
      <Luxury />
      <Dining />
      <Attractions />
      <EventsModule />
      <BookingModule />
      <Footer />
    </main>
  );
}
