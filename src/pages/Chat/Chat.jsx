import React from 'react';
import RetrieveMessages from '../../components/Messenger/RetrieveMessages/RetrieveMessages';
import SendMessages from '../../components/Messenger/SendMessages/SendMessages';
import styles from './Chat.module.css';

const Chat = (props) => {
  return (
    <div className='chatContainer'>
      <div className='messengerContainer'>
        <RetrieveMessages messages={props.messages} />
        <SendMessages />
      </div>
    </div>
  );
};

export default Chat;
