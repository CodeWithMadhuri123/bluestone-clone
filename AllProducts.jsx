import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './allProducts.css';
import SearchFilter from './SearchFilter';
import Navbar from './BluestoneNavbar';
import goldbanner from './assets/goldbanner.webp';


import omring from './assets/om-ring.webp';
import giannaring from './assets/giannaring.webp';
import earring from './assets/earring2.webp';
import stud from './assets/aliciostud.webp';
import alma from './assets/almaring.webp';
import cygnusring from './assets/cygnusring.webp';
import cloe from './assets/cloewatch.webp';
import ayanering from './assets/ayaneband.webp';
import balsam from './assets/balsamnose.webp';
import leah from './assets/leahring.webp';
import flutter from './assets/flutterchain.webp';
import arkasa from './assets/aksarawatch.webp';
import love from './assets/lovewatch.webp';
import elif from './assets/eliphearring.webp';
import odalia from './assets/odialahring.webp';
import ciarah from './assets/ciarahring.webp';
import klaasi from './assets/klasiwatch.webp';
import ordell from './assets/ordealwatch.webp';
import daphne from './assets/daphnenose.webp';
import agnit from './assets/agnitwatch.webp';
import happy from './assets/behappywatch.webp';
import lovely from './assets/lovewatch.webp';
import twisted from './assets/doubleheartchain.webp';
import hamsa from './assets/hamsaearring.webp';
import sun from './assets/sunchain.webp';

const products = [
  { img: omring, name: "The Yashashvi Om Ring", price: 130415, oldPrice: 135415, type: 'Rings', occasion: 'Dailywear', metal: 'Gold', Carat: '18KT' },
  { img: giannaring, name: "The Gianna Ring", price: 60792, oldPrice: 65453, type: 'Rings', occasion: ['Dailywear','Bridal'], metal:'Gold',Carat:'22KT' },
  { img: earring, name: "The Indu Sui Dhaga Earrings", price: 56161, oldPrice: 57399, type: 'Earrings', occasion: ['Dailywear','Bridal'], metal:'Gold', Carat:'24KT' },
  { img: stud, name: "The Alicio Stud For Him", price: 9142, oldPrice: 9429, type: 'Stud', occasion: 'Dailywear', metal:'Gold', Carat:'18KT' },
  { img: alma, name: "The Alma Ring", price: 42991, oldPrice: 44877, type: 'Rings', occasion: ['Dailywear','Bridal'],metal:'Gold', Carat:'18KT'},
  { img: cygnusring, name: "The Cygnus Ring", price: 46482, oldPrice: 48372, type:'Rings', occasion: 'Dailywear',metal:'Gold',Carat:'22KT' },
  { img: cloe, name: "The Cloe Mutliwearable Watch Band", price: 21481, oldPrice: 21917, type:'Watch Jewellery', occasion: 'Dailywear', metal:'Gold',Carat:'18KT'},
  { img: ayanering, name: "The Ayane Band Ring", price: 94193, oldPrice: 99941, type: 'Bracelets', metal: 'Rose Gold',occasion:['Dailywear' ,'Bridal'],Carat:'24KT'},
  { img: balsam, name: "The Balsam Nose pin", price: 36376, oldPrice: 38595, type:'Nose Pin',occasion: ['Dailywear','Partywear'], metal:'Gold', Carat:'18KT'},
  { img: leah, name: "The Leah Ring", price: 37132, oldPrice: 38638, type: 'Rings', occasion:['Dailywear','Bridal','Partywear'],metal:'Gold', Carat:'22KT'},
  { img: flutter, name: "The Flutter And Floral Kids Necklace", price: 24654, oldPrice: 26340, type: 'Necklaces',occasion: ['Dailywear','Partywear'],metal:'Gold', Carat:'24KT'  },
  { img: arkasa, name: "The Arkasa Watch Band", price: 31024, oldPrice: 33046,type: 'Watch Jewellery',occasion: 'Dailywear',metal:'Gold', Carat:'18KT'},
  { img: love, name: "The Love Script Watch Band", price: 16564, oldPrice: 17373, type: 'Watch Jewellery', occasion: ['Dailywear','Partywear'],metal:'Gold', Carat:'22KT'},
  { img: elif, name: "The Elif Multi Pierced Stud Earrings", price: 16113, oldPrice: 16533, type: 'Stud', metal: 'Rose Gold',occasion: ['Dailywear' ,'Partywear'], Carat:'22KT'},
  { img: odalia, name: "The Odalia Ring", price: 61718, oldPrice: 65992, type: 'Rings', metal:'Silver',occasion: ['Dailywear','Partywear','Bridal'], Carat:'18KT'},
  { img: ciarah, name: "The Ciarah Ring", price: 39979, oldPrice: 41487, type: 'Rings',occasion: 'Partywear',metal:'Gold', Carat:'22KT'},
  { img: klaasi, name: "The Klaasi Multiwearable Watch Band", price: 21213, oldPrice: 21805, type: 'Watch Jewellery',occasion: 'Partywear',metal:'Gold', Carat:'24KT'},
  { img: ordell, name: "The Ordell Watch Charm", price: 10793, oldPrice: 11197, type: 'Watch Jewellery',occasion: 'Partywear',metal:'Gold', Carat:'18KT'},
  { img: daphne, name: "The Daphne Nose Pin", price: 8246, oldPrice: 10260, type: 'Nose Pin',occasion: 'Bridal',metal:'Gold', Carat:'22KT'},
  { img: agnit, name: "The Agnit Watch Band", price: 17574, oldPrice: 18383, type: 'Watch Jewellery',occasion: 'Partywear',metal:'Gold', Carat:'22KT'},
  { img: happy, name: "The Be Happy Watch Band", price: 20273, oldPrice: 20812, type: 'Watch Jewellery',occasion: ['Dailywear','Partywear'],metal:'Gold', Carat:'24KT'},
  { img: lovely, name: "The Lovely Heart Watch Charm", price: 10168, oldPrice: 10977, type: 'Watch Jewellery',occasion: ['Dailywear' ,'Partywear','Bridal'],metal:'Gold', Carat:'24KT'},
  { img: twisted, name: "The Twisted Heart Pendant", price: 15994, oldPrice: 16803,type: 'Pendants',occasion: 'Dailywear',metal:'Gold', Carat:'22KT'},
  { img: hamsa, name: "The Hamsa Earrings", price: 29666, oldPrice: 31743, type: 'Earring', metal: 'Silver',occasion: 'Partywear', Carat:'24KT'},
  { img: sun, name: "The Glorious Sun Pendant", price: 22799, oldPrice: 23810,type: 'Pendants',occasion: ['Dailywear' ,'Partywear'], metal:'Gold', Carat:'22KT'},
];

