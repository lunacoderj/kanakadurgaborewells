'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Droplets, Info, FolderGit2, Truck, Star, PhoneCall, MoreVertical, X } from 'lucide-react';
import { QuoteModal } from '../QuoteModal';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '../common/LanguageSwitcher';

export const MobileNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); // Default visible
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Calculate how many icons fit based on available width
      // 120px (Logo min) + 40px (More button) + 40px (Padding/Margins) = ~200px reserved
      const availableWidth = window.innerWidth - 200;
      // Each icon button is around 40-44px wide
      const itemWidth = 44; 
      let count = Math.floor(availableWidth / itemWidth);
      if (count < 0) count = 0;
      if (count > navItems.length) count = navItems.length;
      setVisibleCount(count);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (pathname === '/') {
        const sections = ['home', 'services', 'about-us', 'projects', 'equipments', 'reviews', 'contact'];
        let current = '';
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200) {
              current = section;
            }
          }
        }
        if (current) {
          setActiveSection(current);
        } else if (scrollY < 100) {
          setActiveSection('home');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Services', href: '/services', icon: Droplets },
    { label: 'About', href: '/about-us', icon: Info },
    { label: 'Projects', href: '/#projects', icon: FolderGit2 },
    { label: 'Equipments', href: '/equipments', icon: Truck },
    { label: 'Reviews', href: '/reviews', icon: Star },
    { label: 'Contact', href: '/contact', icon: PhoneCall },
  ];

  const checkIsActive = (path: string) => {
    if (pathname === '/') {
      const section = path === '/' ? 'home' : path.replace(/[\/#]/g, '');
      return activeSection === section;
    }
    if (path.startsWith('/#')) {
      return false;
    }
    return pathname === path || (path !== '/' && pathname.startsWith(path.replace(/#.*/, '')));
  };

  const primaryItems = navItems.slice(0, visibleCount);
  const secondaryItems = navItems.slice(visibleCount);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#020617]/80 backdrop-blur-xl border-b border-cyan-900/30 px-3 py-2 flex justify-between items-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 z-50 shrink-0">
          <div className="w-8 h-8 relative shrink-0 bg-white/5 rounded-lg p-1 border border-cyan-500/20">
            <Image src="https://gf2wtazfdibnozca.public.blob.vercel-storage.com/logo-transparent.png" alt="Kanakadurga Logo" fill sizes="32px" className="object-contain" priority />
          </div>
          <div className="flex flex-col w-[80px] sm:w-[120px]">
            <div className="font-black text-[11px] sm:text-xs leading-none tracking-wider text-white truncate">KANAKADURGA</div>
            <div className="text-[7px] sm:text-[8px] font-bold leading-tight tracking-widest mt-0.5 text-cyan-400 truncate">BOREWELLS</div>
          </div>
        </Link>

        {/* Nav Links Section */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0" ref={dropdownRef}>
          <LanguageSwitcher />
          {primaryItems.map((item) => {
            const isActive = checkIsActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative p-2 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
                aria-label={item.label}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <motion.div 
                    layoutId="activeTabMobile"
                    className="absolute -bottom-[9px] w-4 h-[2px] bg-cyan-400 rounded-t-full shadow-[0_-2px_8px_rgba(34,211,238,1)]"
                  />
                )}
              </Link>
            );
          })}

          {/* More Button - Only show if there are secondary items */}
          {secondaryItems.length > 0 && (
            <div className="relative ml-1">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  menuOpen 
                    ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
                aria-label="More Menu"
              >
                {menuOpen ? <X size={18} /> : <MoreVertical size={18} />}
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-[calc(100%+12px)] w-52 bg-[#0f172a]/95 backdrop-blur-xl border border-cyan-900/50 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-50 py-2"
                  >
                    {secondaryItems.map((item) => {
                      const isActive = checkIsActive(item.href);
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                            isActive 
                              ? 'text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-400' 
                              : 'text-gray-300 hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                          }`}
                        >
                          <Icon size={18} />
                          <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                        </Link>
                      );
                    })}
                    <div className="px-4 py-3 border-t border-cyan-900/30 mt-1">
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          setQuoteModalOpen(true);
                        }}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 rounded-xl text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
                      >
                        Get Quote
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
          {secondaryItems.length === 0 && (
            <div className="ml-2">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-3 py-1.5 rounded-lg text-[10px] transition-all shadow-[0_0_10px_rgba(6,182,212,0.4)] whitespace-nowrap"
              >
                Get Quote
              </button>
            </div>
          )}
        </div>
      </div>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
};

