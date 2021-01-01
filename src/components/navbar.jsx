import React from 'react';

const Navbar = ({ totalCount }) => {
  return (
    <header className="navbar-container">
      <span className="navbar-icon">
        <i className="fab fa-accusoft"></i>
      </span>
      <span className="navbar-title">Habit Tracker</span>
      <div className="navbar-count">{totalCount}</div>
    </header>
  );
};

export default Navbar;
