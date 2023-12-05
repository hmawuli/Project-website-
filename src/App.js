
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import { useState } from 'react';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
        case 'nav':
        return <Nav/>;
    }
  };
  return (
    <div>
    <Header setCurrentPage={setCurrentPage} />
    {renderPage()}
    <Footer />
  </div>
  );
}

export default App;
