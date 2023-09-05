'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';

const Hero = () => (
  <section className="sm:py-4 xs:py-8 py-3 sm:pl-2 pl-6">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} sm:py-6 xs:py-8 py-12 mx-auto flex flex-col`}
      >
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div
            className=" flex pt-32 px-6 md:pt-0 lg:pt-12 items-center justify-center bg-hero overflow-hidden bg-center bg-no-repeat bg-gray-700 bg-blend-multiply bg-[url('/conference.jpg')]"
          >
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl">Get Best Services at Reasonable price</h1>
              <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nam?</p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="/" target="_blank" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                  Get In Touch
                  <img className="ml-3 -mr-1  flex-shrink-0 w-6 h-6" src="call.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>

    </motion.div>
  </section>
);

export default Hero;
