import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IMainPoints, IPoint} from "../interfaces/MainPoints";

const initialState: IMainPoints = {
    downloadDate: '',
    points: []
}

const mainPointsSlice = createSlice({
    name: 'mainPoints',
    initialState: initialState,
    reducers: {
        getPoints: (state, {payload}: PayloadAction<IPoint[]>) => {
            console.log(payload)
            state = {
                downloadDate: new Date().getDate().toString(),
                points: payload
            }
            return state;
        }
    }
})

export const mainPointsReducer = mainPointsSlice.reducer;
export const { getPoints } = mainPointsSlice.actions;