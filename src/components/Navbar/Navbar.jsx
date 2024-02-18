import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './NavbarStyles'; 

const Navbar = ({ isMobileMenuOpen }) => {
  const classes = useStyles(); 

  return (
    <nav className={`${classes.navbar} ${isMobileMenuOpen ? classes.navbarOpen : ''}`}>
      <ul className={classes.navList}>
        <li className={classes.navItem}><NavLink to="/" className={classes.navLink}>🏠 Home</NavLink></li>
        <li className={classes.navItem}><NavLink to="/catalog" className={classes.navLink}>🚘 Catalog</NavLink></li>
        <li className={classes.navItem}><NavLink to="/favorites" className={classes.navLink}>❤️ Favorites</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
