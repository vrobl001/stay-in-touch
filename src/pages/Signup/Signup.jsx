import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from './Signup.module.css';

const Signup = (props) => {
  return (
    <main>
      <div>
        <SignupForm {...props} />
      </div>
    </main>
  );
};

export default Signup;
