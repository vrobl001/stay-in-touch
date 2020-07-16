import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import styles from './SignupForm.module.css';

export default function SignupForm(props) {
  const [form, setState] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    error: '',
  });

  const handleChange = (e) => {
    setState({
      ...form,
      error: '',
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordMatch = () => {
    if (form.password.length >= 8 && form.passwordConf.length === form.password.length) {
      if (form.password !== form.passwordConf) {
        return setState({
          ...form,
          passwordConf: '',
          error: 'Passwords do not match!',
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    try {
      const { name, email, password } = form;
      await userService.signup({ name, email, password });
      props.handleSignupOrLogin();
      props.history.push('/');
    } catch (error) {
      setState({
        ...form,
        email: '',
        error: error.message,
      });
    }
  };

  const isFormValid = () => {
    handlePasswordMatch();
    return form.name && form.email && form.password && form.passwordConf && form.password === form.passwordConf;
  };

  return (
    <div className={styles.signupForm}>
      {form.error && <p>{form.error}</p>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Sign up</legend>

          <div className={styles.inputField}>
            <i className='material-icons'>person</i>
            <input name='name' type='text' value={form.name} placeholder='Name' onChange={handleChange} required />
            <label htmlFor='name'>Name</label>
          </div>

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

          <div className={styles.inputField}>
            <i className='material-icons'>lock</i>
            <input
              id='signupPasswordConf'
              name='passwordConf'
              type='password'
              placeholder='Full Name'
              minLength='8'
              value={form.passwordConf}
              onChange={handleChange}
              required
            />
            <label htmlFor='passwordConf'>Confirm Password</label>
          </div>

          <div className={styles.signupButton}>
            <button disabled={!isFormValid()} type='submit'>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
      <Link to='/login'>Already have account</Link>
    </div>
  );
}
