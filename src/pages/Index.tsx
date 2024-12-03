import ProjectCard from '@/components/ProjectCard'
import { motion } from 'framer-motion'

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <img src="/icon-192.png" alt="" className="m-auto h-20 mb-5" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Velkommen til 2ITA! 🚀
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I programfaget Informasjonsteknologi får du mye kompetanse
            innen både IT-utvikling og UT-drift, samt erfaring i jobb.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ProjectCard
            title="GlanceThing"
            description="Et GitHub prosjekt med nesten 200 stjerner som gjør din Spotify CarThing til en skjerm med raske handlinger for å styre musikk, og kjøre egendefinerte kommandoer og programmer. Laget av Erik."
            image="https://github.com/BluDood/GlanceThing/raw/main/.github/assets/glancething.png"
          />
          <ProjectCard
            title="CryptoBot Pro"
            description="En avansert handelsbot som utfører MEV-transaksjoner og kryptovalutahandel, som har generert betydelig fortjeneste gjennom smart arbitrasje og frontrunning-strategier."
          />
          <ProjectCard
            title="HotelWare"
            description="En komplett Blazor/C# applikasjon for varehotell med integrert betalingsløsning, booking-system og lagerstyring. Brukes aktivt av flere varehoteller."
          />
          <ProjectCard
            title="Eika Nettverksinfrastruktur"
            description="Et omfattende prosjekt hvor Sindre designet og implementerte en komplett nettverksløsning for Eika, inkludert sikkerhetskonfigurasjoner, redundans og skalerbar arkitektur."
          />
        </div>

        <footer className="border-t pt-8 mt-16">
          <div className="text-center text-gray-600">
            <p className="mb-2">Utviklet av Ola, Erik, Marius og Sindre</p>
            <p className="text-sm">
              &copy; 2024 Mailand 2ITA. Alle rettigheter forbeholdt.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Index
