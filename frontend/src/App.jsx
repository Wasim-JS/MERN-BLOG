import Home from "./components/pages/Home/Home"
import Layout from "./components/pages/Layout/Layout"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "./components/pages/Login/Login"
import Register from "./components/pages/Register/Register"

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/login"  element={<Login />}/>
      <Route path="/register"  element={<Register />}/>
    </Routes>
   </Router>
  )
}

export default App