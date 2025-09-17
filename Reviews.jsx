import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialCard from './TestimonialCard';
import Review1 from './assets/review1.webp';
import Review2 from './assets/review2.webp';
import Review3 from './assets/review3.webp';
import Review4 from './assets/review4.webp'
import './Bluestone.css';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="testimonials-section">
      <h2 className="testimonial-title">Customer Testimonials</h2>
      <div className="testimonial-container">
        <TestimonialCard
          image={Review1}
          name="Akanksha Khanna, 27"
          review={`Delighted with my engagement ring from BlueStone! It's my dream ring,fits perfectly and is stunning to look at.
          Thanks,BlueStone,for helping us find the perfect symbol of love!`}
          tilt="tilt-left"
        />
        <TestimonialCard
          image={Review2}
          name="Nutan Mishra, 33"
          review="I got a Nazariya for my baby boy from BlueStone. It's so cute seeing it on my little one's wrist,and it gives me a
          sense of security knowing it's there. Thanks,BlueStone,for making such lovely pieces for our little ones!"
          tilt="tilt-center"
        />
        <TestimonialCard
          image={Review3}
          name="Divya Mishra, 26"
          review="On Valentine's Day,My husband gifted me a necklace from BlueStone,and I haven't taken it off even once.Everyone asks
          me where it's from,and I just LOVE how nice it looks on me."
          tilt="tilt-right"
        />
           <TestimonialCard
          image={Review4}
          name="Anuska Ananya, 24"
          review="BlueStone is my go-to place for jewellery. I love that I can wear their jewellery to work,dates,parties
          and brunches;it goes with everything and makes my outfit look stylish and trendy."
          tilt="tilt-right"
        />
      </div>
    </div>
  );
};

export default Testimonials;