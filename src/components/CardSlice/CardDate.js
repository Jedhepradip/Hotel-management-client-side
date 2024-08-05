import { createSlice} from '@reduxjs/toolkit';

const initialState = {
  Cardif: [],
  UserData:[],
  search:[],
};

export const CardDateSlice = createSlice({
  name: 'CardIn',
  initialState,
  reducers: {
    CardInformation: (state, action) => {
      const card = {
        text: action.payload
      };
      state.Cardif.push(card);
    },
    UserInfromation:(state,action)=>{
      const User = {
        text:action.payload
      }
      state.UserData.push(User)
    },
    setsearchlocation:(state,action)=>{
      const Search = {
        text:action.payload
      }
      state.search.push(Search)
    }
  }
});

export const {CardInformation,UserInfromation,setsearchlocation} = CardDateSlice.actions;

export default CardDateSlice.reducer;


