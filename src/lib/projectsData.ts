export interface ProjectData {
  id: string;
  title: string;
  category: string;
  location: string;
  depth: string;
  yield: string;
  type: string;
  image: string;
  description: string;
  infoPoints: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "residential-borewell-vizag",
    title: "Residential Borewell, Vizag",
    category: "Residential",
    location: "Madhurawada, Vizag",
    depth: "450 ft",
    yield: "Good Yield (3 Inch)",
    type: "Residential",
    image: "/images/projects/proj1.png",
    description: "A state-of-the-art residential borewell drilled to provide a consistent, 24/7 water supply for a newly constructed luxury apartment complex in Vizag. We ensured minimal disruption to the surrounding neighborhood.",
    infoPoints: [
      "Completed in 2 Days",
      "Advanced Geological Survey",
      "Submersible Pump Installed",
      "High-Pressure Flushing"
    ]
  },
  {
    id: "large-scale-irrigation",
    title: "Large Scale Irrigation Setup",
    category: "Agricultural",
    location: "Anakapalle Farms",
    depth: "600 ft",
    yield: "Medium Yield (4 Inch)",
    type: "Agricultural",
    image: "/images/projects/proj2.png",
    description: "Designed and drilled specifically to meet the high water demands of a 50-acre commercial farm. This setup guarantees maximum crop yield by tapping into a reliable deep-water aquifer.",
    infoPoints: [
      "Heavy-Duty Drilling Rig Used",
      "Agricultural Pump Configuration",
      "PVC Casing Installed",
      "Long-term Water Security"
    ]
  },
  {
    id: "commercial-water-plant",
    title: "Commercial Water Plant",
    category: "Industrial",
    location: "Gajuwaka Industrial Area",
    depth: "1200 ft",
    yield: "High Yield (5 Inch)",
    type: "Industrial",
    image: "/images/projects/proj3.png",
    description: "A deep drilling project executed for a large-scale manufacturing plant requiring massive volumes of water. The project involved deep rock penetration and heavy-duty steel casing.",
    infoPoints: [
      "1200ft Deep Drilling",
      "Steel Casing Implementation",
      "Industrial Grade Pump Setup",
      "Safety Standards Compliant"
    ]
  },
  {
    id: "factory-borewell-cleaning",
    title: "Factory Borewell Cleaning",
    category: "Industrial",
    location: "Auto Nagar",
    depth: "800 ft",
    yield: "Restored to 4 Inch",
    type: "Industrial",
    image: "/images/projects/proj4.png",
    description: "Restored an old, heavily silted borewell to its full original capacity using high-pressure air compressors and specialized cleaning agents, saving the factory the cost of a new drill.",
    infoPoints: [
      "High-Pressure Air Flushing",
      "Silt & Debris Removal",
      "Yield Restored by 40%",
      "Cost-effective Solution"
    ]
  },
  {
    id: "farm-land-borewell",
    title: "Farm Land Borewell",
    category: "Agricultural",
    location: "Bheemili Outskirts",
    depth: "550 ft",
    yield: "Good Yield (3 Inch)",
    type: "Agricultural",
    image: "/images/projects/proj5.png",
    description: "A reliable borewell solution for a mid-sized organic farm, ensuring continuous water supply through the dry seasons with an energy-efficient solar pump integration.",
    infoPoints: [
      "Solar Pump Compatible",
      "Fast Execution Time",
      "Clear Water Guarantee",
      "Sustainable Water Source"
    ]
  }
];
