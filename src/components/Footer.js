import Link from "next/link";
import { Sun, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-6 h-6 text-yellow-500" />
              <span className="font-bold text-white text-lg">Jah Solar Energy</span>
            </div>
            <p className="text-sm">
              Your trusted partner for solar and electrical solutions in Lagos, Nigeria.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solar" className="hover:text-yellow-500 transition-colors">Solar Services</Link></li>
              <li><Link href="/electrical" className="hover:text-yellow-500 transition-colors">Electrical Works</Link></li>
              <li><Link href="/projects" className="hover:text-yellow-500 transition-colors">Our Projects</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <a href="tel:+2347035362804" className="hover:text-yellow-500">0703 536 2804</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <a href="tel:+2348128830809" className="hover:text-yellow-500">0812 883 0809</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-500" />
                <a href="mailto:jaholaomo@gmail.com" className="hover:text-yellow-500">jaholaomo@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Jah Solar Energy & Electrical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}