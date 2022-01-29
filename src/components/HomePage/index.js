import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import HeaderPage from '../HeaderPage'
import Carousel from '../Carousel'
import PopularRestaurants from '../PopularRestaurants'
import Footer from '../Footer'
import './index.css'

const HomePage = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <HeaderPage activeTab="HOME" />
      <div className="home">
        <Carousel />
        <PopularRestaurants />
      </div>
      <Footer />
    </>
  )
}

export default HomePage
