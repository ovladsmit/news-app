import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
interface loginByUsernameProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, {rejectValue: string}>(
  "login/loginByUsername",
  async ({ username, password }, thunkApi) => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkApi.dispatch(userActions.setAuthData(response.data))
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue('Вы ввели неверный логин или пароль')
    }
  },
);
