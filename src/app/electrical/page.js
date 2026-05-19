"use client";

import { Zap, Wrench, Home, Building, AlertTriangle, CheckCircle, ArrowRight, Phone, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ElectricalPage() {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "House Wiring & Rewiring",
      desc: "Safe, code-compliant electrical wiring for new constructions and renovations across Lagos.",
      features: ["Full house wiring", "Partial rewiring", "Conduit & surface wiring", "Safety certificate issued"],
      gradient: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
      iconBg: "bg-blue-600",
      accent: "text-blue-600",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Industrial Electrical Works",
      desc: "Heavy-duty electrical solutions for factories, warehouses, and commercial buildings.",
      features: ["3-phase installations", "Distribution boards", "Motor controls", "Power factor correction"],
      gradient: "from-yellow-50 to-orange-50",
      border: "border-yellow-200",
      iconBg: "bg-yellow-500",
      accent: "text-yellow-600",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Repairs & Troubleshooting",
      desc: "Fast diagnosis and repair of electrical faults. Emergency service available across Lagos.",
      features: ["Short circuit repairs", "Breaker replacement", "Earthing/grounding", "Same-day response"],
      gradient: "from-green-50 to-emerald-50",
      border: "border-green-200",
      iconBg: "bg-green-600",
      accent: "text-green-600",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-700 to-blue-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[30px_30px] opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Zap className="w-16 h-16 text-white" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Electrical Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Professional electrical installations, repairs, and maintenance across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-75 h-75 bg-blue-50 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-lg">
                Safe, reliable, and professional electrical services for every need.
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

      {/* ===== EMERGENCY ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-red-600 to-red-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[20px_20px] opacity-15"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <AlertTriangle className="w-16 h-16 text-white" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              24/7 Electrical Emergency?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Sparking outlets, power trips, or burning smell? Don't wait. Call us immediately — we respond fast across Lagos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2347035362804"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                Call 0703 536 2804
              </a>
              <a
                href="tel:+2348128830809"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call 0812 883 0809
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== SAFETY GUARANTEE ===== */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-75 h-75 bg-blue-50 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <div className="inline-flex bg-blue-100 text-blue-600 p-4 rounded-2xl mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Safety Is Our Priority
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Every electrical job is performed to the highest safety standards. We use quality materials, 
              follow proper codes, and issue certificates where required. Your safety is never compromised.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/30"
            >
              Request Electrical Service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}