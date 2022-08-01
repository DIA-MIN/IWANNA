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

export const recentNewsSlice = createSlice({
  name: 'recentNews',
  initialState,
  reducers: {
    addRecentNews: (state, action) => {
      return action.payload;
    },
  },
});

export const scrapNewsSlice = createSlice({
  name: 'scrapNews',
  initialState,
  reducers: {
    uploadScrapNews: (state, action) => {
      return [...action.payload];
    },
    addScrapNews: (state, action) => {
      return [...state, action.payload];
    },
    removeScrapNews: (state, action) => {
      return state.filter((news) => news.url !== action.payload);
    },
  },
});

export const {addRecentNews} = recentNewsSlice.actions;
export const {uploadScrapNews, addScrapNews, removeScrapNews} =
  scrapNewsSlice.actions;

export const recentNews = (state: RootState) => state.recentNews;
export const scrapNews = (state: RootState) => state.scrapNews;
