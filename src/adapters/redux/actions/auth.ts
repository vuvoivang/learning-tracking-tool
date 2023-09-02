export const SET_AUTH_INFO = "SET_AUTH_INFO";

export const LOG_OUT = "LOG_OUT";
export const SET_ACCOUNT = "SET_ACCOUNT";

export const setAuthInfo = (user) => ({
  type: SET_AUTH_INFO,
  payload: user,
});
