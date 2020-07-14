import React from 'react';
import imageService from '../../utils/imageService';
import styles from './ImageForm.module.css';

class ImageForm extends React.Component {
  state = this.initialState;

  get initialState() {
    return {
      imageURL: null,
      imageAlt: null,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { imageURL, imageAlt } = this.state;
      await imageService.sendImages({ imageURL, imageAlt });
      this.setState(this.initialState);
    } catch (error) {
      this.setState(this.initialState);
    }
  };

  handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'ci4viyep');
    const options = {
      method: 'POST',
      body: formData,
    };
    return fetch('https://api.Cloudinary.com/v1_1/stay-in-touch/image/upload', options)
      .then((res) => res.json())
      .then((res) => {
        console.log('res.json ', res.secure_url);
        console.log('res.json ', res.secure_url);
        this.setState({
          imageURL: res.secure_url,
          imageAlt: `An image of ${res.original_filename}`,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { imageURL, imageAlt } = this.state;

    return (
      <main className='App'>
        <section className='left-side'>
          <form>
            <div className='form-group'>
              <input type='file' />
            </div>

            <button type='button' className='btn' onClick={this.handleImageUpload}>
              Upload
            </button>
            <button type='button' className='btn' onClick={this.handleSubmit}>
              Save Image
            </button>
          </form>
        </section>
        <section className='right-side'>
          {imageURL && <img src={imageURL} alt={imageAlt} className='displayed-image' />}
        </section>
      </main>
    );
  }
}

export default ImageForm;
