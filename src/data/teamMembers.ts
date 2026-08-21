export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  img: string;
  short: string;
  bio: string[];
  expertise: string[];
  experience: string;
  education: string[];
  certifications: string[];
  achievements: string[];
  email: string;
  phone: string;
  linkedin: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "ethan-cole",
    name: "Ethan Cole",
    role: "Founder & Principal Builder",
    img: "/images/team-ethan-cole.jpg",
    short: "Founded Summit Builders in 2004 and still walks every job site personally.",
    bio: [
      "Ethan started Summit Builders Co. after fifteen years framing and finishing homes across the tri-state area. He built the company around a simple promise: fixed pricing, weekly updates, and a builder who answers the phone.",
      "Today he oversees every project at a high level, sets the construction standards the crews follow, and personally signs off on structural work before drywall goes up.",
    ],
    expertise: ["Custom home construction", "Structural planning", "Budget and scope control", "Client communication"],
    experience: "28 years in residential construction",
    education: ["B.S. Construction Management, Penn State"],
    certifications: ["Licensed General Contractor (NY, NJ)", "OSHA 30-Hour Construction"],
    achievements: [
      "Delivered 240+ custom homes and major renovations",
      "Named Regional Builder of the Year, 2019",
      "Maintains a 98% on-time completion record",
    ],
    email: "ethan.cole@summitbuilders.example",
    phone: "(212) 555-0142",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "sophia-bennett",
    name: "Sophia Bennett",
    role: "Director of Design",
    img: "/images/team-sophia-bennett.jpg",
    short: "Turns rough ideas and inspiration folders into buildable, permit-ready plans.",
    bio: [
      "Sophia leads the in-house design studio. She runs the first consultation with every client, translating lifestyle notes and reference photos into floor plans that work for how a family actually lives.",
      "She also coordinates with structural engineers and the local permitting offices so design decisions never stall the build calendar.",
    ],
    expertise: ["Floor plan design", "Space planning", "Material and finish selection", "Permit coordination"],
    experience: "16 years in residential architecture and design",
    education: ["M.Arch, Cornell University", "B.A. Interior Architecture, RISD"],
    certifications: ["NCARB Certified", "LEED Accredited Professional"],
    achievements: [
      "Designed the award-winning Harborview Estate",
      "Cut average design-to-permit time by six weeks",
      "Published in Northeast Home Quarterly",
    ],
    email: "sophia.bennett@summitbuilders.example",
    phone: "(212) 555-0158",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "marcus-reed",
    name: "Marcus Reed",
    role: "Senior Site Superintendent",
    img: "/images/team-marcus-reed.jpg",
    short: "Runs the field crews and keeps the schedule honest from footing to final punch list.",
    bio: [
      "Marcus is the person on site every morning before the trades arrive. He sequences subcontractors, inspects work as it happens, and flags problems while they are still cheap to fix.",
      "Clients get his weekly walkthrough video, which has become one of the most requested parts of the Summit process.",
    ],
    expertise: ["Site supervision", "Trade scheduling", "Quality control", "Safety compliance"],
    experience: "22 years on residential job sites",
    education: ["A.A.S. Building Construction Technology, SUNY Delhi"],
    certifications: ["OSHA 30-Hour Construction", "First Aid and CPR Certified"],
    achievements: [
      "Zero lost-time incidents across 90+ projects",
      "Supervises an average of five concurrent builds",
      "Introduced the weekly client walkthrough video",
    ],
    email: "marcus.reed@summitbuilders.example",
    phone: "(212) 555-0173",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "elena-ramirez",
    name: "Elena Ramirez",
    role: "Project Manager",
    img: "/images/team-elena-ramirez.jpg",
    short: "Owns the schedule, the budget line items, and the answers to your questions.",
    bio: [
      "Elena is the main point of contact once a project moves out of design. She tracks every change order, material lead time, and inspection date, then reports it back in plain language.",
      "Her background in procurement is why Summit projects rarely stall waiting on windows, cabinetry, or long-lead fixtures.",
    ],
    expertise: ["Construction scheduling", "Budget tracking", "Vendor procurement", "Change order management"],
    experience: "13 years in construction project management",
    education: ["B.S. Civil Engineering, Rutgers University"],
    certifications: ["PMP, Project Management Institute", "Certified Construction Manager (CCM)"],
    achievements: [
      "Managed $60M in completed residential work",
      "Reduced material delays by 35% through early procurement",
      "Client satisfaction average of 4.9 out of 5",
    ],
    email: "elena.ramirez@summitbuilders.example",
    phone: "(212) 555-0186",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "maya-chen",
    name: "Maya Chen",
    role: "Interior Designer",
    img: "/images/team-maya-chen.jpg",
    short: "Handles the details you live with daily: light, texture, storage, and flow.",
    bio: [
      "Maya works alongside the design studio on everything inside the walls. She builds selection boards, sources fixtures, and keeps finish choices inside the budget agreed at contract.",
      "She specializes in kitchens and primary suites, where small planning decisions have the largest day-to-day payoff.",
    ],
    expertise: ["Interior finishes", "Kitchen and bath design", "Lighting plans", "Custom millwork"],
    experience: "9 years in residential interior design",
    education: ["B.F.A. Interior Design, Parsons School of Design"],
    certifications: ["NCIDQ Certified", "Certified Aging-in-Place Specialist (CAPS)"],
    achievements: [
      "Completed 120+ full interior packages",
      "Featured in a national kitchen design roundup",
      "Built the studio's reusable finish library",
    ],
    email: "maya.chen@summitbuilders.example",
    phone: "(212) 555-0194",
    linkedin: "https://www.linkedin.com/",
  },
  {
    slug: "daniel-foster",
    name: "Daniel Foster",
    role: "Client Relations Manager",
    img: "/images/team-daniel-foster.jpg",
    short: "First call, first walkthrough, and the person who follows up after move-in.",
    bio: [
      "Daniel handles new inquiries, scopes early conversations, and makes sure expectations are clear before a contract is signed. He also runs the warranty program after handover.",
      "If a homeowner has a question a year after move-in, it goes to Daniel and gets a response the same business day.",
    ],
    expertise: ["Client onboarding", "Estimating support", "Warranty coordination", "Post-build follow-up"],
    experience: "11 years in construction client services",
    education: ["B.A. Business Administration, Fordham University"],
    certifications: ["NAHB Certified Graduate Associate", "HubSpot CRM Certified"],
    achievements: [
      "Response time under four hours on all inquiries",
      "Built the 1-year warranty walkthrough program",
      "Referral rate of 42% from past clients",
    ],
    email: "daniel.foster@summitbuilders.example",
    phone: "(212) 555-0117",
    linkedin: "https://www.linkedin.com/",
  },
];
