import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import styles from './SignupForm.module.css';

class SignupForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConf: '',
      error: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      error: '',
      ...{ [e.target.name]: e.target.value },
    });
  };

  handlePasswordMatch = () => {
    if (this.state.password.length >= 8 && this.state.passwordConf.length === this.state.password.length) {
      if (this.state.password !== this.state.passwordConf) {
        return this.setState({
          error: 'Passwords do not match!',
          passwordConf: '',
        });
      }
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { name, email, password } = this.state;
      await userService.signup({ name, email, password });
      this.setState(this.getInitialState(), () => {
        this.props.handleSignupOrLogin();
        this.props.history.push('/');
      });
    } catch (error) {
      this.setState({
        name: '',
        email: '',
        password: '',
        passwordConf: '',
        error: error.message,
      });
    }
  };

  isFormValid = () => {
    this.handlePasswordMatch();
    return (
      this.state.name &&
      this.state.email &&
      this.state.password &&
      this.state.passwordConf &&
      this.state.password === this.state.passwordConf
    );
  };

  render() {
    return (
      <div className={styles.signupForm}>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Sign up</legend>

            <div className={styles.inputField}>
              <i className='material-icons'>person</i>
              <input
                name='name'
                type='text'
                value={this.state.name}
                placeholder='Name'
                onChange={this.handleChange}
                required
              />
              <label htmlFor='name'>Name</label>
            </div>

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

            <div className={styles.inputField}>
              <i className='material-icons'>lock</i>
              <input
                id='signupPasswordConf'
                name='passwordConf'
                type='password'
                placeholder='Full Name'
                minLength='8'
                value={this.state.passwordConf}
                onChange={this.handleChange}
                required
              />
              <label htmlFor='passwordConf'>Confirm Password</label>
            </div>

            <div className={styles.signupButton}>
              <button disabled={!this.isFormValid()} type='submit'>
                Submit
              </button>
            </div>
          </fieldset>
        </form>
        <Link to='/login'>Already have account</Link>
      </div>
    );
  }
}

export default SignupForm;
