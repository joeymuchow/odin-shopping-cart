import { Outlet } from "react-router-dom"
import styles from "../styles/app.module.css"
import Nav from "../components/Nav"

function App() {

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>The Shopping Cart</h1>
        <Nav />
      </header>
      <Outlet />
      <footer className={styles.footer}>Icons by <a href="https://icons8.com/" target="_blank">Icons8</a></footer>
    </div>
  )
}

export default App