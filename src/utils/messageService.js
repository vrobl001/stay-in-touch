import tokenService from './tokenService';
import openSocket from 'socket.io-client';
const socket = openSocket();
const BASE_URL = '/api/messages/';

function sendMessages(message) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
      Authorization: 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify(message),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('could not send message');
      }
    })
    .then(() => {
      const name = message.name;
      const msg = message.msg;
      socket.emit('sendMessages', { name, msg });
    })
    .catch((error) => console.log(error));
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
