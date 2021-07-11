import { ORDER } from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER.CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER.CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER.CREATE_FAIL:
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
