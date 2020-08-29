import { loginRequest } from '../../../services/session-api';

import { setUserToken, setUserId, setUserName } from '../../actions/app/params';

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await loginRequest(credentials);

    dispatch(setUserToken(response.token));
    dispatch(setUserId(response.user.id));
    dispatch(setUserName(response.user.name));
  } catch (error) {
    throw new Error(error);
  }
};
