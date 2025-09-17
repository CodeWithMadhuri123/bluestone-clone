import React, { useState, useRef } from 'react';
import './Bluestone.css';
import { FaPhoneAlt, FaSearch } from 'react-icons/fa';
import { HiVideoCamera } from 'react-icons/hi';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { MdOutlineAppRegistration, MdArrowDropDown } from 'react-icons/md';
import { BsEye } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import logo from './assets/bs-logo-2x.webp';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const modalRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowLogin(false);
    }
  };

  const handleSubmit = () => {
    if (!identifier.trim()) {
      alert("Please enter your Email or Phone Number");
      return;
    }
    fetch(`http://localhost:5000/users?identifier=${identifier}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        const user = data[0];
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify({ identifier: user.identifier }));
        localStorage.setItem("userId", JSON.stringify(user.id));
        localStorage.setItem("cart", JSON.stringify(user.cart || []));
        setShowLogin(false);
        setIdentifier("");
        window.location.reload();
      } else {
        const newUser = {
          id: Math.random().toString(16).substring(2,10),
          identifier,
          cart: []
        };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    })
      .then((res) => res.json())
      .then((savedUser) => {
        alert("Account created and logged in!");
        localStorage.setItem("user", JSON.stringify({ identifier: savedUser.identifier}));
        localStorage.setItem("userId", JSON.stringify(savedUser.id));
        localStorage.setItem("cart", JSON.stringify([]));
        setShowLogin(false);
        setIdentifier("");
        window.location.reload();
      })
    }
  })
      .catch((err) => {
        console.error("Error:", err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-top">
          <div className="navbar-logo">
            <img src={logo} alt="Bluestone" />
          </div>

          <div className="navbar-search">
            <input type="text" placeholder="Search for Jewellery" />
            <FaSearch className="search-icon" />
          </div>

          <div className="navbar-right">
            <div className="top-row">
              <div><FaPhoneAlt /> 18004190066 |</div>
              <div><HiVideoCamera /> Video Call Cart |</div>
              <div style={{ cursor: 'pointer' }} onClick={() => setShowLogin(true)}>
                <FiUser /> Login |
              </div>
              <div><MdOutlineAppRegistration /> Sign Up |</div>
            </div>

            <div className="bottom-row">
              <div><BsEye /> Recently Viewed |</div>
              <div><ImLocation /> Locate Our Store |</div>
              <div><AiOutlineHeart /></div>
              <Link to="/cart" className="cart-with-badge">
                <AiOutlineShoppingCart />
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-bottom">
          <ul className="menu">
            <li>10+1 Monthly Plan</li>
            <li>Watch Jewellery<MdArrowDropDown /></li>
            <li>Rings<MdArrowDropDown /></li>
            <li>Earrings<MdArrowDropDown /></li>
            <li>Pendants<MdArrowDropDown /></li>
            <li>Solitaires<MdArrowDropDown /></li>
            <li>All Jewellery<MdArrowDropDown /></li>
            <li>Gifts<MdArrowDropDown /></li>
            <li>Gold Coins<MdArrowDropDown /></li>
            <li>Offers</li>
          </ul>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={handleBackdropClick}
        >
          <div className="modal-dialog modal-dialog-centered" ref={modalRef}>
            <div className="modal-content rounded-3">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold text-uppercase">
                  Welcome back, <span className="text-primary">Login here</span>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLogin(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p className="mb-3">
                  Please enter your phone number or email address below.
                </p>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Email or Phone Number"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                  <button className="btn btn-danger" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>

                <p className="mt-3 small">
                  Don’t have an account? <span className="text-primary">Sign Up</span>
                </p>

                <div className="d-grid gap-2 mt-3">
                  <button className="btn btn-danger">Log in with Email</button>
                  <button className="btn btn-primary">
                    <i className="bi bi-facebook me-2"></i> Login with Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;