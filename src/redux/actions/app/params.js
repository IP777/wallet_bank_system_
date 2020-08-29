import {
  SET_USER_TOKEN,
  SET_USER_ID,
  SET_USER_NAME,
} from '../../constants/params';

export const setUserToken = (payload) => ({
  type: SET_USER_TOKEN,
  payload,
});

export const setUserName = (payload) => ({
  type: SET_USER_NAME,
  payload,
});

export const setUserId = (payload) => ({
  type: SET_USER_ID,
  payload,
});
