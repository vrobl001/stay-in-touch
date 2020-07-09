import React, { Component } from 'react';
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

  isFormValid = () => {
    return (
      this.state.name && this.state.email && this.state.password && this.state.password === this.state.passwordConf
    );
  };

  handleChange = (e) => {
    this.setState({
      error: '',
      ...{ [e.target.name]: e.target.value },
    });
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

  render() {
    return (
      <div className={styles.signupForm}>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Signup Form</legend>

            <div className={styles.inputField}>
              <label htmlFor='name'>Full Name</label>
              <i className='material-icons'>person</i>
              <input id='name' name='name' type='text' value={this.state.name} onChange={this.handleChange} />
            </div>

            <div className={styles.inputField}>
              <label htmlFor='email'>Email</label>
              <i className='material-icons'>email</i>
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

            <div className={styles.inputField}>
              <label htmlFor='passwordConf'>Password Confirmation</label>
              <i className='material-icons'>lock</i>
              <input
                id='passwordConf'
                name='passwordConf'
                type='password'
                value={this.state.passwordConf}
                onChange={this.handleChange}
              />
            </div>

            <div className={styles.signupButton}>
              <button disabled={!this.isFormValid()} type='submit'>
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignupForm;
