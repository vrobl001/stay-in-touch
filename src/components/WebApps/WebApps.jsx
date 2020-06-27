import React from 'react';
import styles from './WebApps.module.css';

const WebApps = (props) => {
  const webApps = [
    {
      name: 'Address Book',
      link: '/addressbook',
    },
    {
      name: 'Calendar',
      link: '/calendar',
    },
    {
      name: 'Chat',
      link: '/chat',
    },
    {
      name: 'Grocery List',
      link: '/grocerylist',
    },
    {
      name: 'Photos',
      link: '/photos',
    },
  ];

  const allWebApps = webApps.map((app, idx) => (
    <a href={app.link}>
      <div className={styles.webAppsContainer} key={idx}>
        <p>{app.name}</p>
      </div>
    </a>
  ));

  return <div>{allWebApps}</div>;
};

export default WebApps;
