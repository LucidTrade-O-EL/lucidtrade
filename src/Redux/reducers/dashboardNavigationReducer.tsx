import { ScreenRoutes } from "../../App/Routes";
import { SET_SELECTED_ADDRESS, SET_SELECTED_SCREEN } from "../actions/dashboardNavigationActions";

interface InitialState {
  selectedScreen: ScreenRoutes;
  selectedAddress: String;
}
const initialState: InitialState = {
  selectedScreen: ScreenRoutes.Portfolio,
  selectedAddress: "",
};

export interface Cooridinates {
  lat: number;
  lng: number;
}

const dashboardNavigationReducer = (
  state: InitialState = initialState,
  action: any
) => {
  switch (action.type) {
    case SET_SELECTED_SCREEN:
      return {
        ...state,
        selectedScreen: action.payload.selectedScreen,
      };
    case SET_SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: action.payload.selectedAddress,
      };
    default:
      return state;
  }
};

export default dashboardNavigationReducer;
