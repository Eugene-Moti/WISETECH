"use client";

import { useEffect } from "react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ClientsTestimonials from "@/components/ClientsTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  useEffect(() => {
    // Smooth scroll polyfill for older browsers
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";
    
    return () => {
      html.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen bg-navy-900 text-white">
      <Toaster 
        position="top-right" 
        richColors 
        toastOptions={{
          style: {
            background: '#0f172a',
            border: '1px solid #00f0ff',
            color: '#fff',
          },
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ClientsTestimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

