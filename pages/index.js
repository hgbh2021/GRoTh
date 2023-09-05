import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, WhatsNew, World, Testimonials, CTA, Testimonials2 } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <CTA />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      {/* <Insights /> */}
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <div className="relative">
      <Testimonials2 />
      <div className="gradient-04 z-0" />
      <Testimonials />
    </div>
    <Footer />
  </div>
);

export default Home;
