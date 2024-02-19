import React, { useState } from 'react';
import { useStyles } from './HeaderStyles';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Logo from '../../img/wheel.svg';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const classes = useStyles();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isMobileMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logoLink}>
          Aut<img src={`${Logo}`} className={classes.logo} alt='O' />
        </Link>
        <Navbar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
        <button
          className={classes.mobileMenuToggle}
          onClick={toggleMobileMenu}
        >
          { !isMobileMenuOpen ? <FaBars className={classes.mobileMenuToggleIcon}/> : <AiOutlineClose className={classes.mobileMenuToggleIcon} />}
        </button>        
      </div>
    </header>
  );
};

export default Header;
