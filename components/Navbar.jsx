"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Home as HomeIcon,
  Info,
  PersonStanding,
  Menu,
  X,
  ExternalLink,
  Calendar,
  Phone,
  Trophy,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useScroll } from "@/context/scrollContext";
import Marquee from "react-fast-marquee";

const oswald = Oswald({ subsets: ["latin"] });

export default function Navbar({ currentRoute }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [register, setRegister] = useState(false);
  const { scrollToSection } = useScroll();
  const router = useRouter();

  const handleNavClick = async (e, href) => {
    e.preventDefault();

    // Extract the path and hash from href
    const [path, hash] = href.split("#");

    // If we're on the marathon page and trying to navigate to a section
    if (window.location.pathname === "/marathon" && hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
      return;
    }

    // If we're on the home page and there's a hash, scroll to section
    if (window.location.pathname === "/" && hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      // If no hash (like home link), just navigate
      router.push(href);
    }
  };

  // Different nav items for different pages
  const homeNavItems = [
    { href: "/", icon: <HomeIcon className="w-5 h-5" />, label: "Home" },
    { href: "#about", icon: <Info className="w-5 h-5" />, label: "About" },
    {
      href: "#events",
      icon: <Calendar className="w-5 h-5" />,
      label: "Events",
    },
    { href: "#contact", icon: <Phone className="w-5 h-5" />, label: "Contact" },
  ];

  const marathonNavItems = [
    {
      href: "/marathon",
      icon: <HomeIcon className="w-5 h-5" />,
      label: "Home",
    },
    {
      href: "#event-details",
      icon: <Calendar className="w-5 h-5" />,
      label: "Event Details",
    },
    { href: "#prizes", icon: <Trophy className="w-5 h-5" />, label: "Prizes" },
    { href: "#routes", icon: <MapPin className="w-5 h-5" />, label: "Routes" },
    // { href: "#sponsors", icon: <Users className="w-5 h-5" />, label: "Sponsors" },
    { href: "#contact", icon: <Phone className="w-5 h-5" />, label: "Contact" },
  ];

  const navItems =
    currentRoute === "/marathon" ? marathonNavItems : homeNavItems;

  const handleRegisterClick = async () => {
    if (window.location.pathname === "/marathon") {
      scrollToSection();
    } else {
      await router.push("/marathon");
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          duration: 0.8,
        }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-[100] shadow-sm"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link
              href={currentRoute === "/" ? "/" : "/marathon"}
              className="flex items-center gap-4 hover:opacity-90 transition-opacity"
            >
              <div className="relative">
                <Image
                  src={
                    currentRoute === "/marathon"
                      ? "/marathon.png"
                      : "/logo_rotract.JPG"
                  }
                  alt={
                    currentRoute === "/marathon"
                      ? "Runspire Marathon Logo"
                      : "Rotaract Logo"
                  }
                  width={currentRoute === "/marathon" ? 45 : 40}
                  height={currentRoute === "/marathon" ? 45 : 40}
                  // className={`${currentRoute === '/marathon' ? 'object-contain' : 'rounded-full object-cover'} shadow-md md:w-[${currentRoute === '/marathon' ? '60px' : '50px'}] md:h-[${currentRoute === '/marathon' ? '60px' : '50px'}]`}
                  className={`rounded-full object-cover shadow-md md:w-[${currentRoute === "/marathon" ? "60px" : "50px"}] md:h-[${currentRoute === "/marathon" ? "60px" : "50px"}]`}
                />
              </div>
              <span
                className={`${oswald.className} text-xl md:text-2xl font-bold ${currentRoute === "/marathon" ? "text-[#e75480]" : "text-amber-600"}`}
              >
                {currentRoute === "/marathon"
                  ? "RunForCure"
                  : "Rotaract DYPCOE"}
              </span>
            </Link>
            <div className="hidden lg:flex gap-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-2 transition-colors ${currentRoute === "/marathon" ? "text-gray-600 hover:text-[#e75480]" : "text-gray-600 hover:text-amber-600"}`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              <Button
                className={`${currentRoute === "/marathon" ? "bg-[#e75480] hover:bg-[#c23a62]" : "bg-amber-500 hover:bg-amber-600"} text-white gap-2 ml-4 shadow-md hover:shadow-lg transition-all`}
                onClick={handleRegisterClick}
              >
                Register Now for Marathon
              </Button>
            </div>
            <div className="flex items-center gap-4 lg:hidden">
              <Button
                className={`${currentRoute === "/marathon" ? "bg-[#e75480] hover:bg-[#c23a62]" : "bg-amber-500 hover:bg-amber-600"}text-white text-sm px-3 py-1 shadow-md hover:shadow-lg transition-all whitespace-nowrap ml-4`}
                onClick={handleRegisterClick}
              >
                Register for Marathon
              </Button>
              {/* Mobile Menu Button */}
              <motion.button
                className={`${currentRoute === "/marathon" ? "text-gray-600 hover:text-[#e75480]" : "text-gray-600 hover:text-amber-600"} p-2 transition-colors relative z-50`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        <div
          className={`bg-[#ffb6c1] mt-18 overflow-x-hidden relative ${currentRoute === "/marathon" ? "" : "hidden"}`}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              scrollToSection(); // Scroll to the section
            }}
          >
            <Marquee>
              <span className="mr-12">
                🎉 Early Bird Offer: Book tickets early and save Rs 100/- per
                ticket! Limited time only (No Coupon Code Required).
              </span>
              <span className="mr-12">
                👥 Group Value Discount: Groups of 10 or more participants
                receive Rs 100/- OFF each ticket (No Coupon Code Required).
              </span>
              <span className="mr-12">
                👨🏻‍👩🏻‍👦🏻‍👦🏻 Super Group Savings: Groups of 50 or more
                participants get EXTRA 10% OFF on regular group discount!
                Contact us for details.
              </span>
              <span className="mr-12">
                🎉 Early Bird Offer: Book tickets early and save Rs 100/- per
                ticket! Limited time only (No Coupon Code Required).
              </span>
              <span className="mr-12">
                👥 Group Value Discount: Groups of 10 or more participants
                receive Rs 100/- OFF each ticket (No Coupon Code Required).
              </span>
              <span className="mr-12">
                👨🏻‍👩🏻‍👦🏻‍👦🏻 Super Group Savings: Groups of 50 or more
                participants get EXTRA 10% OFF on regular group discount!
                Contact us for details.
              </span>
            </Marquee>
          </a>
        </div>
      </motion.nav>

      {/* Mobile Menu Container */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[90]"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                visibility: "visible",
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
              closed: {
                visibility: "hidden",
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
          >
            {/* Mobile Menu Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              variants={{
                open: { opacity: 1 },
                closed: { opacity: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed right-0 top-0 h-full w-[280px] bg-white shadow-xl"
              variants={{
                open: {
                  x: 0,
                  transition: {
                    type: "spring",
                    damping: 30,
                    stiffness: 75,
                    duration: 0.8,
                  },
                },
                closed: {
                  x: "100%",
                  transition: {
                    type: "spring",
                    damping: 30,
                    stiffness: 75,
                    duration: 0.8,
                  },
                },
              }}
            >
              <div className="flex flex-col h-full pt-16">
                <motion.div
                  className="flex items-center justify-between p-4 border-b"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src={
                          currentRoute === "/marathon"
                            ? "/marathon.png"
                            : "/logo_rotract.JPG"
                        }
                        alt={
                          currentRoute === "/marathon"
                            ? "Runspire Marathon Logo"
                            : "Rotaract Logo"
                        }
                        width={currentRoute === "/marathon" ? 45 : 40}
                        height={currentRoute === "/marathon" ? 45 : 40}
                        className={`${currentRoute === "/marathon" ? "object-contain" : "rounded-full object-cover"} shadow-sm`}
                      />
                    </div>
                    <span
                      className={`${oswald.className} ${currentRoute === "/marathon" ? "text-[#ff007f]" : "text-amber-600"} text-xl font-bold`}
                    >
                      {currentRoute === "/marathon"
                        ? "RunForCure"
                        : "Rotaract DYPCOE"}
                    </span>
                  </div>
                </motion.div>
                <div className="flex flex-col gap-2 p-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${currentRoute === "/marathon" ? "text-gray-600 hover:text-[#e75480]" : "text-gray-600 hover:text-amber-600"}`}
                      variants={{
                        open: {
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.2 + index * 0.1 },
                        },
                        closed: {
                          opacity: 0,
                          x: 20,
                        },
                      }}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </motion.a>
                  ))}
                </div>
                <motion.div
                  className="mt-auto p-4 border-t"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                >
                  <p className="text-sm text-gray-500 text-center">
                    © 2024 Rotaract Club of DYPCOE
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
