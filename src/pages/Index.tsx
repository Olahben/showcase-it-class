import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Velkommen til vår IT-klasse
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oppdag de fantastiske prosjektene våre elever har laget gjennom praktisk læring og kreativ problemløsning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ProjectCard
            title="GlanceThing"
            description="Et populært GitHub-prosjekt med nesten 200 stjerner som forbedrer Spotify Car Thing med innovative funksjoner og forbedret brukeropplevelse."
          />
          <ProjectCard
            title="CryptoBot Pro"
            description="En avansert handelsbot som utfører MEV-transaksjoner og kryptovalutahandel, som har generert betydelig fortjeneste gjennom smart arbitrasje og frontrunning-strategier."
          />
          <ProjectCard
            title="HotelWare"
            description="En komplett Blazor/C# applikasjon for varehotell med integrert betalingsløsning, booking-system og lagerstyring. Brukes aktivt av flere varehoteller."
          />
        </div>

        <footer className="border-t pt-8 mt-16">
          <div className="text-center text-gray-600">
            <p className="mb-2">Utviklet av Ola, Erik, Marius og Sindre</p>
            <p className="text-sm">&copy; 2024 IT-klassen. Alle rettigheter forbeholdt.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;