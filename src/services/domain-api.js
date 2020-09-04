import { API_GET_CURRENCY, API_URL } from '../constants';

export const getCurrencyRequest = () => {
  return fetch(API_GET_CURRENCY, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

export const getTransactionsRequest = (token) => {
  return fetch(`${API_URL}/api/finance`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
