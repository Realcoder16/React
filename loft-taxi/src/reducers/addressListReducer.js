import { STOREADDRESS } from "../action";

const initialState = [];

export default function addressListReducer(state = initialState, action) {
  switch (action.type) {
    case STOREADDRESS: {
      return action.payload;
    }

    default:
      return state;
  }
}
