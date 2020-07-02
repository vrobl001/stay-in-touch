import React from 'react';
import styles from './WebApps.module.css';

const WebApps = (props) => {
  const allWebApps = props.webApps.map((app, idx) => (
    <a href={app.link} key={idx}>
      <div className={styles.webApps}>
        <i className='material-icons'>{app.icon}</i>
        <p>{app.name}</p>
      </div>
    </a>
  ));

  return <div className={styles.webAppsContainer}>{allWebApps}</div>;
};

export default WebApps;
