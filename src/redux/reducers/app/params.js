import {
  SET_USER_TOKEN,
  SET_USER_NAME,
  SET_USER_ID,
} from '../../constants/params';

const initialState = {
  userToken: '',
  userName: '',
  userId: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_TOKEN:
      return { ...state, userToken: payload };
    case SET_USER_NAME:
      return { ...state, userName: payload };
    case SET_USER_ID:
      return { ...state, userId: payload };

    default:
      return state;
  }
};

export const isLoggedInSelector = (state) =>
  Boolean(state.app.params.userToken);
export const userTokenSelector = (state) => state.app.params.userToken;
export const userNameSelector = (state) => state.app.params.userName;
export const userIdSelector = (state) => state.app.params.userId;
