import tokenService from './tokenService';
const BASE_URL = '/api/images';

function uploadImages() {
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
      console.log('res.json ', res.json());
    })
    .catch((err) => console.log(err));
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
