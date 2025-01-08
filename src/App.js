import './App.css';
import NavBar from './Nav-bar/Nav-bar';
import Slider from './Slider/Slider';
import GallaryRender from './Gallary/Gallary';
import SecondSlider from './Second-slider/Second-slider';
import GridRender from './Grid/Grid.js';
import Advantages from './Advantages-block/Advantages.js';
import ThirdSlider from './Third-slider/Third-slider.js';
import InformationCard from './Information-block/Information-card.js';
import BannerFirst from './BannerFirst/Banner-first.js';
import CustomerBanner from './Customer-form-inf-banner/Customer-banner.js';
import Reviews from './Reviews/Reviews.js';
import Footer from './Footer/Footer.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <GallaryRender />
      <SecondSlider />
      <GridRender />
      <Advantages />
      <ThirdSlider />
      <InformationCard />
      <BannerFirst />
      <CustomerBanner />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
