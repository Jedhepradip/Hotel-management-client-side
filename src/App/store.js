import { configureStore } from '@reduxjs/toolkit';
import CardDataSlice from './CardSlice'; // Ensure you're importing the default export
import UserSlice from './UserSlice';

export const store = configureStore({
    reducer: {
        cardData: CardDataSlice, // Use a single key for the slice
        Userdata: UserSlice,
    },
});
