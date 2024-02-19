import { addEvent } from '../Model/Store/eventsSlice';
import store from '../Model/Store/store';

export const newEntry = (entry) => store.dispatch(addEvent(entry));
