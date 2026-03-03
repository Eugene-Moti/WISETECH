"use client";

import { motion } from "framer-motion";
import { Zap, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Electrical Installations",
  "Panel Fabrication",
  "Motor Rewinding",
  "Power Factor Correction",
  "Power House Construction",
  "Cabling & Commissioning",
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.a
              href="#home"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
            >
              <div className="relative">
                <Zap className="w-8 h-8 text-cyan-electric" />
                <div className="absolute inset-0 blur-md bg-cyan-electric/50" />
              </div>
              <span className="text-xl font-bold">
                WISE<span className="text-cyan-electric">TECH</span>
              </span>
            </motion.a>
            <p className="text-gray-400 text-sm">
              Specialists in Mechanical and Electrical Engineering Works in Kenya.
            </p>
            <div className="space-y-2 pt-4">
              <a
                href="tel:+254723755395"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-electric transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +254 723 755 395
              </a>
              <a
                href="mailto:wisetechelectroservicesltd2024@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-electric transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                wisetechelectroservicesltd2024@gmail.com
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  P.O. Box 131, 00242 Kitengela
                  <br />
                  Namanga Road, Nurick House
                  <br />
                  Kajiado County, Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-400 hover:text-cyan-electric transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#services");
                    }}
                    className="text-gray-400 hover:text-cyan-electric transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-electric/20 hover:text-cyan-electric transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-electric/20 hover:text-cyan-electric transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-electric/20 hover:text-cyan-electric transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-electric/20 hover:text-cyan-electric transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Follow us on social media for the latest updates and project showcases.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Wisetech Electroservices Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-electric transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-electric transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

