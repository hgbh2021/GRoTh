'use client';

import { motion } from 'framer-motion';
import { TypingText, NewFeatures2 } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { Data } from '../constants';

const Services = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Why Us over Others" textStyles="text-center text-2xl" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        We at <span className="font-extrabold text-white">GRoTh</span> understands the power of {' '}
        <span className="font-extrabold text-white">
          innovation and creativity.
        </span>{' '}
        With our diverse skill set and unwavering commitment to excellence,{' '}
        <span className="font-extrabold text-white">we are here to exceed your expectations and help you achieve your goals.</span>   Our track record speaks for itself, as we have consistently delivered <span className="font-extrabold text-white">Outstanding</span> solutions for countless clients across various industries.{' '}
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
      <section className="mt-[48px] flex flex-wrap justify-content-evenly gap-[24px]">
        <div className="container mx-auto py-5">
          <div className="mb-5 text-center">
            <TypingText title="Services We Provide" textStyles="text-center font-semibold text-white text-4xl" />
            <p className="text-muted text-gray-300 font-semibold text-2xl mt-10 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="mt-[90px] grid grid-cols-1 md:grid-cols-3 gap-y-4 sm:gap-x-6">
            {Data.map((feature) => (
              <NewFeatures2 key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  </section>
);

export default Services;
