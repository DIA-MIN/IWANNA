import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {recentNewsSlice, scrapNewsSlice} from './news';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const rootReducer = combineReducers({
  recentNews: recentNewsSlice.reducer,
  scrapNews: scrapNewsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

export default store;
