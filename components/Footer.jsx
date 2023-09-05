'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[40px] text-[40px] text-white">
          Contact GRoTh Team Now
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <img
            src="/call.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            contact now
          </span>
        </button>
      </div>
      <div className="w-full mt-12 max-w-8xl">
        <div className="flex flex-col md:flex-row text-center md:text-left">
          <div className="flex flex-col items-center md:items-start w-full md:w-2/6 border-b pb-8 md:pb-0 md:border-none border-gray-600 ">
            <a href="#explore">
              <img
                className="mx-auto mt-2 my-3 w-16"
                src="./logo.png"
              />
            </a>
            <p className="mt-2 text-2xl font-light text-gray-100">
              Become a Top 1% Engineer.
            </p>
            {/* <img
              className="hidden md:block my-10 w-16"
              src="../img/certified.png"
            /> */}
          </div>
          <div className="flex flex-col w-full md:w-1/6 md:ml-8 text-md">
            <p className="mt-6 md:mt-0 text-2xl text-white">About Us</p>
            <a
              href="/Services"
              className="mt-4  font-light text-gray-600 hover:text-gray-300"
            >
              Careers
            </a>
            <a
              href="#explore"
              className="mt-2 font-light text-gray-600 hover:text-gray-300"
            >
              GRoTh for Good
            </a>
            <a
              href="#explore"
              className="mt-2  font-light text-gray-600 hover:text-gray-300"
            >
              Brand Handbook
            </a>
            <a
              href="#explore"
              className="mt-2 font-light text-gray-600 hover:text-gray-300"
            >
              Terms & Privacy
            </a>
          </div>
          <div className="flex flex-col w-full md:w-1/6 md:ml-8 text-md">
            <p className="mt-6 md:mt-0 text-2xl text-white">Get Help</p>
            <a
              href="#explore"
              className="mt-4  font-light text-gray-600 hover:text-gray-300"
            >
              Refund policy
            </a>
            <a
              href="#explore"
              className="mt-2 font-light text-gray-600 hover:text-gray-300"
            >
              Terms of Use
            </a>
            <a
              href="#explore"
              className="mt-2 font-light text-gray-600 hover:text-gray-300"
            >
              Youtube Channel
            </a>
            <a
              href="#explore"
              className="mt-2 font-light text-gray-600 hover:text-gray-300"
            >
              Contact Sales
            </a>
            {/* <a
              href="#explore"
              className="mt-2  font-light text-gray-600 hover:text-gray-300"
            >
              Status
              <span className="ml-1 px-1 font-semibold text-gray-400 text-xs bg-gray-600 rounded">
                99.99%
              </span>
            </a> */}
          </div>
          <div className="flex flex-col w-full md:w-1/5 md:ml-8 text-md">
            <p className="mt-6 md:mt-2 text-xl text-white"> Ph.no: +91-89889-34895</p>

            <p className="mt-6 md:mt-2 text-xl text-white"> Near ABC, Pune, MAHARASHTRA.</p>
            <p className="mt-6 md:mt-2 text-xl text-white"> team@GRoTh.in</p>

          </div>

        </div>
        {/* <div className="mt-6 flex flex-col md:flex-row items-center justify-between py-4 w-full border-t border-gray-600">
          <div className="flex flex-col md:flex-row text-center text-gray-600">
            <img className="hidden md:block" src="../footer.png" />
            <p className="mt-4 md:mt-0 ml-2 text-sm text-gray-400">
              Made By Hemant Gaur
            </p>
            <p className="mt-4 md:mt-0 ml-2 text-sm font-light">
              © 2023 Using Tailwind
            </p>
          </div>
        </div> */}
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">GRoTh</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 GRoTh. Made By Hemant.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
