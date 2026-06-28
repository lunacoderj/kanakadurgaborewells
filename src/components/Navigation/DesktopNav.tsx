'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { QuoteModal } from '../QuoteModal';
import { usePathname } from 'next/navigation';
import { ChevronDown, Phone, Home, Droplets, Info, FolderGit2, Truck, Star, PhoneCall, MoreVertical, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '../common/LanguageSwitcher';

export const DesktopNav = () => {
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [displayMode, setDisplayMode] = useState<'text' | 'icons' | 'dropdown'>('text');
  const [visibleIconCount, setVisibleIconCount] = useState(7);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'HOME', href: '/', icon: Home },
    { label: 'SERVICES', href: '/services', icon: Droplets, isDropdown: true },
    { label: 'ABOUT US', href: '/about-us', icon: Info },
    { label: 'PROJECTS', href: '/#projects', icon: FolderGit2 },
    { label: 'EQUIPMENTS', href: '/equipments', icon: Truck },
    { label: 'REVIEWS', href: '/reviews', icon: Star },
    { label: 'CONTACT US', href: '/contact', icon: PhoneCall },
  ];

  const services = [
    { label: 'Borewell Drilling', href: '/services#drilling' },
    { label: 'Borewell Cleaning', href: '/services#cleaning' },
    { label: 'Borewell Repair', href: '/services#repair' },
    { label: 'Reboring', href: '/services#reboring' },
    { label: 'Pump Installation', href: '/services#pump-installation' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
        setServiceMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      // Calculate available width for navigation links
      // Reserved: Logo (~250px) + CTA (~150px) + Padding/Margins (~100px) = ~500px
      const availableWidth = width - 500;

      // Text mode requires ~650px to look good
      if (availableWidth >= 650) {
        setDisplayMode('text');
        setVisibleIconCount(navItems.length);
      } else {
        // Switch to icons
        const itemWidth = 48; // Width per icon button
        let count = Math.floor(availableWidth / itemWidth);
        
        if (count >= navItems.length) {
          setDisplayMode('icons');
          setVisibleIconCount(navItems.length);
        } else {
          setDisplayMode('dropdown');
          // Reserve space for the "More" button
          const countWithMore = Math.floor((availableWidth - 48) / itemWidth);
          setVisibleIconCount(Math.max(1, countWithMore));
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navItems.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

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


  const isActive = (path: string) => {
    if (pathname === '/') {
      const section = path === '/' ? 'home' : path.replace(/[\/#]/g, '');
      return activeSection === section;
    }
    if (path.startsWith('/#')) {
      return false;
    }
    return pathname === path || (path !== '/' && pathname.startsWith(path.replace(/#.*/, '')));
  };

  const getLinkClass = (path: string, isIconMode = false) => {
    const active = isActive(path);
    if (isIconMode) {
      return `p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center relative ${
        active ? (scrolled ? 'bg-blue-100 text-blue-700 shadow-sm' : 'bg-white/20 text-yellow-400') : (scrolled ? 'text-gray-600 hover:bg-gray-100 hover:text-blue-600' : 'text-gray-300 hover:bg-white/10 hover:text-white')
      }`;
    }
    
    if (active) {
      return `transition font-bold text-xs uppercase tracking-wider relative group flex items-center gap-1 ${scrolled ? 'text-blue-700' : 'text-yellow-400'}`;
    }
    return `transition font-bold text-xs uppercase tracking-wider flex items-center gap-1 ${
      scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-400'
    }`;
  };

  const primaryItems = displayMode === 'text' ? navItems : navItems.slice(0, visibleIconCount);
  const secondaryItems = displayMode === 'dropdown' ? navItems.slice(visibleIconCount) : [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block">
      {/* Top Bar */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0 py-0 border-transparent' : 'bg-[#0b1120] text-gray-300 py-1.5 px-6 border-b border-white/10'}`}>
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-xs font-medium tracking-wide">
          <div>SINCE 2009</div>
          <div className="text-gray-400">Trusted by 1000+ Happy Clients</div>
          <div className="flex items-center gap-2">
            <span>24/7 Service :</span>
            <a href="tel:07998998889" className="text-white hover:text-yellow-400 flex items-center gap-1 font-bold">
              <Phone size={12} className="text-yellow-400" />
              079989 98889
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className={`flex justify-between items-center backdrop-blur-xl rounded-full px-4 py-2 shadow-2xl transition-all duration-300 ${
            scrolled ? 'bg-white/90 border border-gray-200 mt-0' : 'bg-[#0b1120]/60 border border-white/10 mt-[-10]'
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition group shrink-0">
              <div className={`w-12 h-12 relative flex-shrink-0 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <Image src="/images/logo-transparent.png" alt="Kanakadurga Logo" fill sizes="48px" className="object-contain" />
              </div>
              <div className="flex flex-col">
                <div className={`font-black text-xl leading-none tracking-wide drop-shadow-md transition-colors ${scrolled ? 'text-[#0b1120]' : 'text-white'}`}>KANAKADURGA</div>
                <div className={`text-xs font-bold leading-tight tracking-widest mt-1 drop-shadow transition-colors ${scrolled ? 'text-blue-700' : 'text-brand-gold'}`}>BOREWELLS & ENTERPRISES</div>
              </div>
            </Link>

            {/* Dynamic Nav Links */}
            <div className="flex gap-2 lg:gap-6 items-center flex-1 justify-center" ref={navContainerRef}>
              {primaryItems.map((item) => {
                const Icon = item.icon;
                const isIconMode = displayMode !== 'text';
                
                if (item.isDropdown) {
                  return (
                    <div 
                      key={item.href}
                      className="relative group py-2"
                      onMouseEnter={() => setServiceMenuOpen(true)}
                      onMouseLeave={() => setServiceMenuOpen(false)}
                    >
                      <Link href={item.href} className={getLinkClass(item.href, isIconMode)} title={item.label}>
                        {isIconMode ? <Icon size={20} /> : <>{item.label} <ChevronDown size={14} className={`transition ${serviceMenuOpen ? 'rotate-180' : ''}`} /></>}
                      </Link>
                      
                      {/* Dropdown */}
                      <AnimatePresence>
                        {serviceMenuOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                          >
                            <div className="w-56 bg-white rounded-xl shadow-xl p-2 grid grid-cols-1 gap-1 border border-gray-100 overflow-hidden">
                              {services.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2.5 rounded-lg transition font-medium text-sm flex items-center"
                                  onClick={() => setServiceMenuOpen(false)}
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link key={item.href} href={item.href} className={getLinkClass(item.href, isIconMode)} title={item.label}>
                    {isIconMode ? <Icon size={20} /> : item.label}
                  </Link>
                );
              })}

              {/* More Dropdown (if space is constrained) */}
              {secondaryItems.length > 0 && (
                <div className="relative py-2" ref={dropdownRef}>
                  <button 
                    onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                    className={`p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center ${
                      moreMenuOpen ? (scrolled ? 'bg-blue-100 text-blue-700 shadow-sm' : 'bg-white/20 text-yellow-400') : (scrolled ? 'text-gray-600 hover:bg-gray-100 hover:text-blue-600' : 'text-gray-300 hover:bg-white/10 hover:text-white')
                    }`}
                  >
                    {moreMenuOpen ? <X size={20} /> : <MoreVertical size={20} />}
                  </button>

                  <AnimatePresence>
                    {moreMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col z-50 py-2"
                      >
                        {secondaryItems.map((item) => {
                          const active = isActive(item.href);
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMoreMenuOpen(false)}
                              className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                                active 
                                  ? 'text-blue-600 bg-blue-50 border-l-2 border-blue-600' 
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 border-l-2 border-transparent'
                              }`}
                            >
                              <Icon size={18} />
                              <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Right CTA */}
            <div className="flex shrink-0 items-center gap-4">
              <LanguageSwitcher />
              <button 
                onClick={() => setQuoteModalOpen(true)}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2.5 rounded text-sm transition tracking-wide shadow-lg shadow-yellow-400/20 whitespace-nowrap"
              >
                GET QUOTE
              </button>
            </div>
          </div>
        </div>
      </nav>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </header>
  );
};
