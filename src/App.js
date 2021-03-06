import './App.css';
import { Principal ,MapaUniversitario} from './Pages';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ='/' element={<Principal/>}/>
        <Route exact path ='/MapaUniversitario' element={<MapaUniversitario/>}/>
      </Routes>
    </Router>
  );
}

export default App;
