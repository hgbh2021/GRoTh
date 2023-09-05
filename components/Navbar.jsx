'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <Link href="/About">
        <img
          src="/AboutUs.svg"
          alt="search"
          className="w-[34px] h-[34px] object-contain mx-2"
        />
      </Link>
      <Link href="/">
        <span className="self-center text-gray-400 text-2xl md:text-2xl font-semibold whitespace-nowrap">GRo<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Th</span></span>
      </Link>
      <Link href="/Vacancy">
        <p className="text-gray-200 text-lg font-semibold">Join Us</p>
      </Link>
    </div>
  </motion.nav>
);

export default Navbar;
