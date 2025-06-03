import { Outlet } from "react-router"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const DefaultLayout = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default DefaultLayout