import { ScreenRoutes } from "../../App/Routes";
import { Cooridinates } from "../reducers/dashboardNavigationReducer";
 
export const SET_SELECTED_SCREEN = "SET_SELECTED_SCREEN";
/**
 * Used to change the screen shown in the Dashboard Component.
 *
 * @param {ScreenRoutes} selectedScreen - The screen you want to show.
 */
export const setSelectedScreen = ( selectedScreen: ScreenRoutes ) => ({
  type: SET_SELECTED_SCREEN,
  payload: {
    selectedScreen: selectedScreen
  },
});

export const SET_SELECTED_ADDRESS = "SET_SELECTED_ADDRESS";
/**
 * Used to change the screen shown in the Dashboard Component.
 *
 * @param {string} selectedAddress - The address you want to choose.
 */
export const setSelectedAddress = ( selectedAddress: Cooridinates ) => ({
  type: SET_SELECTED_ADDRESS,
  payload: {
    selectedAddress: selectedAddress
  },
});
