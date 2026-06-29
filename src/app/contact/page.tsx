'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle, Send, Zap, ChevronDown, Clock, Globe } from 'lucide-react';

const locationData: Record<string, string[]> = {
  "Visakhapatnam": [
    "Anandapuram", "Bheemunipatnam", "Gajuwaka", "Gopalapatnam", "Maharanipeta", "Mulagada", "Padmanabham", "Pedagantyada", "Pendurthi", "Visakhapatnam (Rural)", "Visakhapatnam (Urban)"
  ],
  "Anakapalli": [
    "Anakapalli", "Atchutapuram", "Butchayyapeta", "Cheedikada", "Chodavaram", "Devarapalli", "Golugonda", "K.Kotapadu", "Kasimkota", "Kotauratla", "Madugula", "Makavarapalem", "Munagapaka", "Nakkapalli", "Narsipatnam", "Parawada", "Payakaraopeta", "Rambilli", "Ravikamatham", "Rolugunta", "S.Rayavaram", "Sabbavaram", "Yelamanchili"
  ],
  "Vizianagaram": [
    "Badangi", "Bhogapuram", "Bobbili", "Bondapalli", "Cheepurupalli", "Dattirajeru", "Denkada", "Gajapathinagaram", "Gantyada", "Garividi", "Gurla", "Jami", "Kothavalasa", "Lakkavarapukota", "Mentada", "Merakamudidam", "Nellimarla", "Pusapatirega", "Ramabhadrapuram", "Srungavarapukota", "Therlam", "Vepada", "Vizianagaram"
  ],
  "Srikakulam": [
    "Amadalavalasa", "Burja", "Etcherla", "Ganguvarisigadam", "Gara", "Hiramandalam", "Jalumuru", "Kothuru", "Lakshminarsupeta", "Mandasa", "Meliyaputti", "Nandigam", "Narasannapeta", "Palasa", "Pathapatnam", "Polaki", "Ponduru", "Santhabommali", "Saravakota", "Sompeta", "Srikakulam", "Tekkali", "Vajrapukothuru"
  ],
  "Alluri Sitharama Raju": [
    "Ananthagiri", "Araku Valley", "Chintapalle", "Dumbriguda", "Gangaraju Madugula", "Gudem Kotha Veedhi", "Hukumpeta", "Koyyuru", "Munchingi Puttu", "Paderu", "Pedabayalu"
  ],
  "Parvathipuram Manyam": [
    "Balijipeta", "Bhamini", "Garugubilli", "Gummalakshmipuram", "Jiyyammavalasa", "Komarada", "Kurupam", "Makkuva", "Pachipenta", "Palakonda", "Parvathipuram", "Salur", "Seethanagaram", "Vangara"
  ],
  "East Godavari": [
    "Biccavolu", "Chagallu", "Devarapalle", "Gokavaram", "Kadiam", "Korukonda", "Kovvur", "Nallajerla", "Nidadavole", "Peravali", "Rajanagaram", "Rajahmundry Rural", "Rajahmundry Urban", "Seethanagaram", "Tallapudi", "Undrajavaram"
  ],
  "Kakinada": [
    "Gollaprolu", "Kakinada Rural", "Kakinada Urban", "Karapa", "Kothapalle", "Pedapudi", "Pithapuram", "Prathipadu", "Samalkota", "Sankhavaram", "Thondangi", "Tuni"
  ],
  "Konaseema": [
    "Amalapuram", "Ambajipeta", "Ainavilli", "Allavaram", "Atreyapuram", "I. Polavaram", "K.Gangavaram", "Kapileswarapuram", "Katrenikona", "Kothapeta", "Malkipuram", "Mamidikuduru", "Mandapeta", "Mummidivaram", "P.Gannavaram", "Ramachandrapuram", "Ravulapalem", "Razole", "Rayavaram", "Sakhinetipalle", "Uppalaguptam"
  ]
};

