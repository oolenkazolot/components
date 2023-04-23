import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserInfosState {
  userInfos: string[];
}

const initialState: IUserInfosState = {
  userInfos: [],
};

const userInfosSlice = createSlice({
  name: 'userInfos',
  initialState,
  reducers: {
    addUserInfos: (state, action: PayloadAction<string>) => {
      state.userInfos.push(action.payload);
    },
  },
});

export const { addUserInfos } = userInfosSlice.actions;

export default userInfosSlice.reducer;
