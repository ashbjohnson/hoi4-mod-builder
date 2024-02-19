import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
    },
    reducers: {
        addEvent: (state, action) => {
            state.events += action.payload;
        }
    }
})

export const { addEvent } = eventsSlice.actions;
export const getEvents = (state) => state.events.events;

export default eventsSlice.reducer;
