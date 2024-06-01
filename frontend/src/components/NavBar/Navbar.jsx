import { Link } from "react-router-dom"
import './NavBar.css'


const Navbar = () => {
  return (
    <header>
            <div className="header_left">
                       BLOG_APP
            </div>
            <nav className="header_nav">
                 
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                    <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                    <Link to={'/register'}>Register</Link>
                    </li>
                 
            </nav>
    </header>
  )
}

export default Navbar