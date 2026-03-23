export interface BlogPost {
  title: string;
  slug: string;
  img: string;
  cat: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
}

export const posts: BlogPost[] = [
  {
    title: "5 Trends in Custom Home Design for 2026",
    slug: "trends-custom-home-design-2026",
    img: "/images/blog-1.jpg",
    cat: "Design",
    date: "Mar 5, 2026",
    readTime: "6 min",
    author: "Sarah Mitchell",
    excerpt: "From biophilic design to multi-generational floor plans, these trends are shaping the future of home building.",
    content: [
      "The custom home building industry is evolving rapidly, driven by changing lifestyles, new technologies, and a growing emphasis on sustainability. As we move through 2026, several key trends are emerging that are reshaping how we think about residential design and construction.",
      "Biophilic design continues to gain momentum, with homeowners seeking deeper connections to nature through their living spaces. This goes beyond simply adding houseplants — we're seeing entire walls of living greenery, indoor water features, natural stone accents, and floor-to-ceiling windows that blur the boundary between indoors and out.",
      "Multi-generational floor plans are another major trend. With more families choosing to live together across generations, architects are designing homes with separate suites, dual master bedrooms, and flexible spaces that can adapt as family needs change over time.",
      "Smart home integration has moved from luxury to expectation. Today's custom builds incorporate whole-home automation systems from the ground up — from lighting and climate control to security and entertainment — all managed through unified interfaces.",
      "Sustainability isn't just a buzzword anymore; it's a core design principle. Solar-ready roofing, high-performance insulation, energy recovery ventilation systems, and water harvesting are becoming standard features rather than optional upgrades.",
      "Finally, outdoor living spaces are being treated with the same attention to detail as interior rooms. Fully equipped outdoor kitchens, covered lounges with fireplaces, and landscaped courtyards are extending the livable footprint of custom homes significantly."
    ]
  },
  {
    title: "How to Choose the Right Contractor",
    slug: "choose-right-contractor",
    img: "/images/blog-2.jpg",
    cat: "Tips",
    date: "Feb 28, 2026",
    readTime: "4 min",
    author: "James Patterson",
    excerpt: "Red flags, green flags, and the questions you should ask before signing any contract.",
    content: [
      "Choosing the right contractor can make or break your building project. Whether you're planning a kitchen renovation or building your dream home from the ground up, the contractor you select will have a profound impact on the quality, timeline, and budget of your project.",
      "Start by asking for referrals from friends, family, and colleagues who have completed similar projects. Personal recommendations are invaluable because they come with firsthand accounts of the contractor's work quality, communication style, and reliability.",
      "Always verify licenses and insurance. A reputable contractor should hold all necessary state and local licenses and carry both general liability insurance and workers' compensation coverage. Don't take their word for it — ask for proof and verify with the issuing authorities.",
      "Request detailed written estimates from at least three contractors. A thorough estimate should break down costs by category — materials, labor, permits, and contingency — so you can make meaningful comparisons.",
      "Pay attention to communication. How quickly does the contractor respond to your calls or emails? Are they willing to answer questions patiently? Good communication during the bidding phase is a strong indicator of how they'll perform during the project.",
      "Finally, check references and visit completed projects if possible. Speaking with past clients and seeing finished work gives you the clearest picture of what to expect."
    ]
  },
  {
    title: "Kitchen Remodel: What to Expect",
    slug: "kitchen-remodel-what-to-expect",
    img: "/images/blog-3.jpg",
    cat: "Renovation",
    date: "Feb 20, 2026",
    readTime: "8 min",
    author: "Karen O'Brien",
    excerpt: "A realistic timeline and budget guide for your kitchen renovation project.",
    content: [
      "A kitchen remodel is one of the most impactful home improvement projects you can undertake. It can transform your daily living experience and significantly increase your home's value. But it's also one of the most complex renovations, requiring careful planning and realistic expectations.",
      "The planning phase typically takes four to eight weeks. During this time, you'll work with your designer and contractor to finalize layouts, select materials, choose appliances, and obtain necessary permits. Rushing this phase almost always leads to costly changes later.",
      "Demolition and rough-in work usually takes one to two weeks. This includes removing old cabinets, countertops, and flooring, as well as updating plumbing, electrical, and HVAC systems to accommodate your new design.",
      "Cabinet installation is often the longest single phase, taking one to three weeks depending on complexity. Custom cabinets may require additional lead time for fabrication, so ordering early is essential.",
      "Countertop fabrication and installation, backsplash tiling, painting, and fixture installation follow. Each of these steps typically takes a few days to a week. Coordinating the sequence is critical — your contractor should provide a detailed schedule.",
      "Budget-wise, expect to allocate roughly 35% for cabinets, 20% for labor, 15% for appliances, 10% for countertops, and the remaining 20% across flooring, lighting, plumbing fixtures, and contingency."
    ]
  },
  {
    title: "The Complete Guide to Building Permits",
    slug: "complete-guide-building-permits",
    img: "/images/blog-4.jpg",
    cat: "Tips",
    date: "Feb 12, 2026",
    readTime: "7 min",
    author: "David Chen",
    excerpt: "Everything you need to know about permits, inspections, and code compliance.",
    content: [
      "Building permits are a critical part of any construction project, yet they remain one of the most misunderstood aspects of the building process. Understanding when you need a permit, how to obtain one, and what inspections are required can save you significant time, money, and legal headaches.",
      "In most jurisdictions, you need a permit for any work that changes the structure, electrical systems, plumbing, or mechanical systems of a building. This includes additions, major renovations, new construction, and even some seemingly minor projects like replacing a water heater or adding a deck.",
      "The permit application process typically involves submitting detailed plans and specifications to your local building department. These plans must demonstrate compliance with applicable building codes, zoning regulations, and any other local requirements.",
      "Review times vary widely by jurisdiction — from a few days for simple projects to several months for complex commercial buildings. Your contractor or architect can often help expedite the process by ensuring submissions are complete and compliant.",
      "Once your permit is issued and work begins, you'll need to schedule inspections at various stages. Common inspection points include foundation, framing, electrical rough-in, plumbing rough-in, insulation, and final inspection.",
      "Working without required permits is risky. If discovered, you may face fines, be required to tear out completed work, or encounter problems when selling your home. Always err on the side of caution and check with your local building department."
    ]
  },
  {
    title: "Sustainable Building Materials Worth the Investment",
    slug: "sustainable-building-materials",
    img: "/images/blog-5.jpg",
    cat: "Sustainability",
    date: "Jan 30, 2026",
    readTime: "5 min",
    author: "Sarah Mitchell",
    excerpt: "Eco-friendly materials that save money long-term and reduce your carbon footprint.",
    content: [
      "As environmental awareness grows and energy costs rise, sustainable building materials are becoming an increasingly smart investment. While some eco-friendly options carry higher upfront costs, many pay for themselves through energy savings, durability, and reduced maintenance over their lifespan.",
      "Insulated Concrete Forms (ICFs) are one of the most impactful choices you can make. These interlocking foam blocks, filled with reinforced concrete, create walls with exceptional thermal performance, reducing heating and cooling costs by up to 50% compared to traditional framing.",
      "Reclaimed wood adds character and sustainability in equal measure. Salvaged from old barns, warehouses, and other structures, reclaimed lumber reduces demand for new timber while providing unique aesthetic qualities that new wood simply cannot match.",
      "Metal roofing has come a long way from its utilitarian origins. Modern metal roofs are available in a wide range of styles and colors, last 50+ years, reflect solar heat to reduce cooling costs, and are fully recyclable at the end of their long service life.",
      "Low-E (low-emissivity) windows feature microscopically thin coatings that reflect infrared energy while allowing visible light to pass through. This technology can reduce energy loss through windows by 30-50%, making them a worthwhile upgrade in any climate.",
      "Bamboo flooring offers the look of hardwood with a much smaller environmental footprint. Bamboo reaches maturity in just three to five years compared to decades for hardwood trees, making it a rapidly renewable resource."
    ]
  },
  {
    title: "Smart Home Features Every New Build Should Have",
    slug: "smart-home-features-new-build",
    img: "/images/blog-6.jpg",
    cat: "Design",
    date: "Jan 18, 2026",
    readTime: "9 min",
    author: "James Patterson",
    excerpt: "From automated lighting to integrated security — the must-have smart features.",
    content: [
      "Building a new home presents a unique opportunity to integrate smart technology from the ground up, rather than retrofitting it later. When smart systems are planned during the design phase, they work more seamlessly, cost less to install, and deliver a better user experience.",
      "A robust network infrastructure is the foundation of any smart home. This means running Cat6 ethernet cable to every room, installing multiple wireless access points for complete coverage, and setting up a centralized equipment closet with proper ventilation and power management.",
      "Smart lighting systems have evolved far beyond simple dimmer switches. Modern systems offer room-by-room control, automated schedules based on occupancy and time of day, circadian rhythm adjustment, and integration with voice assistants and other smart home platforms.",
      "Automated climate control goes beyond a programmable thermostat. Zoned HVAC systems with smart vents can maintain different temperatures in different rooms, learning your preferences over time and adjusting automatically for optimal comfort and efficiency.",
      "Integrated security systems should include smart locks, video doorbells, interior and exterior cameras, motion sensors, and glass break detectors — all managed through a single app with real-time notifications and remote access.",
      "Don't forget about future-proofing. Run conduit in walls for future cable pulls, install extra electrical outlets and USB charging ports, and choose systems based on open standards that will remain compatible as technology evolves."
    ]
  },
];

export const cats = ["All", "Design", "Tips", "Renovation", "Sustainability"];
