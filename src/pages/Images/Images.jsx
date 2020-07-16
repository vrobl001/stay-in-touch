import React from 'react';
import ImageForm from '../../components/ImageForm/ImageForm';
import styles from './Images.module.css';

const Images = (props) => {
  const images = props.images.map((image, idx) => (
    <div key={idx}>
      <img src={image.imageURL} alt={image.imageAlt}></img>
    </div>
  ));
  return (
    <div>
      <h1>Images Page</h1>
      <ImageForm />
      <div>{images}</div>
    </div>
  );
};

export default Images;
