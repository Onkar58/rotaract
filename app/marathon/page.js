"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Banknote,
  Calendar,
  Clock,
  Coffee,
  GlassWater,
  Instagram,
  Linkedin,
  Logs,
  Mail,
  MapPin,
  Medal,
  Phone,
  ScrollText,
  Shirt,
  SquareArrowOutUpRight,
  Trophy,
  Waypoints,
} from "lucide-react";
import dynamic from "next/dynamic";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { SponsorCard } from "@/components/SponsorCard";
import { SponsorsSlider } from "@/components/SponsorsSlider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScroll } from "@/context/scrollContext";
import { useRef } from "react";

const oswald = Oswald({ subsets: ["latin"] });

// Dynamically import the Map component with no SSR
const MarathonMap = dynamic(() => import("@/components/MarathonMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 0.1,
    },
  },
};

const slideIn = {
  initial: { x: -60, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 0.1,
    },
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

const scaleIn = {
  initial: { scale: 0.9 },
  animate: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 0.1,
    },
  },
};

export default function MarathonPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const iframeRef = useRef();
  const { sectionRef, scrollToSection } = useScroll();
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setCurrentTime(Date.now());
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentRoute="/marathon" />

      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative min-h-screen bg-[#ffd1dc] pb-2 md:pb-4"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Content Container */}
        <div className="container mx-auto relative z-10 min-h-screen flex flex-col py-24">
          {/* Main Content */}
          <div className="flex-1 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 items-center w-full px-4 md:px-0">
              {/* Left Side - Logos stacked vertically */}
              <motion.div
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex justify-center items-center flex-col"
              >
                {/* DYP Logo */}
                <div className="relative w-[280px] h-[100px] md:w-[350px] md:h-[120px] sm:mt-16 md:mt-8">
                  <Image
                    src="/DYP.png"
                    alt="DYP Logo"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Marathon 2024 Logo */}
                <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                  <Image
                    src="/marathon.png"
                    alt="Marathon 2024 Logo"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                variants={fadeIn}
                className="flex flex-col items-center md:items-start text-center text-white"
              >
                {/* Title and Description */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <h1
                    className={`${oswald.className} text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-[#ff007f] md:mt-4 `}
                  >
                    RunForCure Marathon
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-[#76004a] max-w-xl italic text-center">
                    Defying odds, with every step!
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-[#76004a]">
                    Get ready to lace up your running shoes and be part of the
                    excitement at the RunForCure Marathon 2025 – a 10 km
                    marathon dedicated to raising awareness and support for the
                    fight against breast cancer. Whether you're an experienced
                    runner or a fitness enthusiast, this is your chance to
                    challenge yourself, connect with like-minded individuals,
                    and celebrate the spirit of health and wellness. With
                    energetic vibes, a supportive community, and an
                    unforgettable experience, every step you take brings us
                    closer to making a difference.
                  </p>
                  <div className="border-t border-[#000] pt-4 mt-6">
                    <p className="text-sm md:text-base lg:text-lg text-[#76004a] max-w-xl font-semibold">
                      Don't miss out - register now and take the first step
                      toward your fitness journey.
                    </p>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center w-full my-4 gap-2"
                >
                  <Button
                    className="border-2 border-[#ffb6c1] bg-gradient-to-r from-[#ff7388] to-[#e75480] hover:from-[#e75480] hover:to-[#cb4256] text-white text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-xl shadow-lg hover:shadow-xl transition-all w-full md:w-[80%]"
                    onClick={scrollToSection}
                  >
                    Register Now
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Event Details */}
      <motion.section
        id="event-details"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 md:py-24 bg-white relative overflow-hidden mt-[-2rem] md:mt-0"
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            variants={fadeIn}
            className={`${oswald.className} text-3xl md:text-5xl font-bold text-center text-[#E75480] mb-8 md:mb-12`}
          >
            Event Details
          </motion.h2>

          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#ffb6c1] rounded-xl">
                  <Calendar className="w-6 h-6 text-[#e75480]" />
                </div>
                <div>
                  <h3 className={`${oswald.className} text-xl font-semibold`}>
                    Date
                  </h3>
                  <p className="text-gray-600">March 23, 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#ffb6c1] rounded-xl">
                  <Clock className="w-6 h-6 text-[#e75480]" />
                </div>
                <div>
                  <h3 className={`${oswald.className} text-xl font-semibold`}>
                    Time
                  </h3>
                  <p className="text-gray-600">4:30 AM onwards</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1]">
              <a
                href="https://maps.app.goo.gl/mbRvYG2zicVjm9KLA"
                target="_blank"
                className="block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#ffb6c1] rounded-xl">
                    <MapPin className="w-6 h-6 text-[#e75480]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3
                        className={`${oswald.className} text-xl font-semibold`}
                      >
                        Location
                      </h3>
                      <SquareArrowOutUpRight className="w-4 h-4 text-[#e75480]" />
                    </div>
                    <p className="text-gray-600">
                      D. Y. Patil Educational Complex, Akurdi
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#ffb6c1] rounded-xl">
                  <Logs className="w-6 h-6 text-[#e75480]" />
                </div>
                <div>
                  <h3 className={`${oswald.className} text-xl font-semibold`}>
                    Categories
                  </h3>
                  <p className="text-gray-600">Open to all</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#ffb6c1] rounded-xl">
                  <Waypoints className="w-6 h-6 text-[#e75480]" />
                </div>
                <div>
                  <h3 className={`${oswald.className} text-xl font-semibold`}>
                    Tracks
                  </h3>
                  <p className="text-gray-600">3KM, 5KM and 10KM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#ffb6c1] rounded-xl">
                  <Medal className="w-6 h-6 text-[#e75480]" />
                </div>
                <div>
                  <h3 className={`${oswald.className} text-xl font-semibold`}>
                    Prize Pool
                  </h3>
                  <p className="text-gray-600">₹45,000+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Perks and Prizes */}
      <motion.section
        id="prizes"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white relative"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="mx-auto px-3 relative z-10">
          <motion.div
            variants={fadeIn}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2
              className={`${oswald.className} text-3xl md:text-5xl font-bold text-[#E75480] mb-4`}
            >
              Perks and Prizes
            </h2>
            <p className="text-gray-600">
              Every participant of the marathon will receive exciting perks to
              make their marathon experience memorable
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[80%] gap-4 mx-auto"
          >
            {/* T-Shirt and Bib Card */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-4 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1] flex flex-col w-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#ffb6c1] rounded-xl p-4 inline-flex items-center justify-center w-12 h-12">
                  <Shirt className="w-6 h-6 text-[#e75480]" />
                </div>
                <h3 className={`${oswald.className} text-xl font-semibold`}>
                  T-Shirt & RFID-Enabled Bib
                </h3>
              </div>
              <p className="text-gray-600 flex-grow">
                All registered runners will receive a specially designed event
                T-shirt along with an Bib Number for accurate race timing
                (RFID-enabled Bib for 5K & 10K participants only).
              </p>
            </motion.div>

            {/* Medals Card */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-4 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1] flex flex-col w-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#ffb6c1] rounded-xl p-4 inline-flex items-center justify-center w-12 h-12">
                  <Trophy className="w-6 h-6 text-[#e75480]" />
                </div>
                <h3 className={`${oswald.className} text-xl font-semibold`}>
                  Medals
                </h3>
              </div>
              <p className="text-gray-600 flex-grow">
                Finisher Medals: Awarded to all participants who successfully
                complete the run.
                <br />
                Winner Medals: Special medals for the top 5 finishers in the 5K
                & 10K competitive categories.
              </p>
            </motion.div>

            {/* Certificate Card */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-4 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1] flex flex-col w-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#ffb6c1] rounded-xl p-4 inline-flex items-center justify-center w-12 h-12">
                  <ScrollText className="w-6 h-6 text-[#e75480]" />
                </div>
                <h3 className={`${oswald.className} text-xl font-semibold`}>
                  Certificate
                </h3>
              </div>
              <p className="text-gray-600 flex-grow">
                A certificate of participation will be provided to all runners,
                with winner certificates for the top 5 in competitive
                categories.
              </p>
            </motion.div>

            {/* Breakfast Card */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-4 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1] flex flex-col w-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#ffb6c1] rounded-xl p-4 inline-flex items-center justify-center w-12 h-12">
                  <Coffee className="w-6 h-6 text-[#e75480]" />
                </div>
                <h3 className={`${oswald.className} text-xl font-semibold`}>
                  Breakfast
                </h3>
              </div>
              <p className="text-gray-600 flex-grow">
                Post-run all participants can enjoy a nutritious breakfast to
                recharge and celebrate your accomplishment.
              </p>
            </motion.div>

            {/* Hydration Card */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-4 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1] flex flex-col w-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#ffb6c1] rounded-xl p-4 inline-flex items-center justify-center w-12 h-12">
                  <GlassWater className="w-6 h-6 text-[#e75480]" />
                </div>
                <h3 className={`${oswald.className} text-xl font-semibold`}>
                  Hydration
                </h3>
              </div>
              <p className="text-gray-600 flex-grow">
                Multiple hydration stations will be set up along the route to
                keep you refreshed. Additionally, post-run refreshments, will be
                available to help you recover and regain energy.
              </p>
            </motion.div>

            {/* Prize Money Card */}
            <motion.div
              variants={fadeIn}
              className="bg-white rounded-2xl p-4 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all border border-[#ffb6c1] flex flex-col w-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#ffb6c1] rounded-xl p-4 inline-flex items-center justify-center w-12 h-12">
                  <Banknote className="w-6 h-6 text-[#e75480]" />
                </div>
                <h3 className={`${oswald.className} text-xl font-semibold`}>
                  Prize Money *
                </h3>
              </div>
              <p className="text-gray-600 flex-grow">
                Exciting prizes worth Rs. 45000 for the top 5 winners in the 5K
                & 10K categories.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Route Maps */}
      <motion.section
        id="routes"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 relative"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            variants={fadeIn}
            className={`${oswald.className} text-3xl md:text-5xl font-bold text-center text-[#E75480] mb-12`}
          >
            Route Maps
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-3"
          >
            {[
              { title: "3K Route", file: "../3KM.gpx" },
              { title: "5K Route", file: "../5KM.gpx" },
              { title: "10K Route", file: "../10KM.gpx" },
            ].map((route, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-2xl p-3 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all"
              >
                <h3
                  className={`${oswald.className} text-xl md:text-2xl font-semibold text-center text-[#ff7388] flex items-center justify-center gap-2 mb-4`}
                >
                  <MapPin className="w-5 md:w-6 h-5 md:h-6" />
                  {route.title}
                </h3>
                <div className="h-[250px] md:h-[400px] w-full rounded-xl overflow-hidden border-2 border-[#ffb6c1]">
                  <MarathonMap gpxFile={route.file} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <div ref={sectionRef} className="w-full px-5 sm:px-24 md:px-4">
        <div className="max-w-3xl mx-auto mb-4 md:mb-6 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-2 shadow-lg shadow-[#ffb6c1] border border-[#ffb6c1]">
            <p className="text-[#76004a] text-sm md:text-xl lg:text-lg font-semibold">
              🎉 Mega Group Discount!🎉
            </p>
            <p className="text-gray-600 text-sm md:text-xl lg:text-lg">
              Get 25-30% OFF on registrations for minimum group of 50
              participants.
            </p>
            <Button
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-[#ffd1dc] hover:bg-[#ffb6c1] text-[#e75480] hover:text-[#ff007f] font-medium transition-colors text-sm md:text-xl lg:text-lg px-4 py-2 rounded-lg"
            >
              <Phone className="w-5 h-5" />
              Contact us
            </Button>
          </div>
        </div>
        <iframe
          src="https://konfhub.com/widget/runforcure?desc=true&secondaryBg=ffd1dc&ticketBg=ffd1dc&borderCl=ffd1dc&bg=ffffff&fontColor=76004a&ticketCl=76004a&btnColor=76004a&fontFamily=Prompt&borderRadius=10"
          id="konfhub-widget"
          title="Register for Run For Cure"
          width="100%"
          height="600"
        ></iframe>
      </div>

      {/* Partners Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-2 relative z-10 lg:max-w-[99%]">
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center justify-center gap-8 md:gap-8"
          >
            <motion.h2
              variants={scaleIn}
              className={`${oswald.className} text-3xl md:text-5xl font-bold text-[#e75480] bg-white/50 backdrop-blur-sm px-8 md:px-12 py-4 md:py-6 rounded-2xl shadow-sm text-center`}
            >
              Event Partners
            </motion.h2>
            <div className="grid grid-cols-1 md:flex md:flex-wrap items-center justify-center gap-6 md:gap-8">
              {/* Card 1 */}
              <div className="group w-[99vw] max-w-[900px] md:w-[600px] px-2 md:px-4">
                <motion.div
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.03,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  className="relative aspect-[2/1] bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all transform hover:-translate-y-2 duration-300"
                >
                  <Image
                    src="/logo_rotract.JPG"
                    alt="Rotaract DYPCOE Logo"
                    fill
                    className="object-contain p-2 scale-85 group-hover:scale-[1] transition-transform duration-300"
                    priority
                  />
                </motion.div>
                <p
                  className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-[#ff7388]`}
                >
                  Rotaract DYPCOE
                </p>
                <p className="text-gray-600 flex-grow">
                  Rotaract DYPCOE is a vibrant community of young leaders,
                  committed to service, leadership, and global impact. As part
                  of Rotary International's network, we drive educational and
                  health initiatives, making a difference in the community.
                </p>
              </div>
              {/* Card 2 */}
              <div className="group w-[99vw] max-w-[900px] md:w-[600px] px-2 md:px-4">
                <motion.div
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.03,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  className="relative aspect-[2/1] bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all transform hover:-translate-y-2 duration-300"
                >
                  <div className="px-16 md:px-20 h-full w-full relative">
                    <Image
                      src="/pradhikaran.png"
                      alt="Rotaract Pradhikaran Logo"
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </motion.div>
                <p
                  className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-[#ff7388]`}
                >
                  Rotary Pradhikaran
                </p>
                <p className="text-gray-600 flex-grow">
                  Rotary Club of Pradhikaran, chartered in 2011, is a dynamic
                  group of professionals dedicated to community service. Through
                  impactful projects, it supports education, healthcare, and
                  economic development while upholding Rotary's core values.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:flex md:flex-wrap items-center justify-center gap-6 md:gap-8">
              {/* Card 3 */}
              <div className="group w-[99vw] max-w-[900px] md:w-[600px] px-2 md:px-4">
                <motion.div
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.03,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  className="relative aspect-[2/1] bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all transform hover:-translate-y-2 duration-300"
                >
                  <div className="px-16 md:px-20 h-full w-full relative">
                    <Image
                      src="/alumni.png"
                      alt="Alumini association of DYPCOE"
                      fill
                      className="object-contain p-2 scale-85 group-hover:scale-[1] transition-transform duration-300"
                      priority
                    />
                  </div>
                </motion.div>
                <p
                  className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-[#ff7388]`}
                >
                  Alumni association of DYPCOE
                </p>
                <p className="text-gray-600 flex-grow">
                  The Alumni Association of D.Y. Patil College of Engineering
                  fosters student development through sessions, project
                  mentoring, and industry insights. Alumni support the college
                  by evaluating projects and offering sponsorships. Their
                  involvement enriches students' growth and connects them to
                  opportunities.
                </p>
              </div>
              {/* Card 4 */}
              <div className="group w-[99vw] max-w-[900px] md:w-[600px] px-2 md:px-4">
                <motion.div
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.03,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  className="relative aspect-[2/1] bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all transform hover:-translate-y-2 duration-300"
                >
                  <div className="px-16 md:px-20 h-full w-full relative">
                    <Image
                      src="/satej.png"
                      alt="SATEJ Logo"
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </motion.div>
                <p
                  className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-[#ff7388]`}
                >
                  SATEJ Sports Club
                </p>
                <p className="text-gray-600 flex-grow">
                  Satej Sports Club promotes fitness, teamwork, and community
                  through sports.
                  <br /> It organizes Satej Karandak, a premier national-level
                  and state-level intercollegiate sports event. With
                  participation from top colleges, fostering sportsmanship and
                  camaraderie.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sponsors Section - Commented out for now */}
      <motion.section
        id="sponsors"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-2 md:px-4 relative z-10">
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-center justify-center gap-12 md:gap-20"
          >
            <motion.h2
              variants={scaleIn}
              className={`${oswald.className} text-3xl md:text-5xl font-bold text-[#e75480] bg-white/50 backdrop-blur-sm px-8 md:px-12 py-4 md:py-6 rounded-2xl shadow-sm text-center`}
            >
              Our Sponsors
            </motion.h2>
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="cosponsors">
                <TabsList className="w-full mx-auto my-8">
                  <TabsTrigger value="cosponsors" className="bg-transparent">
                    Co-sponsors
                  </TabsTrigger>
                  <TabsTrigger value="media">Media-sponsors</TabsTrigger>
                  <TabsTrigger value="social">Social-sponsors</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="cosponsors"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center"
                >
                  {Array.from({ length: 6 }, (_, index) => (
                    <SponsorCard key={`cosponsors-${index}`} />
                  ))}
                </TabsContent>

                <TabsContent
                  value="media"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center"
                >
                  {Array.from({ length: 6 }, (_, index) => (
                    <SponsorCard key={`media-${index}`} />
                  ))}
                </TabsContent>
                <TabsContent
                  value="social"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center"
                >
                  {Array.from({ length: 6 }, (_, index) => (
                    <SponsorCard key={`social-${index}`} />
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <SponsorsSlider />

      {/* Footer */}
      <motion.footer
        id="contact"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-[linear-gradient(180deg,_#ffd1dc_25%,_white)] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="container mx-auto px-2 py-12 md:py-16 relative">
          {/* Contact Information */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4 md:px-8 mb-8">
            {/* Row 1 - 2 contacts */}
            <motion.div variants={fadeIn} className="text-center col-span-1">
              <h3
                className={`${oswald.className} text-base md:text-lg font-semibold mb-1`}
              >
                Faculty Co-ordinator (Rotaract Club of DYPCOE)
              </h3>
              <p className="text-gray-600 text-sm md:text-base px-1">
                Mrs. Trupti Wagh
              </p>
              <p className="text-[#ff7388] font-medium text-sm md:text-base">
                +91 9763194466
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center col-span-1">
              <h3
                className={`${oswald.className} text-base md:text-lg font-semibold mb-1`}
              >
                Director Of Physical Education and Sports
              </h3>
              <p className="text-gray-600 text-sm md:text-base px-1">
                Mr. Abaji Mane
              </p>
              <p className="text-[#ff7388] font-medium text-sm md:text-base">
                +91 9767063728
              </p>
            </motion.div>
          </div>
          {/* Row 2 - 3 Event Organizers */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 mb-8">
            <motion.div
              variants={fadeIn}
              className="text-center col-span-2 md:col-span-1"
            >
              <h3
                className={`${oswald.className} text-base md:text-lg font-semibold mb-1`}
              >
                Event Organizer
              </h3>
              <p className="text-gray-600 text-sm md:text-base px-1">
                Rtr. Dnyaneshwri Korhale
              </p>
              <p className="text-[#ff7388] font-medium text-sm md:text-base">
                +91 7387958396
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="text-center col-span-2 md:col-span-1"
            >
              <h3
                className={`${oswald.className} text-base md:text-lg font-semibold mb-1`}
              >
                Event Organizer
              </h3>
              <p className="text-gray-600 text-sm md:text-base px-1">
                Rtr. Vaibhav Patil
              </p>
              <p className="text-[#ff7388] font-medium text-sm md:text-base">
                +91 9373477561
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="text-center col-span-2 md:col-span-1"
            >
              <h3
                className={`${oswald.className} text-base md:text-lg font-semibold mb-1`}
              >
                Event Organizer
              </h3>
              <p className="text-gray-600 text-sm md:text-base px-1">
                Rtr. Prathamesh Pawar
              </p>
              <p className="text-[#ff7388] font-medium text-sm md:text-base">
                +91 7620567935
              </p>
            </motion.div>
          </div>

          {/* Documents Links */}
          <motion.div
            variants={fadeIn}
            className="flex justify-center gap-4 mb-6"
          >
            <Link
              href="https://drive.google.com/file/d/1H50e2X7ik3AFVtSChY8vCk7zN4AZYyQo/view"
              target="_blank"
              className="text-[#ff007f] hover:text-[#e75480] underline underline-offset-2 text-sm md:text-base font-medium transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="https://drive.google.com/file/d/13QNnPZnAkH6_UwRnLdqii8YhH2O1ajqQ/view "
              target="_blank"
              className="text-[#ff007f] hover:text-[#e75480] underline underline-offset-2 text-sm md:text-base font-medium transition-colors"
            >
              Sponsorship Brochure
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn}
            className="flex justify-center gap-6 mb-8"
          >
            <Link
              href="https://instagram.com/rotaract_dypcoe"
              target="_blank"
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Instagram className="w-6 h-6 text-pink-600" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rotaract-club-of-dypcoe"
              target="_blank"
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6 text-[#0077b5]" />
            </Link>
            <Link
              href="mailto:rotract_club@dypcoeakurdi.ac.in"
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Mail className="w-6 h-6 text-[#ff7388]" />
            </Link>
          </motion.div>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="flex items-center justify-center gap-2 text-gray-600">
              © 2024 Rotaract Club of DYPCOE. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

// <div className="group w-[50vw] max-w-[900px] lg:w-[250px] px-2 md:px-4">
//   <motion.div
//     variants={scaleIn}
//     whileHover={{
//       scale: 1.03,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     }}
//     className="relative aspect-[2/1] bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all transform hover:-translate-y-2 duration-300"
//   >
//     <Image
//       src="/matoshri.png"
//       alt="Sponsor Logo"
//       fill
//       className="object-contain p-2 scale-85 group-hover:scale-[1] transition-transform duration-300"
//       priority
//     />
//   </motion.div>
//   <p className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-[#ff7388]`}>
//     SHUBHMATOSHRI
//   </p>
// </div>
// <div className="group w-[50vw] max-w-[900px] lg:w-[250px] px-2 md:px-4">
//   <motion.div
//     variants={scaleIn}
//     whileHover={{
//       scale: 1.03,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     }}
//     className="relative aspect-[2/1] bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all transform hover:-translate-y-2 duration-300"
//   >
//     <Image
//       src="/matoshri.png"
//       alt="Sponsor Logo"
//       fill
//       className="object-contain p-2 scale-85 group-hover:scale-[1] transition-transform duration-300"
//       priority
//     />
//   </motion.div>
//   <p className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-[#ff7388]`}>
//     SHUBHMATOSHRI
//   </p>
// </div>
// <div className="group w-[50vw] max-w-[900px] lg:w-[250px] px-2 md:px-4">
//   <motion.div
//     variants={scaleIn}
//     whileHover={{
//       scale: 1.03,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     }}
//     className="relative aspect-[2/1] bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all transform hover:-translate-y-2 duration-300"
//   >
//     <Image
//       src="/matoshri.png"
//       alt="Sponsor Logo"
//       fill
//       className="object-contain p-2 scale-85 group-hover:scale-[1] transition-transform duration-300"
//       priority
//     />
//   </motion.div>
//   <p className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-[#ff7388]`}>
//     SHUBHMATOSHRI
//   </p>
// </div>
// <div className="group w-[50vw] max-w-[900px] lg:w-[250px] px-2 md:px-4">
//   <motion.div
//     variants={scaleIn}
//     whileHover={{
//       scale: 1.03,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     }}
//     className="relative aspect-[2/1] bg-white/70 backdrop-blur-sm rounded-2xl p-2 shadow-lg shadow-[#ffb6c1] hover:shadow-xl hover:shadow-[#ffb6c1] transition-all transform hover:-translate-y-2 duration-300"
//   >
//     <Image
//       src="/matoshri.png"
//       alt="Sponsor Logo"
//       fill
//       className="object-contain p-2 scale-85 group-hover:scale-[1] transition-transform duration-300"
//       priority
//     />
//   </motion.div>
//   <p className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-[#ff7388]`}>
//     SHUBHMATOSHRI
//   </p>
// </div>
