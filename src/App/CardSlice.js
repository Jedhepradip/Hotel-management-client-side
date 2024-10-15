import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    Cardif: [],
};

// Async function to fetch card data
export const fetchCardData = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3000/Product/data', {
            method: 'GET',
        });
        const data = await response.json();

        dispatch(CardInformation(data));
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

// Create a slice
export const CardDataSlice = createSlice({
    name: 'CardIn',
    initialState,
    reducers: {
        CardInformation: (state, action) => {
            state.Cardif = action.payload
        },
    },
});

// Export actions and reducer
export const { CardInformation } = CardDataSlice.actions;
export default CardDataSlice.reducer;
