import { Link } from "react-router-dom";
import { ChevronDown, Image, MessageSquareQuote, HelpCircle, FileText, Briefcase, Mail, Zap } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const features = [
  { name: "Photo Gallery", path: "/photo-gallery", icon: Image, desc: "Masonry grids & carousels" },
  { name: "Testimonials", path: "/testimonials", icon: MessageSquareQuote, desc: "Marquees & rating grids" },
  { name: "FAQs", path: "/faqs", icon: HelpCircle, desc: "Accordions & category filters" },
  { name: "Blog", path: "/blog", icon: FileText, desc: "List views & card grids" },
  { name: "Portfolio", path: "/portfolio", icon: Briefcase, desc: "Case studies & galleries" },
  { name: "Newsletter", path: "/newsletter", icon: Mail, desc: "Sign-up forms & lead magnets" },
  { name: "Pop-ups", path: "/popups", icon: Zap, desc: "Modals & slide-in notifications" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
          Feature <span className="text-primary">Showroom</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[420px] gap-1 p-3 md:grid-cols-2">
                  {features.map((f) => (
                    <li key={f.path}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={f.path}
                          className="flex items-start gap-3 rounded-md p-3 text-sm transition-colors hover:bg-accent"
                        >
                          <f.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <div>
                            <div className="font-medium text-foreground">{f.name}</div>
                            <div className="text-xs text-muted-foreground">{f.desc}</div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
