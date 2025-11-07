import { Hero } from "../src/components/Hero";
import { Benefits } from "../src/components/Benefits";
import { ProcessTimeline } from "../src/components/ProcessTimeline";
import { ContactForm } from "../src/components/ContactForm";
import { Projects } from "../src/components/Projects";
import { Footer } from "../src/components/Footer";
import { Toaster } from "../src/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <ProcessTimeline />
      <ContactForm />
      <Projects />
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
