import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-sm  fixed-top  '>
        <div className='container'>
          <a href='index.html' className='navbar-brand text-dark'>
            CurrencyMaster
          </a>
          <button
            className='navbar-toggler custom-toggler'
            data-toggle='collapse'
            data-target='#navbarCollapse'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav ml-auto '>
              <li className='nav-item'>
                <a href='#share-head-section py-0' className='nav-link'>
                  Share
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
