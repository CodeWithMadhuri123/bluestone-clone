import React, { useEffect, useState } from 'react';
import './allProducts.css';

const Cart = () => {
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("loggedInUser" || "").trim().toLowerCase();
    fetch("http://localhost:5000/cart")
      .then(res => res.json())
      .then(data => {
        const userCart = data.filter(item => (item.userEmail || "").toLowerCase() === email);
        const initializedCart = userCart.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
          ringSize: item.ringSize || 'Select Size',
          giftMessage: item.giftMessage || 'No',
        }));

        setCartDetails(initializedCart);
      })
      .catch(err => console.error("Cart fetch error:", err));
  }, []);

  const handleQuantityChange = async (index, quantity) => {
    const updated = [...cartDetails];
    updated[index].quantity = parseInt(quantity);
    setCartDetails(updated);
    localStorage.setItem("cart", JSON.stringify(updated)); // ✅ also update localStorage
    const item = updated[index];
    await fetch(`http://localhost:5000/cart/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: item.quantity }),
    });
  };

  const handleRemove = async (index) => {
    const item = cartDetails[index];
    const updatedCart = cartDetails.filter((_, i) => i !== index);
    setCartDetails(updatedCart);

    // Remove from server
    await fetch(`http://localhost:5000/cart/${item.id}`, {
      method: "DELETE",
    });
  };

  const calculateTotal = () => {
    return cartDetails.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

const handlePlaceOrder = async () => {
  if (cartDetails.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  const totalAmount = calculateTotal();

  // Save order history first
  for (const item of cartDetails) {
    await fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...item,
        orderDate: new Date().toISOString(),
        totalAmount
      }),
    });
  }

  // Clear cart in backend
  for (const item of cartDetails) {
    await fetch(`http://localhost:5000/cart/${item.id}`, {
      method: "DELETE",
    });
  }

  setCartDetails([]);
  localStorage.removeItem("cart");
  alert(`Order placed successfully for ₹${totalAmount.toLocaleString()}!`);
};

  return (
    <div className="cart-page">
      <h2>My Shopping Cart 🛒</h2>

      {cartDetails.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartDetails.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.img} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price.toLocaleString()}</p>

                  <div className="cart-controls">
                    <label>
                      Quantity:
                      <select
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(index, e.target.value)}
                      >
                        {[1, 2, 3, 4, 5].map((q) => (
                          <option key={q} value={q}>{q}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <button className="remove-btn" onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total Price: ₹{calculateTotal().toLocaleString()}</h3>
            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;