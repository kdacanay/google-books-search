import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark' >
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to='/' id="brand"><i className="fab fa-google" ></i>
          oogle Books</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link className='navbar-brand' to='/search' id="searchBrand">
              Search For Books
            </Link>
          </li>
          <li className='nav-item active'>
            <Link className='navbar-brand' to='/saved' id="savedBrand">
              Saved Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;