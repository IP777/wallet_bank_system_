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
  //-------Рабочий вариант отправки транзакций раскоментировать когда Swagger заведётся )))
  return fetch(`${API_URL}/api/finance/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + userToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  //Заглушка для отправки транзакции
  //console.log('userToken---', userToken);
  //console.log('userID', userID);
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(data);
  //   }, 300);
  // });
};
