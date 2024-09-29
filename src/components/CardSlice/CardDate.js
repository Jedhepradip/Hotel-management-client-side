// import { createSlice } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';

// const initialState = {
//   Cardif: [],
//   UserData: [],
//   search: [],
// };

// export const CardDateSlice = createSlice({
//   name: 'CardIn',
//   initialState,
//   reducers: {
//     CardInformation: (state, action) => {
//       const card = {
//         text: action.payload,               
//       };
//       state.Cardif.push(card);
//     },
//     UserInfromation: (state, action) => {
//       const User = {
//         text: action.payload
//       }
//       state.UserData.push(User)
//     },
//     setsearchlocation: (state, action) => {
//       const Search = {
//         text: action.payload
//       }
//       state.search.push(Search)
//     }
//   }
// });

// export const { CardInformation, UserInfromation, setsearchlocation } = CardDateSlice.actions;

// export default CardDateSlice.reducer;


// const Dispatch = useDispatch()

// export const fetchRoomsData = async () => {
//   try {
//       const response = await fetch('https://hotel-management-server-5drh.onrender.com/Product/data', {
//       // const response = await fetch('http://localhost:3000//Product/data', {
//           method: 'GET',
//       });
//       const data = await response.json();
//       Dispatch(CardInformation(data.Product))  
//       console.log(data.Product);
//       sessionStorage.setItem("Roomsdata", JSON.stringify(data.Product))
//   } catch (error) {
//       console.log(error);
//   }
// };


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Cardif: [],
  UserData: [],
  search: [],
};

export const CardDateSlice = createSlice({
  name: 'CardIn',
  initialState,
  reducers: {
    CardInformation: (state, action) => {
      const card = {
        text: action.payload,
      };
      state.Cardif.push(card);
    },
    UserInfromation: (state, action) => {
      const User = {
        text: action.payload,
      };
      state.UserData.push(User);
    },
    setsearchlocation: (state, action) => {
      const Search = {
        text: action.payload,
      };
      state.search.push(Search);
    },
  },
});

export const { CardInformation, UserInfromation, setsearchlocation } = CardDateSlice.actions;

export default CardDateSlice.reducer;

export const fetchRoomsData = async (dispatch) => {
  try {
    const response = await fetch('https://hotel-management-server-5drh.onrender.com/Product/data', {
      method: 'GET',
    });
    const data = await response.json();
    dispatch(CardInformation(data.Product));
    sessionStorage.setItem('Roomsdata', JSON.stringify(data.Product));
  } catch (error) {
    console.log(error);
  }
};
