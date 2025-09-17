import React from 'react';
import './allProducts.css';

const SearchFilter = ({ filters, onCheckboxChange }) => {
  const priceRanges = [
    { label: '₹10,000 - ₹20,000', value: '10000-20000' },
    { label: '₹20,000 - ₹30,000', value: '20000-30000' },
    { label: '₹30,000 - ₹40,000', value: '30000-40000' },
    { label: '₹40,000 - ₹50,000', value: '40000-50000' },
    { label: '₹50,000 and Above', value: '50000-999999' },
  ];

  const types = ['Watch Jewellery', 'Stud', 'Earrings', 'Rings', 'Pendants', 'Nose Pin', 'Necklaces', 'Bracelets'];
  const metals = ['Gold', 'Rose Gold', 'Silver'];
  const carats = ['18KT', '22KT', '24KT'];
  const occasions = ['Dailywear', 'Partywear', 'Bridal'];

  return (
    <div className="search-filter">
      <h3 className="filter-header">Filters</h3>

      {/* Price */}
      <div className="filter-group">
        <h4>Price</h4>
        {priceRanges.map(({ label, value }) => (
          <label key={value}>
            <input
              type="checkbox"
              checked={filters.price.includes(value)}
              onChange={() => onCheckboxChange('price', value)}
            />
            {label}
          </label>
        ))}
      </div>

      {/* Type */}
      <div className="filter-group">
        <h4>Type</h4>
        {types.map(type => (
          <label key={type}>
            <input
              type="checkbox"
              checked={filters.type.includes(type)}
              onChange={() => onCheckboxChange('type', type)}
            />
            {type}
          </label>
        ))}
      </div>

      {/* Metal */}
      <div className="filter-group">
        <h4>Metal</h4>
        {metals.map(metal => (
          <label key={metal}>
            <input
              type="checkbox"
              checked={filters.metal.includes(metal)}
              onChange={() => onCheckboxChange('metal', metal)}
            />
            {metal}
          </label>
        ))}
      </div>

      {/* Carat */}
      <div className="filter-group">
        <h4>Carat</h4>
        {carats.map(carat => (
          <label key={carat}>
            <input
              type="checkbox"
              checked={filters.carat.includes(carat)}
              onChange={() => onCheckboxChange('carat', carat)}
            />
            {carat}
          </label>
        ))}
      </div>

      {/* Occasion */}
      <div className="filter-group">
        <h4>Occasion</h4>
        {occasions.map(occasion => (
          <label key={occasion}>
            <input
              type="checkbox"
              checked={filters.occasion.includes(occasion)}
              onChange={() => onCheckboxChange('occasion', occasion)}
            />
            {occasion}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;