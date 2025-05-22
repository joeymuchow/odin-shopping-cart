import { useOutletContext } from "react-router-dom";
import Product from "../components/Product";
import styles from "../styles/shop.module.css";

function Shop() {
  const { products, setCart } = useOutletContext();

  return (
    <main className={styles.products}>
      {products &&
        products.map((value) => {
          return (
            <Product
              key={value.id}
              id={value.id}
              title={value.title}
              description={value.description}
              image={value.image}
              price={value.price}
              setCart={setCart}
            />
          );
        })}
    </main>
  );
}

export default Shop;
