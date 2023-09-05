
'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const Testimonials = () => (
  <section className="sm:px-16 sm:py-8 xs:p-8 px-6 py-8">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      {/* <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          className="w-full lg:h-[610px] md:h-[320px] min-h-[150px] h-[320px] object-cover rounded-[40px]"
          src="https://images.pexels.com/photos/5439427/pexels-photo-5439427.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="get-started"
        //   className="w-[90%] h-[70%] object-contain rounded-xl md:rounded-[40px]"
        />
      </motion.div> */}
      {/* <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| What Our Clients Says" />
        <TitleText title={<>"GRoTh Did WonderFul Job"</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {testimonials.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-200 mb-12 text-center">What our Clients Says</h1>
          <div className="flex flex-wrap -m-4 group">
            <div className="p-4 hover:p-0 md:w-1/3 w-full group-hover:blur-sm hover:!blur-none">
              <div className="h-full bg-gray-100 p-8 rounded cursor-pointer mix-blend-luminosity">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  We've been trying to put together a functional website since I began my practice in April of 2012. I am happy to say we finally hired the Creative Solutions team and they've worked closely with us throughout the process, staying on task, on target, and on budget. I also appreciate their quick and courteous responses. I highly recommend their service!
                </p>
                <a className="inline-flex items-center" href="/">
                  <img alt="testimonial" src="https://source.unsplash.com/featured?person" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">CMO</span>
                    <span className="text-gray-500 text-sm">Leading Medical Care Company</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 hover:p-0 md:w-1/3 w-full group-hover:blur-sm hover:!blur-none">
              <div className="h-full bg-gray-100 p-8 rounded cursor-pointer mix-blend-luminosity">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  I am really impressed by the quality of services I received from GRoTh. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of Creative Solutions and I will definitely use your services again.
                </p>
                <a className="inline-flex items-center" href="/">
                  <img alt="testimonial" src="https://source.unsplash.com/featured?user" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">General Manager</span>
                    <span className="text-gray-500 text-sm">Leading System Integrator</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 hover:p-0 md:w-1/3 w-full group-hover:blur-sm hover:!blur-none">
              <div className="h-full bg-gray-100 p-8 rounded cursor-pointer mix-blend-luminosity">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  We've been trying to put together a functional website since I began my practice in April of 2012. I am happy to say we finally hired the Creative Solutions team and they've worked closely with us throughout the process, staying on task, on target, and on budget. I also appreciate their quick and courteous responses. I highly recommend their service!
                </p>
                <a className="inline-flex items-center" href="/">
                  <img alt="testimonial" src="https://source.unsplash.com/featured?person" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">CMO</span>
                    <span className="text-gray-500 text-sm">Leading Medical Care Company</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </motion.div>
  </section>
);

export default Testimonials;

