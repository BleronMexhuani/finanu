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
import Auto from './components/Auto';
import Login from './components/login/Login';
import Versicherungen from './components/Versicherungen';
import Sympany from './components/versicherungen/Sympany';
import Swica from './components/versicherungen/Swica';
import GroupeMutuel from './components/versicherungen/GroupeMutuel';

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
            <Header darkMode={darkMode} />
            <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
              <Route exact path="/" element={<MainComponents darkMode={darkMode} />} />
              <Route exact path="/versicherungen" element={<Versicherungen />} />
              <Route exact path="/versicherungen/sympany" element={<Sympany />} />
              <Route exact path="/versicherungen/swica" element={<Swica />} />
              <Route exact path="/versicherungen/groupe-mutuel" element={<GroupeMutuel />} />
              <Route exact path="/versicherungen/krankenkasse" element={<Krankenkasse darkMode={darkMode} />} />
              <Route exact path="/versicherungen/rechtsschutz" element={<Rechtsschutz />} />
              <Route exact path="/versicherungen/auto-motorrad" element={<Auto /> } />
              <Route exact path="/finanzen/pensionsplanung-und-ruhestand" element={<PensionPlan darkMode={darkMode} />} />
              <Route exact path="/finanzen/haus-hypothek" element={<Hausrat />} />
              <Route exact path="/finanzen/360" element={<Analys360 />} />
              <Route exact path="/uber-uns" element={<UberUns />} />
              <Route exact path="/login" element={<Login /> } />
            </Routes>
            <Footer />
          </ScrollTop>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
