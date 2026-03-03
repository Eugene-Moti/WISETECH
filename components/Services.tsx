"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Settings, 
  PanelTop, 
  Factory, 
  Network, 
  Wrench,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: PanelTop,
    title: "Electrical Installations & Panel Fabrication",
    description: "Custom power panels designed and built to meet your specific requirements with precision engineering.",
  },
  {
    icon: Settings,
    title: "Electric Motor Rewinding & Repair",
    description: "Professional rewinding and repair services for all types of industrial motors.",
  },
  {
    icon: Zap,
    title: "Power Factor Correction & Control Panels",
    description: "Optimize your power usage with our advanced power factor correction solutions.",
  },
  {
    icon: Factory,
    title: "Power House Construction",
    description: "Complete power house construction including installation of 1MVA transformers.",
  },
  {
    icon: Network,
    title: "Cabling, Termination & Commissioning",
    description: "End-to-end cabling solutions with professional termination and commissioning services.",
  },
  {
    icon: Wrench,
    title: "After-Sales Services & Project Supervision",
    description: "Comprehensive after-sales support, project supervision, and equipment sourcing.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-navy-800/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Our <span className="text-cyan-electric">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive electrical and mechanical engineering solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, delay: index * 0.1 } 
                },
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-8 rounded-2xl bg-navy-800/50 border border-white/5 hover:border-cyan-electric/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <motion.div
                className="relative inline-flex p-4 rounded-xl bg-cyan-electric/10 mb-6 group-hover:bg-cyan-electric/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <service.icon className="w-7 h-7 text-cyan-electric" />
                <div className="absolute inset-0 blur-lg bg-cyan-electric/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-electric transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn more link */}
              <motion.div
                className="flex items-center gap-2 text-cyan-electric text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </motion.div>

              {/* Border glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-electric to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
          }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-electric/10 border border-cyan-electric/30 rounded-lg text-cyan-electric hover:bg-cyan-electric/20 transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

