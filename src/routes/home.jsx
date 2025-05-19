import styles from "../styles/home.module.css";
import shopHero from "../assets/shop-hero.jpg";
import shopOnline from "../assets/shop-online.jpg";

function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.firstHero}>
        <img src={shopHero} alt="A small shop with items for sale on the walls." />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ullam beatae obcaecati consequatur provident deleniti dignissimos libero asperiores neque repellat, commodi vitae amet ea et aut vero quam! Adipisci, modi.</p>
      </div>
      <hr className={styles.hr} />
      <div className={styles.secondHero}>
        <div className={styles.heroListContainer}>
          <h3>Shopping made easy</h3>
          <ul className={styles.list}>
            <li>Everything in one place</li>
            <li>Quality products</li>
            <li>Low prices</li>
          </ul>
        </div>
        <div className={styles.imgContainer}>
          <img src={shopOnline} alt="Someone shopping online with their phone." />
        </div>
      </div>
    </main>
  )
}

export default Home;