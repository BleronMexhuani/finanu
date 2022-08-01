import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainComponents from './components/MainComponents'
import Krankenkasse from './components/Krankenkasse';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Header />
          
          <Routes>
            <Route exact path="/" element={<MainComponents />} />
            <Route exact path="/Krankenkasse" element={<Krankenkasse />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
