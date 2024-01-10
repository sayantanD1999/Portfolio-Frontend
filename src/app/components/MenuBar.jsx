import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'
// import { customHistory } from '../CustomBrowsertHistory'

const MenuBar = () => {
  const cookies = new Cookies()
  let cookie = cookies.get('authToken')
  const removeCookie = () => {
    cookies.remove('authToken')
    // customHistory.push('/sign-in')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {!cookie ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sign-in">
                      Sign In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sign-up">
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <button onClick={removeCookie} className="nav-link">
                      Sign Out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MenuBar
