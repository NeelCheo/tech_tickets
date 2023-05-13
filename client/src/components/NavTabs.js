import React from 'react';
//import '../styles/NavTabs.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='navtabs'>
    <ul className="nav nav-tabs">
        <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('Login')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
     
      <li className="nav-item">
        <a
          href="#Signup"
          onClick={() => handlePageChange('Signup')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
          Sign Up
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Ticket"
          onClick={() => handlePageChange('Ticket')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Ticket' ? 'nav-link active' : 'nav-link'}
        >
          Submit a New Ticket
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Open"
          onClick={() => handlePageChange('Open')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Open' ? 'nav-link active' : 'nav-link'}
        >
          View your open tickets
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
