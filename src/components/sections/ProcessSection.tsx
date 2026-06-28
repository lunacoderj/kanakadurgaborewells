'use client';

import Image from 'next/image';

export const ProcessSection = () => {
  const steps = [
    {
      title: "1. Site Inspection & Survey",
      description: "Our experts visit your location to conduct a thorough geological survey, identifying the best spot for drilling to ensure maximum water yield.",
      image: "/images/process/survey.png"
    },
    {
      title: "2. Drilling & Equipment Setup",
      description: "We deploy state-of-the-art hydraulic rigs and equipment tailored to your specific soil and rock conditions for efficient and safe drilling.",
      image: "/images/process/equipment.png"
    },
    {
      title: "3. Installation & Testing",
      description: "After drilling, we install the casing pipes, submersible pumps, and conduct rigorous yield testing to guarantee a sustainable water supply.",
      image: "/images/process/equipment.png" // Reusing since we only have 2 process images right now
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">Our Proven Process</h2>
          <p className="text-gray-600 text-lg">
            We follow a systematic, scientific approach to ensure the highest success rate for every borewell project we undertake.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-yellow-400 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border-4 border-white bg-white">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
