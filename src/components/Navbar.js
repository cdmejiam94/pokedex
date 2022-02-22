import React from 'react'

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-darg bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase link-light" href="/">{ brand }</a>
      </div>
    </nav>
  )
}

export default Navbar