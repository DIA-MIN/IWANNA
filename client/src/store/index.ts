import {configureStore, combineReducers} from '@reduxjs/toolkit';
import usersSlice from './user';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const rootReducer = combineReducers({
  user: usersSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

export default store;
