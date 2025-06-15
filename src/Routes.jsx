import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Routes() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Routes
