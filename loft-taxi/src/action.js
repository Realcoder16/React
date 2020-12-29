export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTRATION = "REGISTRATION";
export const SAVE_IT = "loft-taxi/profile/save";
export const ROUTE = "ROUTE";
export const ADDRESS = "ADDRESS";
export const FILLROUTE = "FILLROUTE";
export const PROFILE = "PROFILE";
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

export const saveProfile = (data) => ({
  type: SAVE_IT,
  payload: { data },
});

export const mapToStateProfile = (response) => ({
  type: PROFILE,
  payload: { response },
});

export const route = (payload) => ({
  type: ROUTE,
  payload,
});

export const fillroute = (payload) => ({
  type: FILLROUTE,
  payload,
});

export const getAddressList = () => ({
  type: ADDRESS,
});

export const storeAddress = (address) => ({
  type: STOREADDRESS,
  payload: address,
});
