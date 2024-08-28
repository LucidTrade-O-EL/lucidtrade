import { ScreenRoutes } from "../../App/Routes";
import { SET_SELECTED_SCREEN } from "../actions/dashboardNavigationActions";

interface InitialState {
  selectedScreen: ScreenRoutes;
}
const initialState: InitialState = {
  selectedScreen: ScreenRoutes.Portfolio,
};

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
    default:
      return state;
  }
};

export default dashboardNavigationReducer;
