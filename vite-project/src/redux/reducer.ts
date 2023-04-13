import { createAction, createReducer } from '@reduxjs/toolkit';

interface ISearchState {
  value: string;
}

const initialState: ISearchState = {
  value: '',
};

export const changeSearch = createAction('search/change');

export const searchReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeSearch, (state, action) => {
    state.value = action.payload || '';
  });
});
