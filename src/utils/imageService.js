import tokenService from './tokenService';
const BASE_URL = '/api/images';

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
};
