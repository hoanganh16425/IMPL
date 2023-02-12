import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../@core/apis/users/user-interface';

export interface UserState {
  userData: any;
}

const initialState: UserState = {
  userData: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
