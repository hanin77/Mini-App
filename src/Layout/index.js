import Header from "./Header"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="app-content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
