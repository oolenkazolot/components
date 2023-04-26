import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { cardApi } from './services/card';

const store = configureStore({
  reducer: {
    reducer: rootReducer,
    [cardApi.reducerPath]: cardApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(cardApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
