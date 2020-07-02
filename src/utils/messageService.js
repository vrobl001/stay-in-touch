import tokenService from './tokenService';
const BASE_URL = '/api/messages/chat';

function sendMessages(message) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
      Authorization: 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify(message),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('could not post message');
    }
  });
}

function retrieveMessages() {
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
      throw new Error('could not retrieve message');
    }
  });
}

export default {
  sendMessages,
  retrieveMessages,
};
