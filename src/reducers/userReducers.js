import { USER } from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER.USER_LOGIN_REQUEST:
      return { loading: true };
    case USER.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER.REGISTER_REQUEST:
      return { loading: true };
    case USER.REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER.REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER.DETAILS_REQUEST:
      return { loading: true, ...state };
    case USER.DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER.DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER.DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER.UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER.UPDATE_PROFILE_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case USER.UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
