
import { useState, useEffect } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Campus Men's Sneakers",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    id: 2,
    name: "Campus Men's OG-03 Sneakers",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=500"
  },
  {
    id: 3,
    name: "White Casual Sneaker",
    price: 70,
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500"
  },
  {
    id: 4,
    name: "Men's Mid Top Ankle Boots",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"
  }
];

function App() {
  // Hook 1: Cart ka data manage karne ke liye
  const [cart, setCart] = useState([]);

  // Hook 2: Cart ka total calculate karne ke liye
  const [total, setTotal] = useState(0);

  // Hook 3: Cart change hone par total update hoga
  useEffect(() => {
    const amount = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    setTotal(amount);
  }, [cart]);

  // Cart mein product add karna
  const addToCart = (product) => {
    setCart((previousCart) => {
      const exists = previousCart.find(
        (item) => item.id === product.id
      );

      if (exists) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  };

  // Quantity increase/decrease karna
  const changeQuantity = (id, change) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Cart se product remove karna
  const removeFromCart = (id) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };

  const bookServices = () => {
    if (cart.length === 0) {
      alert("Please add a product to your cart first!");
      return;
    }

    alert(`Order placed successfully! Total: $${total}`);
    setCart([]);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#home">👟 ShoeStore</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Categories</a>
          <a href="#about">About Us</a>
        </div>

        <a className="cart-link" href="#cart">
          🛒 Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </a>
      </nav>

      <main className="layout" id="home">
        <section className="products-section" id="products">
          <h1>Our Collection</h1>
          <p className="subtitle">
            Find your perfect pair of shoes.
          </p>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="image-box">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">${product.price}</p>

                  <button
                    onClick={() => addToCart(product)}
                    className="add-button"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="cart-panel" id="cart">
          <h2>🛒 Your Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">
              Your cart is empty. Add some shoes!
            </p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>${item.price} each</p>

                  <div className="quantity">
                    <button
                      onClick={() => changeQuantity(item.id, -1)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => changeQuantity(item.id, 1)}
                    >
                      +
                    </button>

                    <button
                      className="remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="cart-total">
            <h3>Total: ${total}</h3>
            <button onClick={bookServices} className="book-button">
              Place Order
            </button>
          </div>
        </aside>
      </main>

      <footer id="about">
        <p>© 2026 ShoeStore | Made with React Hooks</p>
      </footer>
    </div>
  );
}

export default App;
