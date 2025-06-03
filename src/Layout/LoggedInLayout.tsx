import { Outlet } from 'react-router'
import NavbarSecondary from '../Components/NavbarSecondary'

const LoggedInLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavbarSecondary/>
        <Outlet/>
    </div>
  )
}

export default LoggedInLayout