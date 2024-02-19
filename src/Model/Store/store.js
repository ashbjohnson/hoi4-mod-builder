import { configureStore } from '@reduxjs/toolkit'
import eventsSlice from './eventsSlice'

export default configureStore({
  reducer: {
    events: eventsSlice
  }
})
