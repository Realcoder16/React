import { STORE_ADDRESS } from "../action";

const initialState = [];

export default function addressListReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_ADDRESS: {
      return action.payload;
    }

    default:
      return state;
  }
}
