import Footer from "../../Footer/Footer"
import Navbar from "../../NavBar/Navbar"

import './Layout.css'
const Layout = ({children}) => {
  return (
    <>
    <Navbar />
            <main>
                {children}
            </main>
    <Footer />
    </>
  )
}

export default Layout