import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AnimalPage from './pages/AnimalsPage/AnimalsPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ShelterPage from './pages/SheltersPage/ShelterPage';

const App = () => (
  <div className="App">
    <Router>
      <Route>
        <Routes path="/" element={<AnimalPage />} />
        <Routes path="/shelters" element={<ShelterPage />} />
        <Routes path="/blog" element={<BlogPage />} />
      </Route>
    </Router>
  </div>
);

export default App;
