import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './reducers/firstNameReducer';
import commonReducer from './reducers/commonReducer';

const store = configureStore({
  reducer: {
    common: commonReducer,
    name: nameReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;