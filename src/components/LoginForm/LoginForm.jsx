import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import styles from './LoginForm.module.css';

class LoginForm extends Component {
  state = this.getInitialState();
  getInitialState() {
    return {
      email: '',
      password: '',
      error: '',
    };
  }

  isFormValid = () => {
    return this.state.email && this.state.password;
  };

  handleChange = (e) => {
    this.setState({
      error: '',
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { email, password } = this.state;
      await userService.login({ email, password });
      this.setState(this.getInitialState(), () => {
        this.props.handleSignupOrLogin();
        this.props.history.push('/');
      });
    } catch (error) {
      this.setState({
        email: '',
        password: '',
        error: error.message,
      });
    }
  };

  render() {
    return (
      <div className={styles.loginForm}>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Log in to your account</legend>

            <div className={styles.inputField}>
              <i className='material-icons'>email</i>
              <label htmlFor='email'>Email</label>
              <input id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange} />
            </div>

            <div className={styles.inputField}>
              <label htmlFor='password'>Password</label>
              <i className='material-icons'>lock</i>
              <input
                id='password'
                name='password'
                type='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className={styles.loginButton}>
              <button disabled={!this.isFormValid()} type='submit'>
                Log In
              </button>
            </div>
          </fieldset>
        </form>
        <Link to='signup'>Create account</Link>
      </div>
    );
  }
}

export default LoginForm;
