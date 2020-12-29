import { FILLROUTE } from "../action";

const initialState = [];

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case FILLROUTE: {
      return action.payload;
    }

    default:
      return state;
  }
}
