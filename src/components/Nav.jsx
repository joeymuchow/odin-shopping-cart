import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css";
import homeIcon from "../assets/home.png";
import shopIcon from "../assets/shop.png";
import cartIcon from "../assets/cart.png";

function Nav({ cart }) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/">
          <img src={homeIcon} alt="Home" /> Home
        </Link>
        <Link to="/shop">
          <img src={shopIcon} alt="Shop" /> Shop
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" /> Cart{" "}
          {cart && (cart.length ? `(${cart.length})` : "")}
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
