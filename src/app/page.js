"use client";

import { Sun, Zap, Wrench, ArrowRight, CheckCircle, Users, Plug, House } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ===== HERO SECTION with Animated Gradient ===== */}
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Animated gradient background */}
  <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="absolute top-0 right-0 w-75 h-75 sm:w-12 sm:h-125 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-62.5 h-62.5 sm:w-100 sm:h-100 bg-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
    {/* Grid pattern overlay */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "radial-gradient(circle, #facc15 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    ></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center lg:text-left"
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-yellow-500/10 backdrop-blur border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          Serving Lagos & Beyond
        </motion.div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-white px-2 sm:px-0">
          Power Your World With
          <span className="bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            {" "}Jah Solar Energy
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
          Expert solar installation and electrical services across Nigeria. 
          Licensed engineer delivering reliable power solutions for homes and businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 sm:px-0">
          <motion.a
            href="https://wa.me/2347035362804?text=Hello%20Jah%20Solar,%20I%20need%20a%20quote%20for%20solar%20installation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-green-500 to-green-600 text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-xl shadow-green-500/30"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            Get Free Quote on WhatsApp
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/10 transition-all duration-300"
            >
              View Our Projects
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Stats - visible only on small screens */}
        <div className="grid grid-cols-3 gap-3 mt-8 lg:hidden px-2">
          {[
            { icon: <House className="w-4 h-4" />, label: "500+ Homes" },
            { icon: <Plug className="w-4 h-4" />, label: "1,000+ Installs" },
            { icon: <Users className="w-4 h-4" />, label: "100% Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-3 text-center">
              <div className="text-yellow-500 flex justify-center mb-1">{stat.icon}</div>
              <p className="text-white font-bold text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Visual - Desktop only */}
      <motion.div
        className="hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-br from-yellow-500 to-orange-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
          <div className="relative bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-10 text-center backdrop-blur">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sun className="w-24 h-24 text-yellow-500" />
            </motion.div>
            <p className="text-yellow-400 font-bold text-2xl mb-2">
              Jah Solar Energy
            </p>
            <p className="text-gray-400">Your Trusted Power Partner</p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: <House className="w-5 h-5" />, label: "500+ Homes" },
                { icon: <Plug className="w-5 h-5" />, label: "1,000+ Installations" },
                { icon: <Users className="w-5 h-5" />, label: "100% Satisfaction" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-yellow-500 flex justify-center mb-1">{stat.icon}</div>
                  <p className="text-white font-bold text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>

  {/* Scroll indicator */}
  <motion.div
    className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
      <div className="w-1 sm:w-1.5 h-2.5 sm:h-3 bg-yellow-500 rounded-full mt-2 animate-bounce"></div>
    </div>
  </motion.div>
</section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-75 h-75 bg-yellow-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-yellow-50 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto text-lg">
                Complete solar and electrical solutions for homes, offices, and industrial facilities across Lagos.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sun className="w-6 h-6" />,
                bgGradient: "from-yellow-50 to-orange-50",
                border: "border-yellow-200",
                iconBg: "bg-yellow-500",
                accentColor: "text-yellow-600",
                link: "/solar",
                title: "Solar Installation",
                items: [
                  "Grid-tied & off-grid systems",
                  "Residential & commercial",
                  "Inverter & battery setup",
                  "Solar panel maintenance",
                ],
              },
              {
                icon: <Zap className="w-6 h-6" />,
                bgGradient: "from-blue-50 to-cyan-50",
                border: "border-blue-200",
                iconBg: "bg-blue-600",
                accentColor: "text-blue-600",
                link: "/electrical",
                title: "Electrical Works",
                items: [
                  "House wiring & rewiring",
                  "Distribution board setup",
                  "Industrial electrical works",
                  "Electrical audits & repairs",
                ],
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                bgGradient: "from-green-50 to-emerald-50",
                border: "border-green-200",
                iconBg: "bg-green-600",
                accentColor: "text-green-600",
                link: "/contact",
                title: "Maintenance & Support",
                items: [
                  "Routine system checks",
                  "Troubleshooting & repairs",
                  "Battery replacement",
                  "Emergency call-out service",
                ],
              },
              {
                icon: <Zap className="w-6 h-6" />,
                bgGradient: "from-purple-50 to-pink-50",
                border: "border-purple-200",
                iconBg: "bg-purple-600",
                accentColor: "text-purple-600",
                link: "/electrical",
                title: "Transformer Installation",
                items: [
                  "Step-up & step-down units",
                  "Distribution transformers",
                  "Industrial & commercial",
                  "Maintenance & repairs",
                ],
              },
            ].map((service, i) => (
              <AnimateOnScroll key={i}>
                <div
                  className={`bg-linear-to-br ${service.bgGradient} rounded-2xl p-8 border ${service.border} hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-500 group hover:-translate-y-1`}
                >
                  <div className={`${service.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-3 text-gray-600 text-sm mb-8">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 ${service.accentColor} mt-0.5 shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className={`inline-flex items-center gap-1 ${service.accentColor} font-semibold text-sm hover:gap-2 transition-all`}
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 lg:py-28 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Why Choose <span className="text-yellow-500">Jah Solar Energy and Electrical</span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto text-lg">
                We don't just install. We engineer solutions that last.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <CheckCircle className="w-6 h-6" />, title: "Licensed Engineer", desc: "Certified professional with verified credentials and years of hands-on experience." },
              { icon: <Sun className="w-6 h-6" />, title: "Quality Products", desc: "We use only trusted, warrantied equipment from leading manufacturers." },
              { icon: <Zap className="w-6 h-6" />, title: "Fast Response", desc: "Same-day call-out across Lagos. We respect your time and urgency." },
              { icon: <Wrench className="w-6 h-6" />, title: "Ongoing Support", desc: "We're a call away even after installation. Your satisfaction is our priority." },
            ].map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center group hover:-translate-y-1">
                  <div className="inline-flex bg-yellow-500/10 text-yellow-500 p-3 rounded-xl mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-orange-500"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[30px_30px] opacity-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Power Up?
            </h2>
            <p className="text-gray-800 text-lg mb-10 max-w-xl mx-auto">
              Get a free, no-obligation quote for your solar or electrical project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2347035362804?text=Hello%20Jah%20Solar,%20I%20need%20a%20quote%20for%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-all duration-300 shadow-2xl shadow-green-500/40 hover:shadow-green-500/60"
              >
                <Zap className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                Send a Message
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}