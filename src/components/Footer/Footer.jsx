import React from 'react';
import { useStyles } from './FooterStyles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <p className={classes.footerText}>Designed and developed by Yuliia Koliesnik.</p>
        <p className={classes.footerText}>&copy; {new Date().getFullYear()} UA Rental Service. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
