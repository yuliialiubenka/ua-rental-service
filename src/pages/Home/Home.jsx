import React from 'react';
import { useStyles } from './HomeStyles';
import Layout from '../../components/Layout/Layout';
import HomeContent from '../../components/HomeContent/HomeContent';

const Home = () => {
  const classes = useStyles();
  return (
    <div  className={classes.wrapper}>
      <Layout>
        <HomeContent />
      </Layout>
    </div>
  );
};

export default Home;
