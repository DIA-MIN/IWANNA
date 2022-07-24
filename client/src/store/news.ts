import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '.';
import {ScrapNewsTypes} from '../components/common/NewsType';

const newsSlice = createSlice({
  name: 'news',
  initialState: [{}],
  reducers: {
    addRecentNews: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const {addRecentNews} = newsSlice.actions;

// export const getNews = (state: RootState) => state.news;

export default newsSlice;
