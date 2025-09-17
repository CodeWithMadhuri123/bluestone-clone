import React from 'react';
import './Bluestone.css';
import solitaires from './assets/solitaires.webp';
import watchJewellery from './assets/watch-jewellery.webp';
import men from './assets/mens_v1.webp';
import mangalsutra from './assets/mangalsutras.webp';
import nosepins from './assets/nose-pins.webp';
import kids from './assets/kids.webp';
import gold from './assets/coins.webp';
import anklets from './assets/anklets.webp';
import pendants from './assets/pendants.webp';
import rings from './assets/rings.webp';
import necklaces from './assets/necklaces.webp';
import earrings from './assets/earrings.webp';
import bangles from './assets/bangles.webp';
import bracelets from './assets/bracelets.webp';
import chains from './assets/chains.webp';
import kada from './assets/kada.webp';

const row1 = [
  { img: solitaires, label: 'Solitaires' },
  { img: watchJewellery, label: 'Watch Jewellery' },
  { img: men, label: 'Mens Jewellery' },
  { img: mangalsutra, label: 'Mangalsutras' },
  { img: nosepins, label: 'Nose Pins' },
  { img: kids, label: 'Kids Jewellery' },
  { img: gold, label: 'Gold Coins' },
];

const row2 = [
  { img: pendants, label: 'Pendants' },
  { img: rings, label: 'Rings' },
  { img: necklaces, label: 'Necklaces' },
  { img: earrings, label: 'Earrings' },
  { img: bangles, label: 'Bangles' },
  { img: bracelets, label: 'Bracelets' },
  { img: chains, label: 'Chains' },
  { img: kada, label: 'Kada' },
];

const Category = () => {
  return (
    <div className="category-wrapper">
      <div className="category-row">
        {row1.map((cat, index) => (
          <div className="category-group" key={index}>
            <div className="category-card">
            <img src={cat.img} alt={cat.label} className="category-img" />
            </div>
            <div className="category-label">{cat.label}</div>
          </div>
        ))}
      </div>

      <div className="category-row">
        {row2.map((cat, index) => (
          <div className="category-group" key={index}>
            <div className="category-card">
            <img src={cat.img} alt={cat.label} className="category-img" />
            </div>
            <div className="category-label">{cat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;