export default function ContactUs() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedMandal, setSelectedMandal] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    const text = `*New Inquiry from Website*%0A
*Name:* ${name}%0A
*Phone:* ${phone}%0A
*Location:* ${selectedMandal}, ${selectedDistrict}%0A
*Service:* ${service}%0A
*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/917998998889?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "24/7 Hotline",
      value: "079989 98889",
      href: "tel:07998998889",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with Experts",
      href: "https://wa.me/917998998889",
      color: "from-green-400 to-green-600"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      value: "Visakhapatnam",
      href: "https://maps.app.goo.gl/h7VAqaf3pAhKUaio7",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <div className="pt-24 pb-0 bg-[#020617] min-h-screen text-white overflow-hidden selection:bg-cyan-500/30">
      
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-12 pb-24">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-1.5 mb-6 text-sm font-bold text-cyan-400 tracking-widest uppercase"
          >
            <Globe className="w-4 h-4" />
            Global Comm Link
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Connection</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            Our operational command center is online 24/7. Transmit your project parameters for an immediate, high-priority response via WhatsApp.
          </motion.p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method, idx) => (
            <motion.a
              href={method.href}
              target={method.href.startsWith('http') ? "_blank" : undefined}
              rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="group relative bg-slate-900/50 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative z-10 flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-transparent group-hover:bg-gradient-to-br ${method.color} transition-all duration-300 shadow-lg`}>
                  <method.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">{method.title}</p>
                  <p className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{method.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Main Grid: Form & Map */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="xl:col-span-7"
          >
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden h-full">
              {/* Highlight line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
              
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="mb-10">
                  <h3 className="text-3xl font-black text-white mb-3">Initialize Operation</h3>
                  <p className="text-slate-400">Deploy your project details into our secure network.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Commandant Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Secure Comm Link (Phone)</label>
                    <input 
                      name="phone"
                      type="tel" 
                      required
                      placeholder="98765 43210"
                      className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">District</label>
                    <div className="relative">
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                      <select 
                        name="district"
                        required
                        value={selectedDistrict}
                        onChange={(e) => {
                          setSelectedDistrict(e.target.value);
                          setSelectedMandal("");
                        }}
                        className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl pl-5 pr-12 py-4 appearance-none focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all cursor-pointer"
                      >
                        <option value="" disabled className="bg-slate-900 text-slate-500">Select District</option>
                        {Object.keys(locationData).map((district) => (
                          <option key={district} value={district} className="bg-slate-900">{district}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Mandal</label>
                    <div className="relative">
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                      <select 
                        name="mandal"
                        required
                        value={selectedMandal}
                        onChange={(e) => setSelectedMandal(e.target.value)}
                        disabled={!selectedDistrict}
                        className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl pl-5 pr-12 py-4 appearance-none focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="" disabled className="bg-slate-900 text-slate-500">Select Mandal</option>
                        {selectedDistrict && locationData[selectedDistrict].map((mandal) => (
                          <option key={mandal} value={mandal} className="bg-slate-900">{mandal}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Operation Type</label>
                  <div className="relative">
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                    <select 
                      name="service"
                      required
                      defaultValue=""
                      className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl pl-5 pr-12 py-4 appearance-none focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all cursor-pointer"
                    >
                      <option value="" disabled className="bg-slate-900 text-slate-500">Select Target Service</option>
                      <option value="drilling" className="bg-slate-900">Borewell Drilling</option>
                      <option value="cleaning" className="bg-slate-900">Borewell Flushing / Cleaning</option>
                      <option value="repair" className="bg-slate-900">Borewell Repair & Maintenance</option>
                      <option value="pump" className="bg-slate-900">Pump Installation</option>
                      <option value="other" className="bg-slate-900">Other Operations</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Tactical Brief (Message)</label>
                  <textarea 
                    name="message"
                    rows={3}
                    placeholder="Detail your requirements or any critical parameters..."
                    className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-lg py-5 rounded-2xl mt-4 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] uppercase tracking-widest"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="flex items-center justify-center gap-2">
                    <span>TRANSMIT VIA WHATSAPP</span>
                    <Send className="w-5 h-5" />
                  </div>
                </button>
              </motion.form>
            </div>
          </motion.div>

          {/* Map & Headquarters Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="xl:col-span-5 flex flex-col gap-6"
          >
            {/* HQ Info Card */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-[2rem]">
              <div className="flex items-start gap-5">
                <div className="bg-cyan-500/20 p-4 rounded-2xl text-cyan-400 shrink-0">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Central Headquarters</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Door Number :M1, Petrol Bunk, A Zone,<br />
                    Sujatha Nagar, Pendurthi,<br />
                    Visakhapatnam, Lakshmi Puram,<br />
                    Andhra Pradesh 530051
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-cyan-400 font-medium">
                    <Clock className="w-4 h-4" />
                    <span>Active 24/7/365</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embedded */}
            <div className="flex-1 min-h-[350px] relative rounded-[2rem] overflow-hidden border border-slate-700/50 bg-slate-800 shadow-xl group">
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d83.2115042!3d17.7967681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967cb7cfac47d%3A0x6f7636f135f59255!2sKANAKADURGA%20BOREWELLS%20%26%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.8)' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Kanakadurga Borewells Location"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

