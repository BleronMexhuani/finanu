import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import MainComponents from './components/MainComponents'
import Krankenkasse from './components/Krankenkasse';
import PensionPlan from './components/PensionPlan';
import Hausrat from './components/Hausrat';
import Analys360 from './components/Analys360';
import Rechtsschutz from './components/Rechtsschutz';
import UberUns from './components/UberUns';
import ToggleDarkMode from './components/ToggleDarkMode';
import ScrollTop from "./ScrollTop.js"

function App() {
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('darkModeKey')) !== true && JSON.parse(localStorage.getItem('darkModeKey')) !== false) {
      localStorage.setItem('darkModeKey', 'false')
    }
    setDarkMode(localStorage.getItem('darkModeKey'))

  }, [])

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkModeKey')))
  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add('darkTheme')
    }
    else {
      document.body.classList.remove('darkTheme')
    }
    localStorage.setItem('darkModeKey', JSON.stringify(darkMode))
    setDarkMode(JSON.parse(localStorage.getItem('darkModeKey')))

  }, [darkMode])

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <ScrollTop>
            <Header />
            <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />

            <Routes>
              <Route exact path="/" element={<MainComponents darkMode={darkMode} />} />
              <Route exact path="/Krankenkasse" element={<Krankenkasse />} />
              <Route exact path="/pensionsplanung-und-ruhestand" element={<PensionPlan />} />
              <Route exact path="/haus-hypothek" element={<Hausrat />} />
              <Route exact path="/360" element={<Analys360 />} />
              <Route exact path="/rechtsschutz" element={<Rechtsschutz />} />
              <Route exact path="/uber-uns" element={<UberUns />} />
            </Routes>
            <Footer />
          </ScrollTop>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
