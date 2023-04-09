import logo from './logo.svg';
import './App.css';
import SearchEngine from './SearchEngine';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import { Search } from '@mui/icons-material';
function App() {
  return (
    <div className="App">
    <div>
<Router>
  <Routes>
    <Route path='/' element={<SearchEngine/>}/>

  </Routes>
</Router>
    </div>
    </div>
  );
}

export default App;
