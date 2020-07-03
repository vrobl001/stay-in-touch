import React from 'react';
import styles from './RetrieveMessages.module.css';

const RetrieveMessages = (props) => {
  const messages = props.messages.map((message, idx) =>
    props.user.name === message.name ? (
      <div className={styles.userMessageContainer} key={idx}>
        <div className={styles.userMessage}>
          <p>{message.msg}</p>
        </div>
      </div>
    ) : (
      <div className={styles.messageContainer} key={idx}>
        <h5>{message.name}</h5>
        <div className={styles.message}>
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
