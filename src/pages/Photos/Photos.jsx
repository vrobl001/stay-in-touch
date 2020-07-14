import React from 'react';
import ImageForm from '../../components/ImageForm/ImageForm';
import styles from './Photos.module.css';

const Photos = (props) => {
  const images = props.images.map((image, idx) => (
    <div key={idx}>
      <img src={image.imageURL} alt={image.imageAlt}></img>
    </div>
  ));
  return (
    <main>
      <div>
        <h1>Photos Page</h1>
        <ImageForm />
        <div>{images}</div>
      </div>
    </main>
  );
};

export default Photos;
