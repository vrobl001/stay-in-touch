import React from 'react';
import styles from './RetrieveMessages.module.css';

const RetrieveMessages = (props) => {
  console.log('retrieve messages props ', props);
  const messages = props.messages.map((message, idx) => (
    <div key={idx}>
      <p>{message.name}</p>
      <p>{message.msg}</p>
    </div>
  ));
  return <div className='retrieveMessageContainer'>{messages}</div>;
};

export default RetrieveMessages;
