import React from 'react';
import BluestoneNavbar from './BluestoneNavbar';
import BluestoneHero from './BluestoneHero';
import BluestoneFooter from './BluestoneFooter';
import BluestoneCategories from './BluestoneCategories';
import HomeSlider from './BluestoneSlider';
import Goldmine from './BluestoneGoldmine';
import Collections from './Collections';
import Testimonials from './Reviews';
import InfoLinksSection from './InfoLinks';




function BluestoneHome() {
  return (
    <div>
      
      <BluestoneHero/>
      <BluestoneCategories/>
      <Goldmine/>
      <HomeSlider/>
      <Collections/>
      <Testimonials/>
      <BluestoneFooter/>
      <InfoLinksSection/>
    </div>
  );
}
export default BluestoneHome;