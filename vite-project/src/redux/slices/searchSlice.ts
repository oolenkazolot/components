import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchState {
  search: string;
}

const initialState: ISearchState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload || '';
    },
  },
});

export const { changeSearch } = searchSlice.actions;

export default searchSlice.reducer;
