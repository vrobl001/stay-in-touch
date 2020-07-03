import React from 'react';
import styles from './RetrieveMessages.module.css';

const RetrieveMessages = (props) => {
  const messages = props.messages.map((message, idx) =>
    props.user.name === message.name ? (
      <div className={styles.userMessageContainer}>
        <div className={styles.userMessage} key={idx}>
          <p>{message.name}</p>
          <p>{message.msg}</p>
        </div>
      </div>
    ) : (
      <div className={styles.message} key={idx}>
        <p>{message.name}</p>
        <p>{message.msg}</p>
      </div>
    )
  );
  return <div className={styles.retrieveMessageContainer}>{messages}</div>;
};

export default RetrieveMessages;
