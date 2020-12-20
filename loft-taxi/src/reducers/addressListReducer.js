import { STOREADDRESS } from "../action";

const initialState = { address: "" };

export default function addressListReducer(state = initialState, action) {
  switch (action.type) {
    case STOREADDRESS: {
      return { address: action.payload };
    }

    default:
      return state;
  }
}
