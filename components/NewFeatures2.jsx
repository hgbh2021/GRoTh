'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
// import { testimonials } from '../constants';
// import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants } from '../utils/motion';

const NewFeatures2 = ({ imgUrl, title, subtitle }) => (
  <div className="col-md-4 col-lg-4 mb-6 mt-6 items-align-center">
    <div
      className={`${styles.flexCenter} w-[100px] h-[100px] rounded-[24px] bg-[#323F5D] box_border items-center`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 img-fluid mb-2" />
      </motion.div>

    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures2;
