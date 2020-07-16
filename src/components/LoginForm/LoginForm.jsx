import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import styles from './LoginForm.module.css';

export default function LoginForm(props) {
  const [form, setState] = useState({
    email: '',
    password: '',
    error: '',
  });

  const handleChange = (e) => {
    setState({
      ...form,
      error: '',
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    try {
      const { email, password } = form;
      await userService.login({ email, password });
      props.handleSignupOrLogin();
      props.history.push('/');
    } catch (error) {
      setState({
        ...form,
        email: '',
        password: '',
        error: error.message,
      });
    }
  };

  const isFormValid = () => {
    return form.email && form.password;
  };

  return (
    <div className={styles.loginForm}>
      {form.error && <p>{form.error}</p>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Log in to your account</legend>

          <div className={styles.inputField}>
            <i className='material-icons'>email</i>
            <input
              name='email'
              type='email'
              value={form.email}
              placeholder='Full Name'
              onChange={handleChange}
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
              onChange={handleChange}
              value={form.password}
              required
            />
            <label htmlFor='password'>Password</label>
          </div>

          <div className={styles.loginButton}>
            <button disabled={!isFormValid()} type='submit'>
              Log In
            </button>
          </div>
        </fieldset>
      </form>
      <Link to='/signup'>Create account</Link>
    </div>
  );
}
