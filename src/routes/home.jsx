import styles from "../styles/home.module.css";

function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.firstHero}>
        <p>Some kinda shopping image here</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ullam beatae obcaecati consequatur provident deleniti dignissimos libero asperiores neque repellat, commodi vitae amet ea et aut vero quam! Adipisci, modi.</p>
      </div>
      <hr />
      <div className={styles.secondHero}>
        <div className={styles.heroListContainer}>
          <h3>Shopping made easy</h3>
          <ul className={styles.list}>
            <li>Everything in one place</li>
            <li>Quality products</li>
            <li>Low prices</li>
          </ul>
        </div>
        <div>Image here</div>
      </div>
    </main>
  )
}

export default Home;