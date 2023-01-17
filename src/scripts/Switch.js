import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './templates/Home';
import About from './templates/About';
import ContactUs from './templates/ContactUs';
import SingleStamp from './templates/SingleStamp';

const Switch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/:stampSlug" element={<SingleStamp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Switch;
