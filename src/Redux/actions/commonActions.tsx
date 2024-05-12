import { NavigateFunction } from "react-router-dom";
import { API } from "../../api";

export const SET_API_INSTANCE = 'SET_API_INSTANCE' as const;
export const setApi = (apiInstance: API) => ({
  type: SET_API_INSTANCE,
  payload: { apiInstance }
});

export const SET_NAVIGATION_INSTANCE = 'SET_NAVIGATION_INSTANCE' as const;
export const setNavigation = (navigation: NavigateFunction) => ({
  type: SET_NAVIGATION_INSTANCE,
  payload: { navigation }
});