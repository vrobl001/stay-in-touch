import tokenService from './tokenService';
import openSocket from 'socket.io-client';
const socket = openSocket();
const BASE_URL = '/api/images';

function uploadImages() {
  const { files } = document.querySelector('input[type="file"]');
  const formData = new FormData();
  formData.append('file', files[0]);
  formData.append('upload_preset', 'ci4viyep');
  return fetch('https://api.Cloudinary.com/v1_1/stay-in-touch/image/upload', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('could not upload image');
      }
    })
    .then((response) => {
      const imageURL = response.secure_url;
      const imageAlt = response.original_filename;
      socket.emit('sendImages', { imageURL, imageAlt });
      sendImages({ imageURL, imageAlt });
    });
}

function sendImages(image) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
      Authorization: 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify(image),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('could not post image');
    }
  });
}

function retrieveImages() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-type': 'Application/json',
      Authorization: 'Bearer ' + tokenService.getToken(),
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('could not retrieve image');
    }
  });
}

export default {
  sendImages,
  retrieveImages,
  uploadImages,
};
