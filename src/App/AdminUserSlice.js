import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    AllUser: [],
}

export const Fetchingadminuser = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3000/Admin/AllUser/Send", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`
            }
        })
        console.log("response.data :", response.data);
        dispatch(AllUserInformation(response.data))
    } catch (error) {
        console.log(error);
    }
}

export const Adminuser = createSlice({
    name: "AllUser",
    initialState,
    reducers: {
        AllUserInformation: (state, action) => {
            state.AllUser = action.payload
        }
    }
})

export const { AllUserInformation } = Adminuser.actions;
export default Adminuser.reducer;