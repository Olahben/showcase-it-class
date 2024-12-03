import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  className?: string
}

const ProjectCard = ({
  title,
  description,
  image,
  className
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300',
        className
      )}
    >
      <div className="rounded-md mb-4">
        <img src={image} className="object-cover rounded-md" alt={title} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default ProjectCard
