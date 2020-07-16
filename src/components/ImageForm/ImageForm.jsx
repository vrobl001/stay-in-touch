import React from 'react';
import imageService from '../../utils/imageService';
import styles from './ImageForm.module.css';

const ImageForm = () => {
  return (
    <div className='App'>
      <section className='left-side'>
        <form>
          <div className='form-group'>
            <input type='file' />
          </div>
          <button type='button' className='btn' onClick={imageService.uploadImages}>
            Upload
          </button>
        </form>
      </section>
    </div>
  );
};

export default ImageForm;
