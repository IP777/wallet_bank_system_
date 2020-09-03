import { API_URL } from '../constants';

export const loginRequest = (data) => {
  return fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const registrationRequest = (data) => {
  return fetch(`${API_URL}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const getCurrencyRequest = () => {
  return fetch(API_GET_CURRENCY, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

export const transactionRequest = (data, userToken) => {
  return fetch(`${API_URL}/api/finance/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + userToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

