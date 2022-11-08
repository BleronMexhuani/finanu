import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import MainComponents from "./components/MainComponents";
import Krankenkasse from "./components/Krankenkasse";
import PensionPlan from "./components/PensionPlan";
import Hausrat from "./components/Hausrat";
import Analys360 from "./components/Analys360";
import Rechtsschutz from "./components/Rechtsschutz";
import UberUns from "./components/UberUns";
import ToggleDarkMode from "./components/ToggleDarkMode";
import ScrollTop from "./ScrollTop.js";
import Auto from "./components/Auto";
import Login from "./components/login/Login";
import Versicherungen from "./components/Versicherungen";
import Sympany from "./components/versicherungen/Sympany";
import Swica from "./components/versicherungen/Swica";
import GroupeMutuel from "./components/versicherungen/GroupeMutuel";
import Allianz from "./components/versicherungen/Allianz";
import Wettbewerbe from "./components/Wettbewerbe";
import WLinks from "./components/wettbewerbe/WLinks";
import WettPhoto1 from "./assets/images/berncity.jpg";
import WLinksTwo from "./components/wettbewerbe/WLinksTwo";
import WettPhoto2 from "./assets/images/europapark.jpg";
import WLinksThree from "./components/wettbewerbe/WLinksThree";
import WettPhoto3 from "./assets/images/oldcity.jpg";


function App() {
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("darkModeKey")) !== true &&
      JSON.parse(localStorage.getItem("darkModeKey")) !== false
    ) {
      localStorage.setItem("darkModeKey", "false");
    }
    setDarkMode(localStorage.getItem("darkModeKey"));
  }, []);

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkModeKey"))
  );
  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("darkTheme");
    } else {
      document.body.classList.remove("darkTheme");
    }
    localStorage.setItem("darkModeKey", JSON.stringify(darkMode));
    setDarkMode(JSON.parse(localStorage.getItem("darkModeKey")));
  }, [darkMode]);

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <ScrollTop>
            <Header darkMode={darkMode} />
            <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
              {/* Home */}
              <Route exact path="/" element={<MainComponents darkMode={darkMode} />}/>

              {/* Wettbewerbe */}
              <Route exact path="/wettbewerbe" element={<Wettbewerbe />} />
              <Route exact path="/wettbewerbe/1"  element={<WLinks Photo={WettPhoto1} data="31.07.2022" />} />
              <Route exact  path="/wettbewerbe/2"  element={<WLinksTwo Photo={WettPhoto2} />} />
              <Route exact path="/wettbewerbe/3" element={<WLinksThree Photo={WettPhoto3} />} />
              {/* <Route exact path="/wettbewerbe/2" element={<WLinks Photo={} />} /> */}
              {/* <Route exact path="/wettbewerbe/3" element={<WLinks Photo={} />} /> */}

              {/* versicherungen */}
              <Route exact path="/versicherungen" element={<Versicherungen />}/>
              <Route exact path="/versicherungen/sympany" element={<Sympany />}/>
              <Route exact path="/versicherungen/swica" element={<Swica />} />
              <Route exact path="/versicherungen/groupe-mutuel" element={<GroupeMutuel />}/>
              <Route exact path="/versicherungen/allianz" element={<Allianz />}/>
              <Route exact path="/versicherungen/krankenkasse" element={<Krankenkasse darkMode={darkMode} />}/>
              <Route exact path="/versicherungen/rechtsschutz" element={<Rechtsschutz />}/>
              <Route exact path="/versicherungen/auto-motorrad" element={<Auto />}/>

              {/* Finanzen */}
              <Route exact path="/finanzen/pensionsplanung-und-ruhestand" element={<PensionPlan darkMode={darkMode} />} />
              <Route exact path="/finanzen/haus-hypothek" element={<Hausrat />}/>
              <Route exact path="/finanzen/360" element={<Analys360 />} />
              <Route exact path="/uber-uns" element={<UberUns />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </ScrollTop>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
