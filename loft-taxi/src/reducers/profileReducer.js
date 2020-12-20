import { PROFILE } from "../action";

const initialState = { mapIn: false };

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE: {
      return { mapIn: true };
    }

    default:
      return state;
  }
}
