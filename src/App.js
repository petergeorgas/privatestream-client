import './App.css';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StreamRoom from './StreamRoom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/stream/:id" element={<StreamRoom />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
