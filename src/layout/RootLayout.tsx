import { Outlet } from "react-router-dom"
import Footer from "../pages/Footer"
import Header from "../pages/Header"

const RootLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
