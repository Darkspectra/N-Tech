
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'

function App() {

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
