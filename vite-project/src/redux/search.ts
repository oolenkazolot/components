import { createAction, createReducer } from '@reduxjs/toolkit';

interface ISearchState {
  search: string;
}

const initialState: ISearchState = {
  search: '',
};

export const changeSearch = createAction('search/change');

export const searchReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeSearch, (state, action) => {
    state.search = action.payload || '';
  });
});
