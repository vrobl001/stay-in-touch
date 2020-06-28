import React from 'react';
import styles from './Home.module.css';
import WebApps from '../../components/WebApps/WebApps';

const Home = (props) => {
  return (
    <div className={styles.homeContainer}>
      <WebApps />
    </div>
  );
};

export default Home;
