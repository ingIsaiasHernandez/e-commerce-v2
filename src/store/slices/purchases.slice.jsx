import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isloading.slice';

export const parchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (state, action) => {
            const purchases = action.payload;
            return purchases;
        }

    }
})

export const getPurchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', getConfig())
        .then(res => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const chekoutPurchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://e-commerce-api-v2.academlo.tech/api/v1/purchases",{},getConfig())
        .then(res => dispatch(getPurchasesThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPurchases } = parchasesSlice.actions;

export default parchasesSlice.reducer;
