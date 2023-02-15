import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Group, UserData } from '../@core/apis/users/user-interface';

export interface UserState {
  userData: UserData | null;
  group?: Group
}

const initialState: UserState = {
  userData: null,
  group: undefined
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    setGroup: (state,action: PayloadAction<Group>) => {
      state.group = action.payload;
    }
  },
});

export const { setUserData , setGroup } = UserSlice.actions;
export default UserSlice.reducer;
