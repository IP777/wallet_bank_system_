import { API_URL, API_GET_CURRENCY } from '../constants';

export const loginRequest = (data) => {
  return fetch(`${API_URL}/api/login`, {
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
