import { SET_USER_INFO } from "../actions/user";

const defaultState = {
  name: "",
};

const userReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default userReducer;
