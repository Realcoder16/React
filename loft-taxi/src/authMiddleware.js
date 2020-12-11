import { logIn } from "./action";
import { serverLogin } from "./api";
import { serverRegistration } from "./api";
import { AUTHENTICATE } from "./action";
import { REGISTRATION } from "./action";
import { logOut } from "./action";
import auth from "./reducers/auth";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { email, password } = action.payload;
    const result = await serverLogin(email, password);

    if (result.success === true) {
      store.dispatch(logIn());
    }
  } else {
    next(action);
  }
};

export const regMiddleware = (store) => (next) => async (action) => {
  if (action.type === REGISTRATION) {
    const { email, password, name, surname } = action.payload;
    const result = await serverRegistration(email, password, name, surname);
    if (result.success === true) {
      store.dispatch(logIn());
    }
  } else {
    next(action);
  }
};
