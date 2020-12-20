import { PROFILE } from "../action";

const initialState = { token: "" };

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE: {
      return { token: action.payload.token };
    }

    default:
      return state;
  }
}
