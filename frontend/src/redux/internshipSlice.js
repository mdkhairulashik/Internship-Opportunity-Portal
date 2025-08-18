import { createSlice } from "@reduxjs/toolkit";

const internshipSlice = createSlice({
    name: "internship",
    initialState:{
        allInternships:[],
        singleInternship:null,
    },
    reducers:{
        setAllInternships: (state, action) => {
            state.allInternships = action.payload;
        },
        setSingleInternship:(state,action) => {
            state.singleInternship = action.payload;
        }
    }
});
export const {setAllInternships, setSingleInternship} = internshipSlice.actions;
export default internshipSlice.reducer;