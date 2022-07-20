import { combineReducers } from 'redux';
import { userReducer } from './userStore/userStore';

export const rootReducer = combineReducers({
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;