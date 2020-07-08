import React, { Component } from 'react';
import messageService from '../../../utils/messageService';
import styles from './SendMessages.module.css';
import openSocket from 'socket.io-client';
const socket = openSocket();

class SendMessages extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      name: this.props.user.name,
      msg: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!this.isMessageValid()) return;
      try {
        const { name, msg } = this.state;
        socket.emit('sendMessages', { name, msg });
        await messageService.sendMessages({ name, msg });
        this.setState(this.getInitialState);
      } catch (error) {
        this.setState({
          name: this.props.user.name,
          msg: '',
        });
      }
    }
  };

  isMessageValid = () => {
    return this.state.name && this.state.msg;
  };

  render() {
    return (
      <div className={styles.sendMessageContainer}>
        <form className={styles.formContainer}>
          <textarea
            onKeyPress={this.handleSubmit}
            className={styles.textArea}
            id='msg'
            name='msg'
            type='text'
            value={this.state.msg}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SendMessages;
