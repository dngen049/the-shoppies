import { configureStore , combineReducers} from '@reduxjs/toolkit'
import { createSelectorHook , useDispatch} from 'react-redux';

import moviesReducer from "./reducers/moviesReducer";
import requestReducer from "./reducers/requestReducer";

const rootReducer = combineReducers({
    movie: moviesReducer,
    request: requestReducer
})

export const store = configureStore({
  reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useSelector = createSelectorHook<RootState>();