import { SET_AUTH_INFO, LOG_OUT } from "../actions/auth";

const defaultState = {
  name: "",
  roles: [],
};

const authReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTH_INFO:
      return {
        ...state,
        ...payload,
      };

    case LOG_OUT:
      return {
        ...defaultState,
      };

    default:
      return state;
  }
};

export default authReducer;
