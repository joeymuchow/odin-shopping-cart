import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css";
import home from "../assets/home.png";
import shop from "../assets/shop.png";
import cart from "../assets/cart.png";

function Nav() {

  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/"><img src={home} alt="Home" /> Home</Link>
        <Link to="/shop"><img src={shop} alt="Shop" /> Shop</Link>
        <Link to="/cart"><img src={cart} alt="Cart" /> Cart</Link>
      </nav>
    </div>
  )
}

export default Nav;