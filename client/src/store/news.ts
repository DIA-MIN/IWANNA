import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '.';
import {ScrapNewsTypes} from '../components/common/types/NewsType';
import {useSelector} from 'react-redux';

const initialState: ScrapNewsTypes[] = [
  {
    title: '',
    url: '',
  },
];

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addRecentNews: (state, action) => {
      return action.payload;
    },
  },
});

export const {addRecentNews} = newsSlice.actions;

export const recentNews = (state: RootState) => state.news;

export default newsSlice;
