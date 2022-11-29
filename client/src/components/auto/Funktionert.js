import React from 'react'
import svg1 from '../../assets/images/versicherungen/1.svg'
import svg2 from '../../assets/images/versicherungen/2.svg'
import svg3 from '../../assets/images/versicherungen/3.svg'
import svg4 from '../../assets/images/versicherungen/4.svg'

function Funktionert() {
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
                                    <img src={svg1} alt='' />
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
                                    <img src={svg2} alt='' />
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
                                    <img src={svg3} alt='' />
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
                                    <img src={svg4} alt='' />
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