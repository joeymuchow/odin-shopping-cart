import { useOutletContext } from "react-router-dom";
import styles from "../styles/cart.module.css";

function Cart() {
  const { cart, setCart } = useOutletContext();
  const total = calculateTotal(cart);

  return (
    <main>
      <h3>Your cart</h3>
      {(!cart || cart.length < 1) && <p>Your cart is empty.</p>}
      <div className={styles.container}>
        {cart &&
          cart.map((value) => {
            return (
              <>
                <div key={value.id} className={styles.itemContainer}>
                  <div className={styles.cartItem}>
                    <p className={styles.title}>{value.title}</p>
                    <p className={styles.price}>Price: ${value.price.toFixed(2)}</p>
                    <p className={styles.quantity}>Qty: {value.quantity}</p>
                    <p className={styles.subtotal}>Subtotal: ${(value.price * value.quantity).toFixed(2)}</p>
                  </div>
                  <div className={styles.btnContainer}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setCart((cart) => {
                          return cart.filter((item) => {
                            return item.id !== value.id;
                          });
                        });
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
      </div>
      <p>Total: ${total.toFixed(2)}</p>
    </main>
  );
}

function calculateTotal(cart) {
  let total = 0;

  if (cart) {
    for (const item of cart) {
      total += item.price * item.quantity;
    }
  }

  return total;
}

export default Cart;
