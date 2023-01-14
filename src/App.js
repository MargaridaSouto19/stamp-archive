import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './templates/Home';
import About from './templates/About';
import ContactUs from './templates/ContactUs';
import SingleStamp from './templates/SingleStamp';

import './styles/index.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/contactUs' element={<ContactUs />} exact />
        <Route path='/stamp/1' element={<SingleStamp />} exact />
      </Routes>
    </Router>
  );
}

export default App;
