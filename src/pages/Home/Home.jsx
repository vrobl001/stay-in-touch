import React from 'react';
import styles from './Home.module.css';
import WebApps from '../../components/WebApps/WebApps';

export default function Home(props) {
  return (
    <div className={styles.homeContainer}>
      <WebApps {...props} />
    </div>
  );
}
