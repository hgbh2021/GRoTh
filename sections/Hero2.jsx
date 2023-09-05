'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';
import { TypingText, NewFeatures2 } from '../components';
import { Data } from '../constants';

const Hero2 = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Join the Revolution In IT Industry
        </motion.h1>

      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="https://b.zmtcdn.com/data/o2_assets/826e851c6f464964ee66c8a415903d881660110863.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| Why To Join Us" textStyles="text-center text-2xl font-semibold" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          We at <span className="font-extrabold text-white">GRoTh</span> Listens When {' '}
          <span className="font-extrabold text-white">
            People Root For YOU.
          </span>{' '}
          We Want {' '}
          <span className="font-extrabold text-white">Customer Obsessed, Frugal, UnParalled Team Worker, and Humble with Growth Mindset.</span>   Our track record speaks for itself, as we have consistently delivered <span className="font-extrabold text-white">Outstanding</span> solutions for countless clients across various industries.{' '}
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

    {/* job description started */}

    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img
            src="https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] sm:h-[380px] object-cover rounded-[40px]"
          />

        </motion.div>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Consultancy
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Remote Job
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid maiores soluta quaerat!
          </p>
          <div className="flex mt-3 mb-8 py-2 ">
            <a href="/">
              <button type="button"
                className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500"
              >
                Apply Now
              </button>

            </a>

          </div>
        </motion.div>

      </motion.div>
    </section>

    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Social Media Marketing
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Remote Job
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            “Working with GRoTh was very good, I recommend eceryone to give them a chance”
          </p>
          <div className="flex mt-3 mb-8 py-2 ">
            <a href="/">
              <button type="button"
                className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500"
              >
                Apply Now
              </button>

            </a>

          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img
            src="https://images.pexels.com/photos/6956316/pexels-photo-6956316.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] sm:h-[380px] object-cover rounded-[40px]"
          />

        </motion.div>
      </motion.div>
    </section>

    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img
            src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] sm:h-[380px] object-cover rounded-[40px]"
          />

        </motion.div>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            {/* <img className="w-[60%] mt-3 mb-8 py-2" src="/trello.png" alt="logo" /> */}
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              UI/UX Designing
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Onsite
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur impedit explicabo.
          </p>
          <div className="flex mt-3 mb-8 py-2 ">
            <a href="/">
              <button type="button"
                className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500"
              >
                Apply Now
              </button>

            </a>

          </div>
        </motion.div>

      </motion.div>
    </section>

    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            {/* <img className="w-[60%] mt-3 mb-8 py-2" src="/trello.png" alt="logo" /> */}
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Analytics
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
              Onsite
            </p>
          </div>

          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, dolores. Sed, expedita.
          </p>
          <div className="flex mt-3 mb-8 py-2 ">
            <a href="/">
              <button type="button"
                className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500"
              >
                Apply Now
              </button>

            </a>

          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img
            src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] sm:h-[380px] object-cover rounded-[40px]"
          />

        </motion.div>
      </motion.div>
    </section>
  </section>
);

export default Hero2;
