import React from 'react'
import House from '../../assets/images/pensionHouse.svg'
import HouseDark from '../../assets/images/pensionHouseDark.svg'
import ShakingHands from '../../assets/images/shakingHands.svg'
import ShakingHandsDark from '../../assets/images/shakingHandsDark.svg'
import Emigration from '../../assets/images/emigration.svg'
import EmigrationDark from '../../assets/images/emigrationDark.svg'
import Vaccine from '../../assets/images/vaccine.svg'
import VaccineDark from '../../assets/images/vaccineDark.svg'
import OldLady from '../../assets/images/oldLady.svg'
import OldLadyDark from '../../assets/images/oldLadyDark.svg'

function PensionCards(props) {
    return (
        <>
            <div className='container-xl px-4 px-xl-0'>
                <div className='bodyCounterPadding'>
                    <div className='row gx-4 gy-4 gy-md-0 text-start justify-content-between'>
                        <div className="col-12 col-md-5 pb-4 pb-md-0">
                            <div className=''>
                                <span className='firstBlueTitle fw-700 fs-1' style={{ color: '#50B8E7' }}>Wieso Vorsorgen?</span>
                            </div>
                        </div>
                        <div className="col col-md-7 my-auto">

                            <div className='fw-500 fs-5 normalTextToWhite' >
                                <span>
                                    Im Laufe des Lebens erarbeiten sich viele Menschen einen bestimmten Lebensstandard.
                                    Treten sie dann in den verdienten Ruhestand ein,
                                    können sie diesen Standard jedoch nicht mehr halten,
                                    weil die gesetzliche Rente sehr niedrig ausfällt.
                                    Daher ist es wichtig, sich möglichst früh mit der eigenen Altersvorsorge zu befassen.
                                    Wer in jungen Jahren mit dem Sparen für das Rentenalter beginnt,
                                    kann die Altersarmut vermeiden und das Leben im Ruhestand in vollen Zügen genießen.
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="row gx-4 justify-content-between pt-5">
                        <div className="col-12 col-md-6 col-lg-5 col-xl-4 text-start">
                            <div className='pb-4'>
                                <span className='fw-700 fs-1 normalTextToWhite'>So Individuell wie Sie!</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start">
                            <div className="">
                                <div className='fw-500 fs-5 normalTextToWhite'>
                                    <span>Ihre Pensionsplanung hängt davon ab, was Sie nach Ihrer Pensionierung unternehmen möchten.

                                        Planen Sie Reisen um die Welt oder legen Sie einfach nur Wert darauf, in finanziell gesicherten Verhältnissen von Ihrer Pension zu leben?

                                        Je nach Lebenswunsch fällt die Pensionsplanung unterschiedlich aus.

                                        Beginnen Sie Ihre Finanzplanung für die Pensionierung rechtzeitig, um entsprechend reagieren zu können.
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='pb-5'>
                    <span className='finanuSubTitle fw-bold' style={{ color: '#11A3E6' }}>BEZUGSMÖGLICHKEITEN</span>
                </div>
                <div className='pb-5'>
                    <div className="row g-4">
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="pensionWhiteCards p-4 h-100">
                                <div className='pb-4'>
                                    {props.darkMode
                                        ? <img src={HouseDark} alt="" />
                                        : <img src={House} alt="" />
                                    }
                                </div>
                                <div>
                                    <span className='fw-500'>Selbstbewohntes Eigenheim</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="pensionWhiteCards p-4 h-100">
                                <div className='pb-4'>
                                    {props.darkMode
                                        ? <img src={ShakingHandsDark} alt="" />
                                        : <img src={ShakingHands} alt="" />
                                    }
                                </div>
                                <div>
                                    <span className='fw-500'>Selbstständigkeit</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="pensionWhiteCards p-4 h-100">
                                <div className='pb-4'>
                                    {props.darkMode
                                        ? <img src={EmigrationDark} alt="" />
                                        : <img src={Emigration} alt="" />
                                    }
                                </div>
                                <div>
                                    <span className='fw-500'>Auswandern</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="pensionWhiteCards p-4 h-100">
                                <div className='pb-4'>
                                    {props.darkMode
                                        ? <img src={VaccineDark} alt="" />
                                        : <img src={Vaccine} alt="" />
                                    }
                                </div>
                                <div>
                                    <span className='fw-500'>IV mindestens 50%</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="pensionWhiteCards p-4 h-100">
                                <div className='pb-4'>
                                    {props.darkMode
                                        ? <img src={OldLadyDark} alt="" />
                                        : <img src={OldLady} alt="" />
                                    }
                                </div>
                                <div>
                                    <span className='fw-500'>5 Jahre vor der Pension</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PensionCards