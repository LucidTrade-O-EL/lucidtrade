import { SET_API_INSTANCE, SET_NAVIGATION_INSTANCE } from "../actions/commonActions";

const initialState = {
  apiInstance: null,
  navigationInstance: null,
};

const commonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_API_INSTANCE:
      return {
        ...state,
        apiInstance: action.payload.apiInstance,
      };
    case SET_NAVIGATION_INSTANCE:
      return {
        ...state,
        navigationInstance: action.payload.navigation,
      };
    default:
      return state;
  }
};

export default commonReducer;