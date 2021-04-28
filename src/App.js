import './App.css';
import  Search from './components/Search';
import Results from './components/Results';
import Nominations from './components/Nominations'

function App() {
  return (
    <div className="main-container">
     <Search />
     <Results />
     <Nominations />
    </div>
  );
}

export default App;
