import { createAction, createReducer } from '@reduxjs/toolkit';

interface IUserInfosState {
  userInfos: [];
}

const initialState: IUserInfosState = {
  userInfos: [],
};

export const addUserInfos = createAction('userInfos/add');

export const userInfosReducer = createReducer(initialState, (builder) => {
  builder.addCase(addUserInfos, (state, action) => {
    if (action.payload) {
      state.userInfos.push(action.payload);
    }
  });
});
