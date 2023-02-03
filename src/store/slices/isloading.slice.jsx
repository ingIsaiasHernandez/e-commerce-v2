import { createSlice } from '@reduxjs/toolkit';

export const isloadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        setIsLoading: (state,action) => {
            const isLoading = action.payload;
            return isLoading;
        }

    }
})

export const { setIsLoading } = isloadingSlice.actions;

export default isloadingSlice.reducer;
