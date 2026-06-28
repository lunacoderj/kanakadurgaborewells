'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin, ChevronRight, Zap, ClipboardList } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative bg-[#020617] text-gray-300 pt-24 pb-8 border-t border-cyan-900/50 overflow-hidden z-20">
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-900 to-transparent" />
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]" 
      />

      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ backgroundPosition: ['0px 0px', '64px 64px'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" 
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden flex items-center justify-center p-1 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Image src="/images/logo-transparent.png" alt="Kanakadurga Logo" fill sizes="80px" className="object-cover" />
              </div>
              <div>
                <div className="font-black text-white text-xl tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">KANAKADURGA</div>
                <div className="text-yellow-400 text-xs font-bold tracking-widest uppercase flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Borewells & Enterprises
                </div>
              </div>
            </div>
            <p className="text-sm text-cyan-100/70 leading-relaxed">
              Pioneering advanced drilling solutions with state-of-the-art technology. Reliable, efficient, and precise services for industrial, agricultural, and residential needs.
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { icon: MapPin, href: "https://maps.app.goo.gl/b6DgeMr6psycnPCd7", color: "hover:text-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]", label: "Google Maps", target: "_blank" },
                { icon: Phone, href: "tel:+917998998889", color: "hover:text-pink-500 hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]", label: "Call Us" },
                { icon: FaWhatsapp, href: "https://wa.me/917998998889", color: "hover:text-green-400 hover:shadow-[0_0_10px_rgba(74,222,128,0.5)]", label: "WhatsApp", target: "_blank" },
                { icon: ClipboardList, href: "#quote", color: "hover:text-yellow-400 hover:shadow-[0_0_10px_rgba(250,204,21,0.5)]", label: "Get Quote" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  title={social.label}
                  target={social.target}
                  rel={social.target ? "noopener noreferrer" : undefined}
                  className={`w-10 h-10 rounded-full bg-cyan-950/40 border border-cyan-800/50 flex items-center justify-center text-cyan-400 transition-all duration-300 ${social.color} hover:-translate-y-1`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-sm shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about-us' },
                { name: 'Our Projects', path: '/#projects' },
                { name: 'Equipments', path: '/equipments' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="group flex items-center text-sm text-cyan-100/70 hover:text-cyan-400 transition-colors">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-cyan-400" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-sm shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              Our Expertise
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Borewell Drilling', path: '/services#drilling' },
                { name: 'Borewell Cleaning', path: '/services#cleaning' },
                { name: 'Pump Installation', path: '/services#pump-installation' },
                { name: 'Industrial Borewells', path: '/services#industrial' },
                { name: 'Reboring Services', path: '/services#reboring' }
              ].map((service, i) => (
                <li key={i}>
                  <Link href={service.path} className="group flex items-center text-sm text-cyan-100/70 hover:text-blue-400 transition-colors">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-400" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-sm shadow-[0_0_8px_rgba(250,204,21,0.8)]"></span>
              Connect
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-800/50 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <a href="https://maps.app.goo.gl/b6DgeMr6psycnPCd7" target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-100/70 group-hover:text-cyan-400 transition-colors mt-1">
                  12-34, Main Road, Gajuwaka,<br />Visakhapatnam, AP - 530026
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-800/50 flex items-center justify-center flex-shrink-0 group-hover:border-blue-400 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all">
                  <FaWhatsapp className="w-5 h-5 text-green-400" />
                </div>
                <a href="https://wa.me/917998998889" target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-100/70 group-hover:text-green-400 transition-colors font-medium">
                  +91 79989 98889
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-yellow-950/40 border border-yellow-800/50 flex items-center justify-center flex-shrink-0 group-hover:border-yellow-400 group-hover:shadow-[0_0_12px_rgba(250,204,21,0.3)] transition-all">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <a href="mailto:machenderyedugani@email.com" className="text-sm text-cyan-100/70 group-hover:text-yellow-400 transition-colors">
                  machenderyedugani@email.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 border-t border-cyan-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-cyan-100/50"
        >
          <p className="flex items-center gap-2">
            <span className="text-cyan-400">⚡</span>
            &copy; {new Date().getFullYear()} Kanakadurga Borewells & Enterprises. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-cyan-400 hover:after:w-full after:transition-all">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-400 hover:after:w-full after:transition-all">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
