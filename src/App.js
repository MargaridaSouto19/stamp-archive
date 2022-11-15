import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './templates/Home';
import About from './templates/About';

import './styles/index.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} exact />
      </Routes>
    </Router>
  );
}

export default App;
