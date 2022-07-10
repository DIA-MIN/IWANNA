// import {createAsyncThunk} from '@reduxjs/toolkit';
import {createAction} from '@reduxjs/toolkit';
import axios from 'axios';

// export const registerUser = createAsyncThunk(
//   'REGIST_USER',
//   async (userData: {}) => {
//     const response = await axios.post('/api/users/register', userData);
//     return response.data;
//   }
// );

export const registUser = createAction<object>(
  'REGIST_USER',
  async (userData: object) => {
    const response = await axios.post('/api/users/register', userData);
    return {
      payload: response.data,
    };
  }
);
