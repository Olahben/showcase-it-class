import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Welcome to Our IT Class
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the amazing projects our students have created through hands-on
            learning and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Student Portfolio Platform"
            description="A collaborative platform where students can showcase their work and connect with potential employers."
          />
          <ProjectCard
            title="Smart Learning Dashboard"
            description="An interactive dashboard that helps students track their progress and manage their learning journey."
          />
          <ProjectCard
            title="Community Forum"
            description="A space for students to share knowledge, ask questions, and help each other grow."
          />
        </div>
      </div>
    </div>
  );
};

export default Index;