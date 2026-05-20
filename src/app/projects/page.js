"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowRight, Zap, Expand } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Lightbox from "@/components/Lightbox";

export default function ProjectsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const projects = [
    {
      src: "/images/landmark-vi.jpg",
      title: "12kva and 6kva inverter — Landmark",
      desc: "12kva Hybrid Felicity and 6kva Hybrid Felicity Inverter with lithium battery backup.",
      location: "Landmark, Victoria Island",
      category: "Solar",
    },
    {
      src: "/images/gowan-estate.JPG",
      title: "7.5kva with lithium battery",
      desc: "Grid-tied solar system for a home at Gowon Estate",
      location: "Gowon Estate, Lagos",
      category: "Solar",
    },
    {
      src: "/images/ayobo.jpeg",
      title: "6kva Hybrid Inverter",
      desc: "Installation of 6kva Hybrid inverter and 2 pieces of 5kWh of Lithium Batteries",
      location: "Ayobo, Lagos",
      category: "Solar",
    },
    {
      src: "/images/ikorodu.jpeg",
      title: "12kva off-grid Inverter system with 2 pieces of 17kwh Lithium Batteries",
      desc: "Inverter and battery backup system for a shopping mall at Ikorodu",
      location: "Ikorodu, Lagos",
      category: "Solar",
    },
    {
      src: "/images/rich-land-estate.JPG",
      title: "House Wiring",
      desc: "House wiring at Rich Land Estate",
      location: "Ajah, Lagos",
      category: "Electrical",
    },
    {
      src: "/images/abule-egba.JPG",
      title: "Change-over and Gear-switch installation",
      desc: "Change-over and Gear-switch installation at a residence in Abule Egba",
      location: "Abule Egba, Lagos",
      category: "Maintenance",
    },
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % projects.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <main className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,#facc15_1px,transparent_1px)] bg-size-[40px_40px] opacity-10"></div>
        <div className="absolute top-0 right-0 w-100 h-100 bg-yellow-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our <span className="text-yellow-500">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A portfolio of completed solar and electrical projects powering homes and businesses across Lagos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== PROJECT GRID ===== */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-75 h-75 bg-yellow-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-yellow-50 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Recent Work
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-lg">
                Every project is a testament to our commitment to quality and reliability. Click any image to view full size.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-500 group hover:-translate-y-1">
                  {/* Image - Clickable */}
                  <button
                    onClick={() => openLightbox(i)}
                    className="relative h-56 bg-linear-to-br from-yellow-400 to-orange-500 overflow-hidden w-full cursor-zoom-in"
                    aria-label={`View ${project.title} full size`}
                  >
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    {/* Expand icon on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </button>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Want a Project Like These?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Let's discuss your solar or electrical needs. Free consultation, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2347035362804?text=Hello%20Jah%20Solar,%20I'd%20like%20a%20project%20like%20the%20ones%20on%20your%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-all duration-300 shadow-xl shadow-green-500/30"
              >
                <Zap className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Send a Message
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {lightboxOpen && (
        <Lightbox
          images={projects.map((p) => ({
            src: p.src,
            alt: p.title,
            title: p.title,
            location: p.location,
          }))}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </main>
  );
}