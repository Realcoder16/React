import { FILLROUTE } from "../action";

const initialState = { route: "" };

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case FILLROUTE: {
      return { route: action.payload };
    }

    default:
      return state;
  }
}
