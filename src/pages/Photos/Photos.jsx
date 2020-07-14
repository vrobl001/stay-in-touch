import React from 'react';
import ImageForm from '../../components/ImageForm/ImageForm';
import styles from './Photos.module.css';

const Photos = (props) => {
  return (
    <main>
      <div>
        <h1>Photos Page</h1>
        <ImageForm />
      </div>
    </main>
  );
};

export default Photos;
