import {
  SET_USER_TOKEN,
  SET_USER_NAME,
  SET_USER_ID,
  SET_IS_LOADED,
} from '../../constants/params';

const initialState = {
  isLoaded: false,
  userToken: '',
  userName: '',
  userId: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IS_LOADED:
      return { ...state, isLoaded: payload };
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

export const isLoadedSelector = (state) => state.app.params.isLoaded;
export const isLoggedInSelector = (state) =>
  Boolean(state.app.params.userToken);
export const userTokenSelector = (state) => state.app.params.userToken;
export const userNameSelector = (state) => state.app.params.userName;
export const userIdSelector = (state) => state.app.params.userId;
