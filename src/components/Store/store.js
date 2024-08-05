import { configureStore } from '@reduxjs/toolkit'
import  CardDateSlice  from '../CardSlice/CardDate'

export const store = configureStore({
  reducer: {
    Cardif: CardDateSlice,
    UserData:CardDateSlice,
    search:CardDateSlice,
  },
})