"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

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
export const SponsorCard = () => {
  return (
    <div className="group w-[50vw] max-w-[300px] lg:w-[250px] px-2 md:px-4">
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
          src="/matoshri.png"
          alt="Sponsor Logo"
          fill
          className="object-contain p-2 scale-85 group-hover:scale-[1] transition-transform duration-300"
          priority
        />
      </motion.div>
      <p
        className={`${oswald.className} text-lg md:text-xl font-semibold text-center mt-4 text-[#ff7388]`}
      >
        Sponsor 1
      </p>
    </div>
  );
};
