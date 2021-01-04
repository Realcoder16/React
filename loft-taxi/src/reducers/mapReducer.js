import { FILL_ROUTE } from "../action";

const initialState = [];

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case FILL_ROUTE: {
      return action.payload;
    }

    default:
      return state;
  }
}
