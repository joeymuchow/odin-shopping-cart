import { useState } from "react";
import styles from "../styles/product.module.css";

function Product({ id, title, image, price, description, setCart }) {
  const [quantity, setQuantity] = useState(1);
  const formattedPrice = price.toFixed(2);

  return (
    <div className={styles.product}>
      <p className={styles.title}>{title}</p>
      <img src={image} alt={description} className={styles.image} />
      <p className={styles.price}>${formattedPrice}</p>
      <label htmlFor={`product-${id}`}>Quantity</label>
      <div className={styles.quantityContainer}>
        <button
          onClick={() => {
            setQuantity((quantity) => {
              if (quantity === 1) {
                return 1;
              } else {
                return quantity - 1;
              }
            });
          }}
        >
          -
        </button>
        <input
          type="number"
          id={`product-${id}`}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button
          onClick={() => {
            setQuantity((quantity) => quantity + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className={styles.addToCart}
        onClick={(e) => {
          e.preventDefault();
          setCart((cart) => {
            let newEntry = true;
            const newCart = [];
            for (let i = 0; i < cart.length; i++) {
              if (cart[i].id === id) {
                newEntry = false;
                console.log(cart[i].title);
                console.log(cart[i].quantity);
                console.log(quantity);
                const newTotal = cart[i].quantity + quantity;
                newCart.push({
                  id: cart[i].id,
                  title: cart[i].title,
                  price: cart[i].price,
                  quantity: newTotal,
                });
              } else {
                newCart.push({ ...cart[i] });
              }
            }
            if (newEntry) {
              newCart.push({ id, title, price, quantity });
            }
            return newCart;
          });
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
