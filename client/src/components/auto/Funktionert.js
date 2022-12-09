import React from 'react'
import svg1 from '../../assets/images/versicherungen/1light.svg'
import svg2 from '../../assets/images/versicherungen/2light.svg'
import svg3 from '../../assets/images/versicherungen/3light.svg'
import svg4 from '../../assets/images/versicherungen/4light.svg'

import svg1dark from '../../assets/images/versicherungen/1dark.svg'
import svg2dark from '../../assets/images/versicherungen/2dark.svg'
import svg3dark from '../../assets/images/versicherungen/3dark.svg'
import svg4dark from '../../assets/images/versicherungen/4dark.svg'


function Funktionert(props) {

    return (
        <div className=''>
            <div className="wrapDiv container-xl px-4 px-xl-0">
                <div className="pb-4 text-center">
                    <span className='fw-700 finanuSubTitle fs-4'>
                        So einfach funktioniert’s
                    </span>
                </div>
                <div>
                    <div className="row g-4">
                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className="p-4 whiteCardKranken h-100 text-center">
                                <div className="pb-4">
                                    {!props.darkMode
                                        ? <img src={svg1} alt='' />
                                        : <img src={svg1dark} alt='' />
                                    }
                                </div>
                                <div className='pb-2'>
                                    <span className='finanuSubTitle fw-600 fs-5'>Digital anfragen</span>
                                </div>
                                <div>
                                    <span className='fw-500'>Laden Sie ire bestehende Offerte hoch oder starten Sie eine neue Anfrage.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className="p-4 whiteCardKranken h-100 text-center">
                                <div className="pb-4">

                                    {!props.darkMode
                                        ? <img src={svg2} alt='' />
                                        : <img src={svg2dark} alt='' />
                                    }
                                </div>
                                <div className='pb-2'>
                                    <span className='finanuSubTitle fw-600 fs-5'>Angebote durch finanu einholen lassen</span>
                                </div>
                                <div>
                                    <span className='fw-500'>Finanu holt basierend auf Ihren Angaben und Wünschen
                                        Angebote be den verschiedenen Gesellschaften ein.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className="p-4 whiteCardKranken h-100 text-center">
                                <div className="pb-4">

                                    {!props.darkMode
                                        ? <img src={svg3} alt='' />
                                        : <img src={svg3dark} alt='' />
                                    }
                                </div>
                                <div className='pb-2'>
                                    <span className='finanuSubTitle fw-600 fs-5'>Angebote vergleichen</span>
                                </div>
                                <div>
                                    <span className='fw-500'>Vergleichen Sie die Angebote und lassen Sie sich bei Bedarf
                                        persönlich von uns beraten.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className="p-4 whiteCardKranken h-100 text-center">
                                <div className="pb-4">

                                    {!props.darkMode
                                        ? <img src={svg4} alt='' />
                                        : <img src={svg4dark} alt='' />
                                    }
                                </div>
                                <div className='pb-2'>
                                    <span className='finanuSubTitle fw-600 fs-5'>Entscheiden und Abschliessen</span>
                                </div>
                                <div>
                                    <span className='fw-500'>Haben Sie das passende Angebot gefunden? Schliessen Sie
                                        den Vertrag mit finanu ab und wir kümmern uns um den Rest.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Funktionert