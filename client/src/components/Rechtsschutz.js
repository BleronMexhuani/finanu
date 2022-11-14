import React from 'react'
import BlueBackgroundSection from './rechtsschutz/BlueBackgroundSection'
import Faq from './rechtsschutz/Faq'
import LastSectionRechtss from './rechtsschutz/LastSectionRechtss'
import Privatenrechtsschutz from './rechtsschutz/Privatenrechtsschutz'
import RechtsschutzSteps from './rechtsschutz/RechtsschutzSteps'

function Rechtsschutz() {
  return (
    <div>
      <div>
        <RechtsschutzSteps />
      </div>
      <div>
        <Privatenrechtsschutz />
      </div>
      <div className='bodyCounterPadding'>
        <LastSectionRechtss />
      </div>

      <div className='bodyCounterPadding'>
        <BlueBackgroundSection />
      </div>

      <div>
        <Faq />
      </div>

    </div>
  )
}

export default Rechtsschutz