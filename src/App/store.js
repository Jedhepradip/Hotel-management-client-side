import { configureStore } from '@reduxjs/toolkit';
import CardDataSlice from './CardSlice'; // Ensure you're importing the default export
import UserSlice from './UserSlice';
import Adminuser from "./AdminUserSlice"

export const store = configureStore({
    reducer: {
        cardData: CardDataSlice,
        Userdata: UserSlice,
        Alluserdata: Adminuser
    },
});
