import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './templates/Home';
import About from './templates/About';
import ContactUs from './templates/ContactUs';
import SingleStamp from './templates/SingleStamp';

const App = () => {
  const [selectedStamp, setSelectedStamp] = useState(null);

  console.log(selectedStamp)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home handleStampPage={setSelectedStamp} />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact-us" element={<ContactUs />} exact />
        <Route path="/single-stamp" element={<SingleStamp />} exact />
        {/* <Route path={`/${selectedStamp?.slug}`} element={<SingleStamp stampItem={selectedStamp} />} exact /> */}
      </Routes>
    </Router>
  );
}

export default App;
