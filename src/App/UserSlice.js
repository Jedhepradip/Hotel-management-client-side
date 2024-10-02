import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    UserInfo: [],
}

export const FetchingUserData = () => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:3000/Profile/User/Data", {
            headers: {
                authorization: `Bearer ${localStorage.getItem("Token")}`
            }
        })
        console.log(response.data);
        dispatch(UserData(response.data))
    } catch (error) {
        console.log(error);
    }
}

export const UserSlice = createSlice({
    name: "User",
    initialState,
    reducer: {
        UserData: (state, action) => {
            state.UserInfo = action.payload
        }
    }
})

export const { UserData } = UserSlice;
export default UserSlice;