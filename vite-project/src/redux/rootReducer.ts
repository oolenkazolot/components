import { combineReducers } from '@reduxjs/toolkit';
import userInfosReducer from './slices/userInfosSlice';
import searchReducer from './slices/searchSlice';

const rootReducer = combineReducers({
  userInfos: userInfosReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
