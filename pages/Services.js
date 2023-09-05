
import { Footer, Navbar } from '../components';
import { Services } from '../sections';

const Career = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <Services />
      <div className="gradient-03 z-0" />
    </div>
    <Footer />
  </div>
);

export default Career;

