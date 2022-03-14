import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./ICommonMovie";

interface UserState {
  user?: IUser ;
}
const initialState:UserState= { user: undefined } ;

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    login(
      state: UserState,
      action: {
        payload: IUser;
        type: string;
      }
    ):void {
      state.user = action.payload;
    },
    logout(state: UserState):void {
      state.user = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const getCurrentUSer = (state: UserState): IUser | undefined =>
  state.user || undefined;

export default userSlice.reducer;
