import './App.css';
import Search from './components/Search';
import Textarea from './components/Textarea';
import Card from './components/Card';
import { colors } from './colors';
import { useSelector } from 'react-redux';

const cardThemeColors = colors;


function App() {

  const notes = useSelector(state => state.notes.filteredItems);

  return (
    <div className='App'>
      <div className='header'>Notes App</div>
      <Search />
      <Textarea />
      <div className='footer'>
        {cardThemeColors.map((cardTheme, index) => (<Card key={index} cardTheme={cardTheme} data={notes.filter(item => item.color === cardTheme.title)} />))}
      </div>
    </div>
  );
}

export default App;
