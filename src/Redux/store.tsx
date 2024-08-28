import { configureStore } from '@reduxjs/toolkit';
import dashboardNavigationReducer from './reducers/dashboardNavigationReducer';

const store = configureStore({
  reducer: {
    dashboard: dashboardNavigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;