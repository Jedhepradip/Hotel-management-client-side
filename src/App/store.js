// import { configureStore } from '@reduxjs/toolkit'
// import { CardDataSlice } from './CardSlice'

// export const store = configureStore({
//     reducer: {
//         Cardif: CardDataSlice,
//         UserData: CardDataSlice,
//         search: CardDataSlice,
//     },
// })


import { configureStore } from '@reduxjs/toolkit';
import CardDataSlice from './CardSlice'; // Ensure you're importing the default export

export const store = configureStore({
    reducer: {
        cardData: CardDataSlice, // Use a single key for the slice
    },
});
    