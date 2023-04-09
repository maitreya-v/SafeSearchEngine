import './App.css';
import SearchEngine from './SearchEngine';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
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
