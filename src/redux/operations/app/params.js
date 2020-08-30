import { loginRequest } from '../../../services/session-api';
import { registrationRequest } from '../../../services/session-api';
import { setUserToken, setUserId, setUserName } from '../../actions/app/params';
import { LOCAL_STORAGE_KEY } from '../../constants/params';

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await loginRequest(credentials);

    dispatch(setUserToken(response.token));
    dispatch(setUserId(response.user.id));
    dispatch(setUserName(response.user.name));

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response));
  } catch (error) {
    throw new Error(error);
  }
};

export const logout = () => (dispatch) => {
  dispatch(setUserToken(''));
  dispatch(setUserId(''));
  dispatch(setUserName(''));

  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

export const checkUserLogin = () => (dispatch) => {
  const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (userData) {
    dispatch(setUserToken(userData.token));
    dispatch(setUserId(userData.user.id));
    dispatch(setUserName(userData.user.name));
  }
};

export const registration = (data) => async (dispatch) => {
  try {
    const response = await registrationRequest(data);

    dispatch(setUserToken(response.token));
    dispatch(setUserId(response.user.id));
    dispatch(setUserName(response.user.name));

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response));
  } catch (error) {
    throw new Error(error);
  }
};
