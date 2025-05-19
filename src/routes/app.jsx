import { Outlet } from "react-router-dom"
import styles from "../styles/app.module.css"

function App() {

  return (
    <div className={styles.appContainer}>
      <header>
        <h1 className={styles.title}>The Shopping Cart</h1>
        <p>Navbar will go here</p>
      </header>
      <Outlet />
    </div>
  )
}

export default App