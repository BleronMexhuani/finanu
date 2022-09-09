import React from 'react'
import '../assets/css/krankenkasse.css'
import '../assets/css/mainComponents.css'
import KrankenSteps from './kranken/KrankenkasseSteps'
import KrankenBlueBg from './kranken/KrankenBlueBg'
import GutZuWissen from './kranken/GutZuWissen'
import KrankenCards from './kranken/KrankenCards'
import Option2Kranken from './kranken/Option2Kranken'

function Krankenkasse(props) {
  return (
    <>
      <div>
        <KrankenSteps />
      </div>
      <div>
        <KrankenBlueBg />
      </div>
      <div>
        <GutZuWissen />
      </div>
      <div>
        <KrankenCards />
      </div>
      <div>
        <Option2Kranken darkMode={props.darkMode} />
      </div>
    </>
  )
}

export default Krankenkasse