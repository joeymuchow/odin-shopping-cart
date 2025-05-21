import { useState } from "react";
import styles from "../styles/product.module.css";

function Product({ id, title, image, price, description }) {
  const [quantity, setQuantity] = useState(1);
  const formattedPrice = price.toFixed(2);

  return (
    <div className={styles.product}>
      <p className={styles.title}>{title}</p>
      <img src={image} alt={description} className={styles.image} />
      <p className={styles.price}>${formattedPrice}</p>
      <label htmlFor={`product-${id}`}>Quantity</label>
      <div className={styles.quantityContainer}>
        <button onClick={() => {
          setQuantity(quantity => quantity + 1);
        }}>+</button>
        <input type="number" id={`product-${id}`} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
        <button onClick={() => {
          setQuantity(quantity => {
            if (quantity === 0) {
              return 0;
            } else {
              return quantity - 1;
            }
          });
        }}>-</button>
      </div>
      <button className={styles.addToCart}>Add to cart</button>
    </div>
  )
}

export default Product;