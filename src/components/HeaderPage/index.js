import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class HeaderPage extends Component {
  state = {isMobileMenuClicked: false}

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onClickMenuBar = () => {
    this.setState(prev => ({isMobileMenuClicked: !prev.isMobileMenuClicked}))
  }

  onCloseClicked = () => {
    this.setState(prev => ({isMobileMenuClicked: !prev.isMobileMenuClicked}))
  }

  render() {
    const {isMobileMenuClicked} = this.state
    return (
      <>
        <nav className="nav-header">
          <div className="nav-content">
            <div className="nav-bar-mobile-logo-container">
              <Link to="/" className="nav-link">
                <div className="header-logo-container">
                  <img
                    className="website-logo"
                    src="https://res.cloudinary.com/nsp/image/upload/v1635311275/tastyKitchens/websiteLogo_1x_fzy1tx.png"
                    alt="website logo"
                  />
                  <p className="logo-name">Tasty Kitchens</p>
                </div>
              </Link>
              <button type="button" className="nav-mobile-btn">
                <img
                  src="https://res.cloudinary.com/nsp/image/upload/v1635332660/tastyKitchens/menu_1x_fcu8zv.png"
                  alt="nav menu"
                  className="nav-bar-image"
                  onClick={this.onClickMenuBar}
                />
              </button>
            </div>

            <div className="nav-bar-large-container">
              <Link to="/" className="nav-link">
                <div className="header-logo-container">
                  <img
                    className="website-logo"
                    src="https://res.cloudinary.com/nsp/image/upload/v1635311275/tastyKitchens/websiteLogo_1x_fzy1tx.png"
                    alt="website logo"
                  />
                  <p className="logo-name">Tasty Kitchens</p>
                </div>
              </Link>
              <ul className="nav-menu">
                <li className="nav-menu-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-menu-item">
                  <Link to="/cart" className="nav-link">
                    Cart
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="logout-desktop-btn"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
        {isMobileMenuClicked && (
          <div className="nav-mobile-only-menu">
            <div className="nav-menu-mobile">
              <div className="nav-menu-container">
                <ul className="nav-menu-list-mobile">
                  <li className="nav-menu-item-mobile">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-menu-item-mobile">
                    <Link to="/cart" className="nav-link">
                      Cart
                    </Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="logout-desktop-btn-mobile"
                  onClick={this.onClickLogout}
                >
                  Logout
                </button>
              </div>
              <img
                src="https://res.cloudinary.com/nsp/image/upload/v1635332590/tastyKitchens/Shape_vud3fu.png"
                alt="nav close"
                className="nav-bar-image"
                onClick={this.onCloseClicked}
              />
            </div>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(HeaderPage)
