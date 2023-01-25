import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename='/onePageClient'>
        <Content />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
