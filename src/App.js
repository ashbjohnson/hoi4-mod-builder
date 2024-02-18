import './App.css';
import { List, ListItem, ListItemText } from '@mui/material';
import tags from './countryTags.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List>
          {Object.entries(tags).map(([tag, name]) => <ListItem><ListItemText primary={name} secondary={tag} /></ListItem>)}
        </List>
      </header>
    </div>
  );
}

export default App;
