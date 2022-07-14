import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '.';

interface UserData {
  name: string;
  email: string;
  password: string;
}

interface UserState {
  data: object;
  loading: boolean;
  error: boolean;
}

export const registUserThunk = createAsyncThunk(
  'users/registUser',
  async (userData: object): Promise<UserData> => {
    const response = await axios.post('/api/users/register', userData);
    return {...response.data};
  }
);

const initialState: UserState = {
  data: {},
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registUserThunk.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(registUserThunk.fulfilled, (state, action) => {
      state.data = {...state, registSuccess: action.payload};
      state.loading = false;
      state.error = false;
    });
    builder.addCase(registUserThunk.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const getUser = (state: RootState) => state.user;

export default userSlice;
