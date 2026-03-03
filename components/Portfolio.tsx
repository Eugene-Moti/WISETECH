"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, MapPin } from "lucide-react";

interface Project {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  services: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Swara Cement Limited",
    company: "Swara Cement Ltd",
    location: "Athi River",
    date: "November 2023",
    description: "Complete electrical infrastructure project including main power panel fabrication, power factor correction, and full plant commissioning.",
    services: [
      "Main power panel fabrication",
      "Power factor correction systems",
      "Control panels construction",
      "Power house with 1MVA transformer",
      "Main cabling & motor networking",
      "Testing & commissioning"
    ],
    testimonial: {
      quote: "Ability and passion above average — no hesitation in recommending.",
      author: "Philip Ndegwa",
      role: "Managing Director"
    },
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Winem Enterprise Ltd",
    company: "Winem Enterprise Ltd",
    location: "Kitengela",
    date: "February 2024",
    description: "Comprehensive electrical installation including cable supply, panel fabrication, motor termination, and lighting system installation.",
    services: [
      "Cable supply & installation",
      "Power & control panels",
      "3-phase motor termination",
      "Lighting system installation",
      "Testing & commissioning"
    ],
    testimonial: {
      quote: "Successfully completed within time, handed over after testing — recommend to any client.",
      author: "Catherine Makau",
      role: "Managing Director"
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-cyan-electric">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing our expertise through successful industrial installations and engineering projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, delay: index * 0.2 } 
                },
              }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-navy-800/50 border border-white/5 hover:border-cyan-electric/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-cyan-electric/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="p-4 rounded-full bg-cyan-electric/30 backdrop-blur-sm">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Date badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-navy-900/80 backdrop-blur-sm text-sm text-cyan-electric">
                  {project.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-cyan-electric text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-electric transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
                
                {/* Services preview */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.services.slice(0, 3).map((service, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-400"
                    >
                      {service}
                    </span>
                  ))}
                  {project.services.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-cyan-electric/10 text-cyan-electric">
                      +{project.services.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-navy-800 rounded-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-navy-900/50 hover:bg-navy-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 -mt-16 relative">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-4 h-4 text-cyan-electric" />
                  <span className="text-cyan-electric">{selectedProject.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-6">{selectedProject.description}</p>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Services Provided</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {selectedProject.services.map((service, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-electric" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-electric/10 to-transparent border border-cyan-electric/20">
                  <p className="text-lg italic text-gray-300 mb-4">
                    "{selectedProject.testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-cyan-electric">
                      {selectedProject.testimonial.author}
                    </p>
                    <p className="text-sm text-gray-400">
                      {selectedProject.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

