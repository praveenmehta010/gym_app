import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import GymList from './components/GymList';
import TrainerList from './components/TrainerList';
import TrainerDetail from './components/TrainerDetail';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gyms" element={<GymList />} />
        <Route path="/trainers" element={<TrainerList />} />
        <Route path="/trainer/:id" element={<TrainerDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;



