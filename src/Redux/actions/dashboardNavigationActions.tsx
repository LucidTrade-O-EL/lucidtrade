import { ScreenRoutes } from "../../App/Routes";
 
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
