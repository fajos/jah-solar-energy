"use client";

import { Phone, Mail, MapPin, Clock, Send, Sun, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ikorodu.jpeg"
            alt="Contact Jah Solar"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to start your project? Reach out and we'll get back to you within hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-75 h-75 bg-yellow-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-yellow-50 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone className="w-6 h-6" />,
                      title: "Phone",
                      content: (
                        <>
                          <a href="tel:+2347035362804" className="text-gray-600 hover:text-yellow-500 transition-colors">
                            0703 536 2804
                          </a>
                          <br />
                          <a href="tel:+2348128830809" className="text-gray-600 hover:text-yellow-500 transition-colors">
                            0812 883 0809
                          </a>
                        </>
                      ),
                    },
                    {
                      icon: <Mail className="w-6 h-6" />,
                      title: "Email",
                      content: (
                        <a href="mailto:jaholaomo@gmail.com" className="text-gray-600 hover:text-yellow-500 transition-colors">
                          jaholaomo@gmail.com
                        </a>
                      ),
                    },
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      title: "Location",
                      content: <p className="text-gray-600">Lagos, Nigeria</p>,
                    },
                    {
                      icon: <Clock className="w-6 h-6" />,
                      title: "Working Hours",
                      content: (
                        <>
                          <p className="text-gray-600">Mon — Sat: 8:00 AM — 6:00 PM</p>
                          <p className="text-gray-500 text-sm">Emergency: 24/7 via phone</p>
                        </>
                      ),
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="bg-yellow-100 p-3 rounded-xl group-hover:bg-yellow-500 transition-colors duration-300 shrink-0">
                        <div className="text-yellow-600 group-hover:text-white transition-colors duration-300">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                        <div className="text-sm">{item.content}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-10">
                  <a
                    href="https://wa.me/2347035362804?text=Hello%20Jah%20Solar,%20I'd%20like%20to%20discuss%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-4 rounded-full font-semibold hover:bg-green-400 transition-all duration-300 shadow-xl shadow-green-500/30 hover:shadow-green-500/50"
                  >
                    <Zap className="w-5 h-5" />
                    Quick Chat on WhatsApp
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact Form */}
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}