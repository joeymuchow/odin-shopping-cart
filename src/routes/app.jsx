import { Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <h1>The Shopping Cart</h1>
      <p>Navbar will go here</p>
      <Outlet />
    </div>
  )
}

export default App