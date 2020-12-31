import { GETPROFILE } from "../action";

const initialState = [];

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GETPROFILE: {
      return action.payload;
    }

    default:
      return state;
  }
}
