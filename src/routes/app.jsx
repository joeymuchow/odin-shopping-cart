import { Outlet } from "react-router-dom";
import styles from "../styles/app.module.css";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  // TODO - remote the below useEffect when you don't need to look at data in console anymore
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>The Shopping Cart</h1>
        <Nav />
      </header>
      {loading && <p>Loading...</p>}
      {!loading && <Outlet context={{ products: data, cart, setCart }} />}
      {error && <p>{error}</p>}
      <footer className={styles.footer}>
        Icons by{" "}
        <a href="https://icons8.com/" target="_blank">
          Icons8
        </a>
      </footer>
    </div>
  );
}

export default App;
