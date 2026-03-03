"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254 723 755 395",
    href: "tel:+254723755395"
  },
  {
    icon: Mail,
    label: "Email",
    value: "wisetechelectroservicesltd2024@gmail.com",
    href: "mailto:wisetechelectroservicesltd2024@gmail.com"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "P.O. Box 131, 00242 Kitengela\nNamanga Road, Nurick House\nKajiado County, Kenya",
    href: "#"
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 8:00 AM - 6:00 PM",
    href: "#"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Formspree for form submission
      const response = await fetch("https://formspree.io/f/xpwzgvqz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.", {
          icon: <CheckCircle className="w-5 h-5 text-green-500" />
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again or contact us directly.", {
        icon: <AlertCircle className="w-5 h-5 text-red-500" />
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-navy-900 relative">
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
            Get In <span className="text-cyan-electric">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? Contact us for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="p-8 rounded-2xl bg-navy-800/50 border border-white/5"
          >
            <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-navy-900/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-electric/50 transition-colors"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 XXX XXX XXX"
                    className="w-full px-4 py-3 rounded-lg bg-navy-900/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-electric/50 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-navy-900/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-electric/50 transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-navy-900/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-electric/50 transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-cyan-electric text-navy-900 font-semibold rounded-lg hover:bg-cyan-electric/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-navy-900 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      transition: { duration: 0.4, delay: index * 0.1 } 
                    },
                  }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-navy-800/30 border border-white/5 hover:border-cyan-electric/30 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-cyan-electric/10 group-hover:bg-cyan-electric/20 transition-colors">
                    <info.icon className="w-5 h-5 text-cyan-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="font-medium whitespace-pre-line">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
              }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <a
                href="https://wa.me/254723755395?text=Hello%20Wisetech%2C%20I'm%20interested%20in%20your%20electrical%20services..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-green-600/20 border border-green-600/30 hover:bg-green-600/30 transition-colors"
              >
                <span className="text-2xl">💬</span>
                <span className="font-medium">WhatsApp</span>
              </a>
              
              <a
                href="tel:+254723755395"
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-cyan-electric/10 border border-cyan-electric/30 hover:bg-cyan-electric/20 transition-colors"
              >
                <Phone className="w-5 h-5 text-cyan-electric" />
                <span className="font-medium">Call Now</span>
              </a>
            </motion.div>

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
              }}
              className="h-48 rounded-xl overflow-hidden bg-navy-800/30 border border-white/5"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5!2d36.7!3d1.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMjcnMDAuMCJTIDM2wrA0MicwMC4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wisetech Location - Kitengela"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