const AllProducts = ({ cartItems, setCartItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ price: [], type: [], metal: [], carat: [], occasion: [] });
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("loggedInUser") || "";
    if (storedEmail) {
      setEmail(storedEmail.trim().toLowerCase());
    } else {
      alert("Please log in first!");
    }
  }, []);

const handleAddToCart = async (product) => {
  try {
    // Check if product already exists in cartItems (frontend state)
    const existingItem = cartItems.find(item => item.id === product.id && item.userEmail === email);

    if (existingItem) {
      // Update quantity for existing item by 1
      const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };

      const res = await fetch(`http://localhost:5000/cart/${existingItem.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: updatedItem.quantity }),
      });

      if (!res.ok) {
        throw new Error('Failed to update cart item quantity');
      }

      // Update frontend state
      setCartItems(prev =>
        prev.map(item => (item.id === existingItem.id ? updatedItem : item))
      );

    } else {
      // Add new item with quantity 1
      const cartItem = {
        ...product,
        quantity: 1,
        userEmail: email.trim().toLowerCase(),
      };

      const postRes = await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });

      if (!postRes.ok) {
        const errorText = await postRes.text();
        throw new Error(`Failed to add item to cart: ${errorText}`);
      }

      const savedItem = await postRes.json();

      // Update frontend state with saved item (with ID)
      setCartItems(prev => [...prev, savedItem]);
    }

    alert("Item added to cart!");

  } catch (err) {
    console.error("Add to cart error:", err);
    alert("Something went wrong while adding to cart.");
  }
};

  const handleCheckboxChange = (category, value) => {
    setFilters(prev => {
      const isSelected = prev[category].includes(value);
      const updated = isSelected
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updated };
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filters.type.length === 0 || filters.type.includes(product.type);
    const matchesMetal = filters.metal.length === 0 || filters.metal.includes(product.metal);
    const matchesOccasion = filters.occasion.length === 0 ||
      (Array.isArray(product.occasion)
        ? product.occasion.some(o => filters.occasion.includes(o))
        : filters.occasion.includes(product.occasion));
    const matchesCarat = filters.carat.length === 0 || filters.carat.includes(product.Carat);
    const matchesPrice = filters.price.length === 0 ||
      filters.price.some(range => {
        const [min, max] = range.split('-').map(Number);
        return product.price >= min && (isNaN(max) || product.price <= max);
      });

    return matchesSearch && matchesType && matchesMetal && matchesOccasion && matchesCarat && matchesPrice;
  });

  return (
    <div className="all-products-page">
      <div className="banner">
        <img src={goldbanner} alt="Gold Upgrade Banner" />
      </div>

      <div className="page-content">
        <SearchFilter
          filters={filters}
          onCheckboxChange={handleCheckboxChange}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div className="product-container" key={index}>
                <div className="product-card">
                  <img src={product.img} alt={product.name} className="product-img" />
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <p>
                      <span className="price">₹{product.price}</span>
                      <span className="old-price">₹{product.oldPrice}</span>
                    </p>
                    <span className="save">Save ₹{product.oldPrice - product.price}</span>
                    <br />
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;