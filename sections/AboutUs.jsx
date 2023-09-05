'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const AboutUs = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| What we do" textStyles="text-center" />

      {/* <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      > */}
      <div className="py-7 mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        <div className="text-center mx-4">
          <div className="mb-8">
            <h1 className="font-semibold text-3xl ">What Drives Us to create Magic Everyday</h1>
            <p className="text-xl text-opacity-70 mt-1 ">We are continuously getting bigger and better</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className="h-[220px] bg-opacity-5 p-5 rounded-xl relative overflow-hidden border-2 border-opacity-70 text-left"
            >
              <img src="/reward.svg" alt="1 millions listens"
                className="my-4 h-8 w-8"
              />
              <h1 className="font-semibold text-lg">Talented Team</h1>
              <p className="text-sm text-opacity-70 mt-1">We have skilled &amp; dedicated Team</p>
              {/* <div className="bg-brand-green h-12 w-12 rounded-full absolute -bottom-2.5 -right-2.5" /> */}
            </div>
            <div
              className="h-[220px] bg-brand-voilet bg-opacity-5 p-5 rounded-xl relative overflow-hidden border-2 border-brand-voilet border-opacity-70 text-left"
            >
              <img src="/employee.svg" alt="1 millions listens" className="my-4 h-8 w-8" />
              <h1 className="font-semibold text-lg text-brand-voilet">Employee Centric</h1>
              <p className="text-sm text-muted text-opacity-70 mt-1 text-brand-voilet">We care for our employees and are constantly engaged in creating a progressive environment.</p>
              {/* <div className="bg-brand-voilet h-12 w-12 rounded-full absolute -bottom-2.5 -right-2.5" /> */}
            </div>
            <div
              className="h-[220px] bg-brand-blue bg-opacity-5 p-5 rounded-xl relative overflow-hidden border-2 border-brand-blue border-opacity-70 text-left"
            >
              <img src="/growth.svg" alt="1 millions listens" className="my-4 h-8 w-8" />
              <h1 className="font-semibold text-lg text-brand-blue">Opportunities</h1>
              <p className="text-sm text-muted text-opacity-70 mt-1 text-brand-blue">We provide best Opportunities that helps out employees grow exponentially.</p>
              {/* <div className="bg-brand-blue h-12 w-12 rounded-full absolute -bottom-2.5 -right-2.5" /> */}
            </div>
            <div
              className="h-[220px] bg-brand-cyan bg-opacity-5 p-5 rounded-xl relative overflow-hidden border-2 border-brand-cyan border-opacity-70 text-left"
            >
              <img src="/vrpano.svg" alt="1 millions listens" className="my-4 h-8 w-8" />
              <h1 className="font-semibold text-lg text-brand-cyan">Respect Ideas</h1>
              <p className="text-sm text-muted text-opacity-70 mt-1 text-brand-cyan">We appreciate whatever idea our employees put forward. We Listens to our Employees. </p>
              {/* <div className="bg-brand-cyan h-12 w-12 rounded-full absolute -bottom-2.5 -right-2.5" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* </motion.p> */}

      {/* <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      /> */}
    </motion.div>
  </section>
);

export default AboutUs;

