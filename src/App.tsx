import { LanguageProvider } from "./i18n/LanguageContext";
import { Navbar } from "./components/site/Navbar";
import { Hero } from "./components/site/Hero";
import { About } from "./components/site/About";
import { Specialties } from "./components/site/Specialties";
import { ContentHub } from "./components/site/ContentHub";
import { Testimonials } from "./components/site/Testimonials";
import { Booking } from "./components/site/Booking";
import { Faq } from "./components/site/Faq";
import { Footer } from "./components/site/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Specialties />
          <ContentHub />
          <Testimonials />
          <Booking />
          <Faq />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
