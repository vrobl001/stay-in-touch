import React, { Component } from 'react';
import userService from '../../utils/userService';
import styles from './ImageForm.module.css';

class ImageForm extends Component {
  state = this.getInitialState();
  getInitialState() {
    return {
      image: '',
      error: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      error: '',
      [e.target.name]: e.target.value,
    });
  };

  isFormValid = () => {
    return this.state.image;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { image } = this.state;
      await userService.login({ image });
      this.setState(this.getInitialState(), () => {
        this.props.handleSignupOrLogin();
        this.props.history.push('/');
      });
    } catch (error) {
      this.setState({
        image: '',
        error: error.message,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Upload Image</legend>

            <div>
              <input name='image' type='file' value={this.state.image} onChange={this.handleChange} required />
              <label htmlFor='image'>Image</label>
            </div>
            <button disabled={!this.isFormValid()} type='submit'>
              Upload
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ImageForm;
