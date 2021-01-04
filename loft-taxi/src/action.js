export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTRATION = "REGISTRATION";
export const SAVE_IT = "loft-taxi/profile/save";
export const GET_ROUTE = "ROUTE";
export const GET_ADDRESS = "ADDRESS";
export const FILL_ROUTE = "FILLROUTE";
export const FILL_PROFILE = "FILLPROFILE";
export const STORE_ADDRESS = "STOREADDRESS";
export const GET_PROFILE = "GETPROFILE";

export const logIn = (payload) => ({ type: LOG_IN, payload });
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password, token) => ({
  type: AUTHENTICATE,
  payload: { email, password, token },
});
export const registration = (email, password, name, surname) => ({
  type: REGISTRATION,
  payload: { email, password, name, surname },
});

export const saveProfile = (payload) => ({
  type: SAVE_IT,
  payload,
});

export const getProfile = (payload) => ({
  type: GET_PROFILE,
  payload,
});

export const fillProfile = (payload) => ({
  type: FILL_PROFILE,
  payload,
});

export const route = (payload) => ({
  type: GET_ROUTE,
  payload,
});

export const fillroute = (payload) => ({
  type: FILL_ROUTE,
  payload,
});

export const getAddressList = () => ({
  type: GET_ADDRESS,
});

export const storeAddress = (address) => ({
  type: STORE_ADDRESS,
  payload: address,
});
