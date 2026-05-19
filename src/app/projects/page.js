"use client";

import Image from "next/image";
import { Sun, MapPin, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ProjectsPage() {
  const projects = [
    {
      image: "/images/projects/ikoyi-solar.jpg",
      title: "15kW Solar System — Ikoyi Residence",
      desc: "Full off-grid solar installation for a 6-bedroom duplex with lithium battery backup.",
      location: "Ikoyi, Lagos",
      category: "Solar",
    },
    {
      image: "/images/projects/surulere-office.jpg",
      title: "10kW Commercial Setup — Surulere Office",
      desc: "Grid-tied solar system for a 20-person office, reducing generator dependency by 80%.",
      location: "Surulere, Lagos",
      category: "Solar",
    },
    {
      image: "/images/projects/lekki-wiring.jpg",
      title: "House Rewiring — Lekki Phase 1",
      desc: "Complete electrical rewiring of a 4-bedroom bungalow, including DB installation.",
      location: "Lekki, Lagos",
      category: "Electrical",
    },
    {
      image: "/images/projects/yaba-inverter.jpg",
      title: "5kW Inverter System — Yaba",
      desc: "Inverter and battery backup system for a 3-bedroom flat with remote monitoring.",
      location: "Yaba, Lagos",
      category: "Solar",
    },
    {
      image: "/images/projects/ikeja-db.jpg",
      title: "Industrial DB Setup — Ikeja Warehouse",
      desc: "3-phase distribution board installation for a 500sqm warehouse facility.",
      location: "Ikeja, Lagos",
      category: "Electrical",
    },
    {
      image: "/images/projects/vi-maintenance.jpg",
      title: "Solar Maintenance — Victoria Island",
      desc: "Quarterly maintenance and panel cleaning for a 20kW commercial system.",
      location: "Victoria Island, Lagos",
      category: "Maintenance",
    },
  ];

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
                Every project is a testament to our commitment to quality and reliability.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-yellow-500/5 transition-all duration-500 group hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-56 bg-linear-to-br from-yellow-400 to-orange-500 overflow-hidden">
                    <Image
                      src={project.image}
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
                  </div>

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
    </main>
  );
}