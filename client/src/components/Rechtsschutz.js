import React from 'react'
import BlueBackgroundSection from './rechtsschutz/BlueBackgroundSection'
import Faq from './rechtsschutz/Faq'
import LastSectionRechtss from './rechtsschutz/LastSectionRechtss'
import Privatenrechtsschutz from './rechtsschutz/Privatenrechtsschutz'
import RechtsschutzSteps from './rechtsschutz/RechtsschutzSteps'

function Rechtsschutz(props) {
  return (
    <div>
      <div>

        <RechtsschutzSteps  darkMode={props.darkMode} />

      </div>
      <div>
        <Privatenrechtsschutz darkMode={props.darkMode} />
      </div>
      <div className='bodyCounterPadding'>
        <LastSectionRechtss darkMode={props.darkMode} />
      </div>

      <div className='bodyCounterPadding'>
        <BlueBackgroundSection darkMode={props.darkMode} />
      </div>

      <div>
        <Faq />
      </div>

    </div>
  )
}

export default Rechtsschutz