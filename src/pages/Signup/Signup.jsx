import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from './Signup.module.css';

const Signup = (props) => {
  return (
    <div className={styles.signupFormContainer}>
      <SignupForm {...props} />
    </div>
  );
};

export default Signup;
