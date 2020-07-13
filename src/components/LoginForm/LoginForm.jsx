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

  handleChange = (e) => {
    this.setState({
      error: '',
      [e.target.name]: e.target.value,
    });
  };

  isFormValid = () => {
    return this.state.email && this.state.password;
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
              <input
                name='email'
                type='email'
                value={this.state.email}
                placeholder='Full Name'
                onChange={this.handleChange}
                required
              />
              <label htmlFor='email'>Email</label>
            </div>

            <div className={styles.inputField}>
              <i className='material-icons'>lock</i>
              <input
                id='signupPassword'
                name='password'
                type='password'
                placeholder='Full Name'
                minLength='8'
                onChange={this.handleChange}
                value={this.state.password}
                required
              />
              <label htmlFor='password'>Password</label>
            </div>

            <div className={styles.loginButton}>
              <button disabled={!this.isFormValid()} type='submit'>
                Log In
              </button>
            </div>
          </fieldset>
        </form>
        <Link to='/signup'>Create account</Link>
      </div>
    );
  }
}

export default LoginForm;
