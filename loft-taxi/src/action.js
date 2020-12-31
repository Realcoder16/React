export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTRATION = "REGISTRATION";
export const SAVE_IT = "loft-taxi/profile/save";
export const GETROUTE = "ROUTE";
export const GETADDRESS = "ADDRESS";
export const FILLROUTE = "FILLROUTE";
export const GETPROFILE = "PROFILE";
export const STOREADDRESS = "STOREADDRESS";

export const logIn = (token) => ({ type: LOG_IN, payload: { token } });
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

export const mapToStateProfile = (response) => ({
  type: GETPROFILE,
  payload: { response },
});

export const route = (payload) => ({
  type: GETROUTE,
  payload,
});

export const fillroute = (payload) => ({
  type: FILLROUTE,
  payload,
});

export const getAddressList = () => ({
  type: GETADDRESS,
});

export const storeAddress = (address) => ({
  type: STOREADDRESS,
  payload: address,
});
