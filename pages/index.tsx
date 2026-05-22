import { ShieldCheck, Flame, HardHat, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ShineIndiaSolutionsWebsite() {
  const services = [
    {
      title: "Fire Safety Training",
      desc: "Professional emergency preparedness, firefighting techniques, evacuation procedures, and mock drill programs.",
      icon: <Flame className="w-10 h-10" />,
    },
    {
      title: "Audit & Consulting",
      desc: "Comprehensive fire audits, fire risk assessments, compliance consulting, and fire modelling solutions.",
      icon: <ShieldCheck className="w-10 h-10" />,
    },
    {
      title: "AMC Services",
      desc: "Preventive and corrective maintenance services for fire alarm and firefighting systems.",
      icon: <CheckCircle2 className="w-10 h-10" />,
    },
    {
      title: "SITC Solutions",
      desc: "Supply, installation, testing & commissioning of complete fire protection systems.",
      icon: <HardHat className="w-10 h-10" />,
    },
  ];

  const ppeItems = [
    "Safety Gloves",
    "Safety Shoes",
    "Safety Helmets",
    "Safety Goggles",
    "Safety Aprons",
    "Reflective Jackets",
    "Respiratory Masks",
    "Full Body Harnesses",
  ];

  return (
    <>
      <Head>
        <title>Shine India Solutions — Complete Fire & Safety Solutions</title>
        <meta name="description" content="Shine India Solutions delivers reliable fire protection, industrial safety, AMC services, training programs, and PPE solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-white text-gray-800 font-sans min-h-screen">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-red-700">SHINE INDIA SOLUTIONS</h1>
              <p className="text-sm text-gray-500">Complete Fire & Safety Solutions</p>
            </div>
            <nav className="hidden md:flex gap-8 font-medium text-gray-700">
              <a href="#about" className="hover:text-red-700 transition">About</a>
              <a href="#services" className="hover:text-red-700 transition">Services</a>
              <a href="#ppe" className="hover:text-red-700 transition">PPE</a>
              <a href="#contact" className="hover:text-red-700 transition">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white py-24 px-6">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200')] bg-cover bg-center"></div>
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4" />
                Trusted Fire & Safety Partner
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Intelligent Fire & Safety Solutions
              </h2>
              <p className="text-lg leading-8 text-red-100 mb-8 max-w-2xl">
                Shine India Solutions delivers reliable fire protection, industrial safety, AMC services, training programs, and PPE solutions designed to safeguard people, property, and operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-white text-red-700 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition duration-300">
                  Get Consultation
                </a>
                <a href="#services" className="border border-white/40 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-red-700 transition duration-300">
                  Explore Services
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-10 shadow-2xl"
            >
              <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
              <div className="space-y-5 text-lg">
                {[
                  "Experienced Fire & Safety Experts",
                  "End-to-End Fire Protection Solutions",
                  "Industry-Compliant Safety Services",
                  "Reliable AMC & Technical Support",
                  "High-Quality Industrial PPE Supply",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium mb-6">About Company</div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">About Shine India Solutions</h2>
            <p className="text-lg leading-9 text-gray-600 max-w-5xl mx-auto">
              Shine India Solutions is a professionally managed organization specializing in fire protection systems, life safety solutions, industrial safety services, and PPE supply. We help industries, commercial facilities, and organizations maintain safety compliance, minimize operational risks, and ensure emergency preparedness with reliable and innovative fire & safety solutions.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium mb-6">Our Expertise</div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Professional Fire & Safety Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Delivering comprehensive safety solutions tailored to industrial, commercial, and infrastructure sectors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  whileHover={{ y: -10 }}
                  key={index}
                  className="bg-white p-8 rounded-[28px] shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300"
                >
                  <div className="text-red-700 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-8">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PPE */}
        <section id="ppe" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium mb-6">PPE Solutions</div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Industrial PPE Supply</h2>
            <p className="text-lg text-gray-600 mb-14 max-w-3xl mx-auto">
              We supply reliable, durable, and industry-compliant Personal Protective Equipment for industrial and workplace safety.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {ppeItems.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition duration-300 font-semibold"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 bg-gradient-to-r from-black to-gray-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium mb-6">Contact Us</div>
            <h2 className="text-5xl font-bold mb-6">Let&apos;s Build a Safer Workplace</h2>
            <p className="text-lg text-gray-300 mb-14 max-w-3xl mx-auto leading-8">
              Contact Shine India Solutions for professional fire protection, industrial safety solutions, AMC services, audits, and PPE supply.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <Phone className="w-10 h-10 mx-auto mb-4 text-red-400" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+91 XXXXX XXXXX</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <Mail className="w-10 h-10 mx-auto mb-4 text-red-400" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">info@shineindiasolutions.com</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <MapPin className="w-10 h-10 mx-auto mb-4 text-red-400" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-400 py-8 text-center border-t border-gray-800">
          <p>© 2026 Shine India Solutions. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}
