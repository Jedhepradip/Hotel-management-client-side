import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    User: [],
}

export const FetchingUserData = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3000/Profile/User/Data", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`
            }
        })
        console.log(response.data);
        dispatch(UserInformation(response.data))
    } catch (error) {
        console.log(error);
    }
}

export const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        UserInformation: (state, action) => {
            state.User = action.payload
        }
    }
})

export const { UserInformation } = UserSlice.actions;
export default UserSlice.reducer;