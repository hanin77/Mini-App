import Header from "./Header"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="app-content">{children}</div>
      <Footer />
      <div className="circle-1 d-non d-md-block"></div>
      <div className="circle-2"></div>
    </div>
  )
}

export default Layout
