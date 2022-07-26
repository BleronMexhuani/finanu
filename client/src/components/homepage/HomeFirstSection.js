import React, { lazy } from 'react'
import VorsorgeHome from '../../assets/images/vorsorgeHome.svg'
import VorsorgeHomeDark from '../../assets/images/NjeriDarkmode.svg'

import houseSvg from '../../assets/images/houseSvg.svg'
import houseDark from '../../assets/images/ShpiaDarkmode.svg'

import AutoHome from '../../assets/images/autoHome.svg'
import AutoHomeDark from '../../assets/images/KeriDarkmode.svg'

import KrankHome from '../../assets/images/krankHome.svg'
import KrankHomeDark from '../../assets/images/BedDarkmode.svg'

import Rechtsschutz from '../../assets/images/rechtsschutz.svg'
import RechtsschutzDark from '../../assets/images/LawDarkmode.svg'

import Finanzen from '../../assets/images/finanzenHome.svg'
import FinanzenDark from '../../assets/images/DoraDarkmode.svg'

import logo from "../../assets/images/logo.svg"
// import stars from "../../assets/images/stars.svg"

import { Link } from "react-router-dom";
import { ReactComponent as HeroImg } from '../../assets/images/Homush.svg'

const TrustBox = lazy(() => import('./TrustBox.js'))

function HomeFirstSection(props) {

    return (
        <>
            <div className="blueBackgroundDiv">
                <div className='cloudsBackground bodyCounterPadding'>
                    <div className='container-xl px-4 px-xl-0'>
                        <div className="row gx-4 gy-0 justify-content-center">
                            <div className="col-12 col-md-6 col-xl-5 text-start my-auto">
                                <div className='pb-3'>
                                    <span className='firstBlueTitle'>Informieren, Vergleichen & Abschliessen</span>
                                </div>
                                <div>
                                    <span className='finanuSubTitle fs-5' style={{ fontWeight: 500 }} >
                                        Oder wünschen Sie lieber eine kostenlose Gesamtberatung von einem unserer Kundenberatern?
                                    </span>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-7 mt-5 mt-md-0">
                                <HeroImg className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapDiv container-xl px-4 px-xl-0">
                    <div className="">
                        <div className="row g-4 g-sm-5 bodyCounterPadding">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5 h-100">
                                    <Link to='/finanzen/pensionsplanung-und-ruhestand'>

                                        <div className='pb-4'>
                                            {props.darkMode

                                                ? <img src={VorsorgeHomeDark} alt="" />
                                                : <img src={VorsorgeHome} alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Vorsorge & Pensionierung</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5 h-100">
                                    <Link to='/finanzen/haus-hypothek'>

                                        <div className='pb-4'>
                                            {props.darkMode

                                                ? <img src={houseDark} alt="" />
                                                : <img src={houseSvg} alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Wohnen, Eigenheim &
                                                Hypotheken</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5 h-100">
                                    <Link to="/versicherungen/auto-motorrad">

                                        <div className='pb-4'>
                                            {props.darkMode

                                                ? <img src={AutoHomeDark} alt="" />
                                                : <img src={AutoHome} alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Auto & Motorrad</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5 h-100">
                                    <Link to='/versicherungen/Krankenkasse'>

                                        <div className='pb-4'>
                                            {props.darkMode

                                                ? <img src={KrankHomeDark} alt="" />
                                                : <img src={KrankHome} height="130" alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Krankheit &
                                                Unfall</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5 h-100">
                                    <Link to='/versicherungen/Rechtsschutz'>

                                        <div className='pb-4'>
                                            {props.darkMode

                                                ? <img src={RechtsschutzDark} alt="" />
                                                : <img src={Rechtsschutz} alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Rechtsschutz</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="blueBgdiv p-5 h-100">
                                    <Link to='/finanzen/360'>
                                        <div className='pb-4'>
                                            {props.darkMode
                                                ? <img src={FinanzenDark} alt="" />
                                                : <img src={Finanzen} alt="" />
                                            }
                                        </div>
                                        <div>
                                            <span className='servicesWhiteText'>Finanzen &
                                                Budget</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 justify-content-center">
                        <div className="col-12 col-md-8">
                            <div className=''>
                                <img src={logo} width={250} alt="" />
                            </div>
                            <div className='pt-4'>
                                <span className='fs-4 firstBlueTitle' style={{ fontWeight: 700 }}>TRANSPARENT, SCHNELL, DIGITAL​</span>
                            </div>
                            <div className='pt-3'>
                                <span className='normalTextToWhite finanuSubTitle fs-5' style={{ fontWeight: 700 }}>Was ist finanu?</span>
                            </div>
                            <div className='pt-3'>
                                <span className='normalTextToWhite' style={{ fontWeight: 500 }}>Finanu hilft Ihnen als unabhängige Vergleichsplattform dabei sich in der
                                    unübersichtlichen Landschaft der Versicherungen und Finanzdienstleister
                                    zurechtzufinden und zu verstehen wofür Sie überhaupt zahlen.</span>
                            </div>
                            <div className='py-5'>
                                <TrustBox darkMode={props.darkMode} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeFirstSection