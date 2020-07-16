import React, { useState } from 'react';
import messageService from '../../../utils/messageService';
import styles from './SendMessages.module.css';

const SendMessages = (props) => {
  const [form, setState] = useState({
    name: props.user.name,
    msg: '',
  });

  const initialState = () => {
    setState({
      ...form,
      name: props.user.name,
      msg: '',
    });
  };

  const handleChange = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isMessageValid()) return;
      try {
        const { name, msg } = form;
        await messageService.sendMessages({ name, msg });
        initialState();
      } catch (error) {
        initialState();
      }
    }
  };

  const isMessageValid = () => {
    return form.name && form.msg;
  };

  return (
    <div className={styles.sendMessageContainer}>
      <form className={styles.formContainer}>
        <textarea
          onKeyPress={handleSubmit}
          className={styles.textArea}
          id='msg'
          name='msg'
          type='text'
          value={form.msg}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SendMessages;
