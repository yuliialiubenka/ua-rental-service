import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useStyles } from './LayoutStyles';

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header />
        <main className={classes.container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
