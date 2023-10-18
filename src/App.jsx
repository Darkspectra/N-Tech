
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Discount from './Components/Discount'

function App() {

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar></NavBar>
        <Discount></Discount>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
