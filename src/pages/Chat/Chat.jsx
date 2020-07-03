import React from 'react';
import RetrieveMessages from '../../components/Messenger/RetrieveMessages/RetrieveMessages';
import SendMessages from '../../components/Messenger/SendMessages/SendMessages';
import styles from './Chat.module.css';

const Chat = (props) => {
  return (
    <div className={styles.chatOuterContainer}>
      <div className={styles.chatInnerContainer}>
        <RetrieveMessages messages={props.messages} user={props.user} />
        <SendMessages user={props.user} />
      </div>
    </div>
  );
};

export default Chat;
