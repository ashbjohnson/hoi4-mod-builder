import { useSelector } from 'react-redux';
import './App.css';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { getEvents } from './Model/Store/eventsSlice';
import * as EventController from './Controller/EventController';
import { EventBlock } from './Model/Entity/ScopedModElements';

function App() {
  const events = useSelector((state) => state);
  const createBlankEvent = () => EventController.newEntry(EventBlock([]));
  console.log(events);
  return (
    <div className="App">
      <header className="App-header">
        <Typography>There are {events.length} events.</Typography>
        <Button onClick={createBlankEvent}>Create New Event</Button>
        <List>
          <ListItem>
            <ListItemText primary="" />
          </ListItem>
        </List>
      </header>
    </div>
  );
}

export default App;
