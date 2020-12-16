export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTRATION = "REGISTRATION";
export const SAVE_IT = "loft-taxi/profile/save";
export const ROUTE = "ROUTE";
export const ADDRESS = "ADDRESS";

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

export const saveProfile = () => ({ type: SAVE_IT });

export const route = (address1, address2) => ({
  type: ROUTE,
  payload: { address1, address2 },
});

export const addressList = (data) => ({
  type: ADDRESS,
  payload: { data },
});
