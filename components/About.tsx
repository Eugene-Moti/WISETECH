"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Briefcase, ClipboardList } from "lucide-react";

const values = [
  { icon: Award, name: "Integrity", description: "Building trust through honest, ethical practices" },
  { icon: Users, name: "Customer Focus", description: "Exceeding client expectations in every project" },
  { icon: Briefcase, name: "Innovativeness", description: "Embracing cutting-edge solutions" },
  { icon: ClipboardList, name: "Professionalism", description: "Delivering excellence with expertise" },
  { icon: Users, name: "Team Work", description: "Collaborating for superior results" },
];

const orgChart = [
  { role: "CEO / Technical Director", name: "Jacob Obiero Marambah", level: 1 },
  { role: "Senior Technicians", name: "Team Lead", level: 2 },
  { role: "Technicians", name: "Execution Team", level: 3 },
  { role: "Clerical Works Officers", name: "Support Staff", level: 4 },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-navy-900 relative">
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
            About <span className="text-cyan-electric">Wisetech</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building trust and long-lasting relationships through exceptional electrical-based services with professionalism.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="p-8 rounded-2xl bg-navy-800/50 border border-white/5 hover:border-cyan-electric/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-cyan-electric/10">
                <Eye className="w-6 h-6 text-cyan-electric" />
              </div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To provide adequate & quality services that exceeds the expectations of our esteemed customers.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="p-8 rounded-2xl bg-navy-800/50 border border-white/5 hover:border-cyan-electric/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-cyan-electric/10">
                <Target className="w-6 h-6 text-cyan-electric" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Build trust and long-lasting relationships. Provide exceptional electrical-based services with professionalism.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.4, delay: index * 0.1 } 
                  },
                }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-navy-800/30 border border-white/5 hover:border-cyan-electric/30 transition-all text-center group"
              >
                <div className="inline-flex p-3 rounded-lg bg-cyan-electric/10 mb-4 group-hover:bg-cyan-electric/20 transition-colors">
                  <value.icon className="w-5 h-5 text-cyan-electric" />
                </div>
                <h4 className="font-semibold mb-2">{value.name}</h4>
                <p className="text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Organization Chart */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">Organization Structure</h3>
          <div className="max-w-md mx-auto">
            {orgChart.map((item, index) => (
              <motion.div
                key={item.role}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    transition: { duration: 0.4, delay: index * 0.15 } 
                  },
                }}
                className="relative"
              >
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full sm:w-4/5 p-4 rounded-lg bg-navy-800/50 border border-white/5 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <p className="text-cyan-electric font-medium">{item.role}</p>
                    <p className="text-gray-400 text-sm">{item.name}</p>
                  </div>
                </div>
                {index < orgChart.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-cyan-electric/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Details */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="p-8 rounded-2xl bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-white/5"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Company Registration</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-gray-400 text-sm">Registration Number</p>
              <p className="font-semibold">PVT-GYU5EBLD</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Registration Date</p>
              <p className="font-semibold">20 Dec 2023</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">PIN Number</p>
              <p className="font-semibold">P052289713G</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Director</p>
              <p className="font-semibold">Jacob Obiero Marambah</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

