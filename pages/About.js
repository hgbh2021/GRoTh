import { Footer, Navbar } from '../components';
import { About, Hero, AboutUs, OurTeam } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      {/* <Explore /> */}
      <AboutUs />
    </div>
    <div className="relative">
      {/* <GetStarted /> */}
      <div className="gradient-04 z-0" />
      {/* <WhatsNew /> */}
    </div>
    {/* <World /> */}
    <div className="relative">
      {/* <Insights /> */}
      <div className="gradient-04 z-0" />
      {/* <Feedback /> */}
    </div>
    <div className="relative">
      {/* <Insights /> */}
      <div className="gradient-04 z-0" />
      {/* <Testimonials /> */}
      <OurTeam />
    </div>
    <Footer />
  </div>
);

export default Home;
