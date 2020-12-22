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

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
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

export const route = (to, from) => ({
  type: ROUTE,
  payload: { to, from },
});

export const fillroute = (data) => ({
  type: FILLROUTE,
  payload: { data },
});

export const getAddressList = (data) => ({
  type: ADDRESS,
  payload: { data },
});

export const storeAddress = (address) => ({
  type: STOREADDRESS,
  payload: { address },
});
