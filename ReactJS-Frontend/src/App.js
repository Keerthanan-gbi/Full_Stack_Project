import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LapList from './components/LapsList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddLap from './components/AddLap';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LapList/>} />
            <Route path="/add" element={<AddLap/>} />
            <Route path="/laps/edit/:id" element={<AddLap/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
