"use client";

import { Sun, Zap, Battery, Home, Building, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function SolarPage() {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Solar",
      desc: "Power your home with clean, reliable solar energy. We design systems from 1kW to 20kW for apartments, duplexes, and estates across Lagos.",
      features: ["Roof-mounted panels", "Inverter & battery backup", "Grid-tied or off-grid", "24/7 power guarantee"],
      gradient: "from-yellow-50 to-orange-50",
      border: "border-yellow-200",
      iconBg: "bg-yellow-500",
      accent: "text-yellow-600",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial Solar",
      desc: "Reduce your business electricity costs by up to 70%. Custom solutions for offices, hotels, schools, and factories.",
      features: ["High-capacity systems", "Energy audit included", "Flexible payment options", "Ongoing maintenance"],
      gradient: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
      iconBg: "bg-blue-600",
      accent: "text-blue-600",
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: "Inverter & Battery Systems",
      desc: "Already have panels or just need backup power? We install and maintain inverter systems with premium batteries.",
      features: ["Pure sine wave inverters", "Lithium & tubular batteries", "Smart monitoring", "Warranty on all parts"],
      gradient: "from-green-50 to-emerald-50",
      border: "border-green-200",
      iconBg: "bg-green-600",
      accent: "text-green-600",
    },
  ];

  const processSteps = [
    { step: "01", title: "Free Consultation", desc: "We assess your energy needs and site conditions." },
    { step: "02", title: "Custom Design", desc: "Engineer a solar system tailored to your requirements." },
    { step: "03", title: "Professional Install", desc: "Our certified team installs with precision and safety." },
    { step: "04", title: "Ongoing Support", desc: "We monitor and maintain your system for peak performance." },
  ];

  return (
    <main className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/lagos.JPG"
            alt="Solar Installation"
            fill
            className="object-cover object-right lg:object-center"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Reliable <span className="text-yellow-500">Solar</span> Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Cut your electricity bills and enjoy 24/7 power with our expert solar installations.
              We design and install high-performance systems for homes and businesses across Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/2347035362804?text=Hello%20Jah%20Solar,%20I%20need%20a%20solar%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20"
              >
                Get Free Quote
              </a>
              <Link
                href="/projects"
                className="bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-75 h-75 bg-yellow-50 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-lg">
                Comprehensive solar solutions designed for Nigerian homes and businesses.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimateOnScroll key={i}>
                <div className={`bg-linear-to-br ${service.gradient} rounded-2xl p-8 border ${service.border} hover:shadow-xl transition-all duration-500 group hover:-translate-y-1`}>
                  <div className={`${service.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className={`w-4 h-4 ${service.accent} shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                How It <span className="text-yellow-500">Works</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto text-lg">
                From first contact to full installation — a seamless process.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="relative text-center group">
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                    <span className="text-5xl font-black text-yellow-500/30 group-hover:text-yellow-500/50 transition-colors">
                      {item.step}
                    </span>
                    <h3 className="text-white font-bold text-lg mt-4 mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-yellow-500/30"></div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-75 h-75 bg-yellow-50 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Go Solar?
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
              Get a free consultation and custom quote for your solar installation project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2347035362804?text=Hello%20Jah%20Solar,%20I%20need%20a%20solar%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-all duration-300 shadow-xl shadow-green-500/30"
              >
                <Zap className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
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