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
      <div className={styles.messageContainer}>
        <div className={styles.message} key={idx}>
          <p>{message.name}</p>
          <p>{message.msg}</p>
        </div>
      </div>
    )
  );
  return (
    <div className={styles.retrieveMessageOuterContainer}>
      <div className={styles.retrieveMessageInnerContainer}>{messages}</div>
    </div>
  );
};

export default RetrieveMessages;
