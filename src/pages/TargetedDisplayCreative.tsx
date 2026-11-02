import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, PenTool, Palette, RefreshCw, MapPin, ShoppingCart, Briefcase, CalendarDays, Sparkles } from "lucide-react";

const IMG = "/images/display-creative";
const TAN = "bg-[#f8f1ec]";
const WHITE = "bg-[#ffffff]";
const GRAY = "bg-[#f4f2f1]";
const RED = "bg-[#a6192e]";
const RED_TEXT = "text-[#a6192e]";

const handle = [
  { icon: Target, title: "Creative Strategy", text: "We learn your audience and goals so every ad design supports the campaign you’re running" },
  { icon: PenTool, title: "Ad Design", text: "Professional display ads in every standard size and format" },
  { icon: Palette, title: "Brand Consistency", text: "Every ad matches your brand identity across every size and placement" },
  { icon: RefreshCw, title: "Revisions", text: "Built-in revision rounds so the final creative is exactly right before launch" },
];

const formats = [
  { img: "business-static.jpg", label: "AD: Business Consulting", title: "Static banner ads", text: "300×250, 728×90, 160×600, 300×50, 320×50" },
  { img: "pizza-design-set-336x280-px.gif", label: "AD: Food Door", title: "Animated / GIF banner ads", text: "Motion that catches the eye without being intrusive" },
  { img: "social-beauty.jpg", label: "AD: Makeup Brand", title: "Social image ads", text: "1080×1080 static creative with ad copy" },
  { img: "business-mock.jpg", label: "AD: Business Consulting", title: "Custom sizes", text: "Built to match your specific platform requirements" },
];

const placements = [
  { img: "team-mockups.jpg", alt: "Team reviewing marketing mockups", title: "Website banner placements", text: "Publisher networks, industry sites, local news sites" },
  { img: "display-network.jpg", alt: "Digital display ads", title: "Native ad placements", text: "Designed to blend naturally into web content feeds" },
  { img: "retargeting.jpg", alt: "Red target block among cubes", title: "Retargeting creative", text: "Built for use across your existing website visitor audiences" },
];

const steps = [
  { title: "Discovery Call", text: "We learn about your brand, your audience, and the campaign your ads need to support. No pressure, just a conversation about what you’re trying to achieve." },
  { title: "Creative Direction", text: "We recommend the ad formats, sizes, and creative approach that fit your goals and your platform’s requirements." },
  { title: "Design & Revisions", text: "We design your ad creative and refine it with you through the included revision rounds until it’s ready to launch." },
  { title: "Final Delivery", text: "You receive every approved ad file, correctly sized and formatted, ready to hand off to your team, your media buyer, or your ad platform of choice." },
];

const concepts = [
  ["christmas-ad.gif", "AD: Craft Holiday Offer"],
  ["beauty.jpg", "AD: Makeup Brand"],
  ["linka-728x90-1-display-design-set-728x90-px.gif", "AD: Linka Messaging"],
  ["media-728x90-px.gif", "AD: Media Communication"],
  ["motivation-1200x1200-px.gif", "AD: Motivation"],
  ["sport-300x250-px.gif", "AD: Sports Brand – Score Flow"],
  ["mavis.gif", "AD: Mavis Furniture"],
  ["happy-days-970x250-px.gif", "AD: Happy Days, Early Education and Preschool"],
  ["flyway-fence-company_td_mayjune__-728x90-px.gif", "300×250, 728×90, 160×600"],
  ["rolling-embers_ad_1c-728x90-px.gif", "300×250, 728×90, 160×600"],
  ["gaming_gen_creatives_example-300x250-px-2.gif", "300×250, 728×90, 160×600"],
  ["semper_gumby_nov_displayad_-300x250-px.gif", "300×250, 728×90, 160×600"],
  ["kevin-decker-campaign_ad_1_-300x250-px.gif", "300×250, 728×90, 160×600"],
  ["honest-abe-roofing_a2_example-970x250-px.gif", "300×250, 728×90, 160×600"],
];

const packages = [
  { name: "Social Image", price: "40", desc: "1080×1080 static image with ad copy", rows: [["Format", "1 static image"]] },
  { name: "Static Banner Bundle", price: "90", desc: "5 standard sizes", rows: [["Revisions included", "2"], ["Each extra revision", "$20"]] },
  { name: "Animated GIF Banner Bundle", price: "110", desc: "5 standard sizes", rows: [["Revisions included", "2"], ["Each extra revision", "$50"]] },
];

const audiences = [
  { icon: MapPin, title: "Local service businesses", text: "Plumbers, HVAC, electricians, dentists, lawyers, chiropractors" },
  { icon: ShoppingCart, title: "Retail & restaurants", text: "Promoting sales, new locations, or seasonal menus" },
  { icon: Briefcase, title: "B2B companies", text: "Needing on-brand creative for a specific campaign" },
  { icon: CalendarDays, title: "Event promoters", text: "Building awareness quickly with professional ad creative" },
  { icon: Sparkles, title: "New businesses", text: "Needing a first set of display ads while their brand is taking shape" },
];

const faqs = [
  ["Do you place and manage the ad campaigns, or just design the creative?", "We focus on creative, professional, on-brand display ads designed to spec for your campaign. Media placement, targeting setup, and campaign management are handled by you or your media/advertising partner."],
  ["Can you help me figure out where to run these ads?", "We can offer general guidance based on your goals, but media buying and placement decisions are outside our service, we’d recommend a media buyer or ad platform for that part."],
  ["What sizes and formats do you deliver?", "All standard IAB display sizes, plus custom sizes on request, in static and animated formats."],
  ["Do I need a new website?", "No. But the page people land on matters a lot. If your current site doesn’t convert visitors into leads, we can help, we design landing pages built specifically for ad campaigns."],
  ["How long does creative take?", "Most creative packages are delivered within 1–2 business days, depending on revisions."],
  ["Who owns the final ad files?", "You do, once the project is paid for, every approved file is yours to use however and wherever you’d like."],
  ["What's the difference between Display Ads and Google Search Ads?", "Google Search Ads capture existing demand, someone searches “plumber near me” and your ad appears. Display ads create demand, they put your business in front of people before they search. They work well together, though Webstix’s role here is the display creative, not the search campaign."],
];

