"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Ability and passion above average — no hesitation in recommending.",
    author: "Philip Ndegwa",
    role: "Managing Director",
    company: "Swara Cement Ltd",
    location: "Athi River",
    phone: "+254 700 000 000"
  },
  {
    id: 2,
    quote: "Successfully completed within time, handed over after testing — recommend to any client.",
    author: "Catherine Makau",
    role: "Managing Director",
    company: "Winem Enterprise Ltd",
    location: "Kitengela",
    phone: "+254 700 000 000"
  }
];

export default function ClientsTestimonials() {
  return (
    <section id="clients" className="py-20 lg:py-32 bg-navy-800/30 relative">
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
            What Our <span className="text-cyan-electric">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by leading companies in Kenya's industrial sector.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
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
              className="relative p-8 rounded-2xl bg-navy-800/50 border border-white/5 hover:border-cyan-electric/30 transition-colors"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6 p-3 rounded-xl bg-cyan-electric/10 border border-cyan-electric/20">
                <Quote className="w-6 h-6 text-cyan-electric" />
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-gray-300 italic mb-6 pt-4">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-cyan-electric">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
                
                {/* Company badge */}
                <div className="hidden sm:block px-4 py-2 rounded-lg bg-white/5 text-center">
                  <p className="text-sm font-medium">{testimonial.company}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <a 
                  href={`tel:${testimonial.phone.replace(/\s/g, '')}`}
                  className="text-sm text-gray-400 hover:text-cyan-electric transition-colors"
                >
                  📞 {testimonial.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
          }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "20+", label: "Projects Completed" },
            { value: "15+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-navy-900/50 border border-white/5"
            >
              <p className="text-3xl md:text-4xl font-bold text-cyan-electric mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

