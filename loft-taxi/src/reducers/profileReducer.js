import { FILL_PROFILE } from "../action";

const initialState = {
  cardName: "",
  cardNumber: "",
  expireDate: "",
  cvc: "",
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case FILL_PROFILE: {
      const { token, ...profile } = action.payload;
      return profile;
    }

    default:
      return state;
  }
}
