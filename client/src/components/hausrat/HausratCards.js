import React from 'react'
import { ReactComponent as NewHome } from '../../assets/images/hausratSliderPhotos/newHome.svg'
import { ReactComponent as Homegate } from '../../assets/images/hausratSliderPhotos/homegate.svg'
import { ReactComponent as Immo } from '../../assets/images/hausratSliderPhotos/immoscout24.svg'
import { ReactComponent as Svit } from '../../assets/images/hausratSliderPhotos/svit.svg'

import { ReactComponent as Ent1 } from '../../assets/images/hausratSliderPhotos/Ent1.svg'
import { ReactComponent as Ent2 } from '../../assets/images/hausratSliderPhotos/Ent2.svg'
import { ReactComponent as Ent3 } from '../../assets/images/hausratSliderPhotos/Ent3.svg'
import { ReactComponent as Ent4 } from '../../assets/images/hausratSliderPhotos/Ent4.svg'

import { ReactComponent as Rech1 } from '../../assets/images/hausratSliderPhotos/Rech1.svg'
import { ReactComponent as Rech2 } from '../../assets/images/hausratSliderPhotos/Rech2.svg'

////////////////////
import { ReactComponent as NewHomeDark } from '../../assets/images/hausratSliderPhotos/newHomeDark.svg'
import { ReactComponent as HomegateDark } from '../../assets/images/hausratSliderPhotos/homegateDark.svg'
import { ReactComponent as ImmoDark } from '../../assets/images/hausratSliderPhotos/immoscout24Dark.svg'
import { ReactComponent as SvitDark } from '../../assets/images/hausratSliderPhotos/svitDark.svg'

import { ReactComponent as Ent1Dark } from '../../assets/images/hausratSliderPhotos/Ent1Dark.svg'
import { ReactComponent as Ent2Dark } from '../../assets/images/hausratSliderPhotos/Ent2Dark.svg'
import { ReactComponent as Ent3Dark } from '../../assets/images/hausratSliderPhotos/Ent3Dark.svg'
import { ReactComponent as Ent4Dark } from '../../assets/images/hausratSliderPhotos/Ent4Dark.svg'

import { ReactComponent as Rech2Dark } from '../../assets/images/hausratSliderPhotos/Rech2Dark.svg'

function HausratCards(props) {
    return (
        <>
            <div className="bodyCounterPadding container-xl px-4 px-xl-0">
                <div className='pb-5'>
                    <div className='pb-4 text-start'>
                        <span className='finanuSubTitle fw-700 fs-3'>Immobilien finden</span>
                    </div>
                    <div>
                        <div className="row g-3 text-start justify-content-start">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <a rel="noreferrer" href="https://www.newhome.ch" className='text-decoration-none' target="_blank">
                                    <div className='p-3 useFullLinks text-center'>
                                        {props.darkMode
                                            ? <NewHomeDark />
                                            : <NewHome />
                                        }
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <a rel="noreferrer" href="https://www.immoscout24.ch" className='text-decoration-none' target="_blank">
                                    <div className='p-3 useFullLinks text-center'>
                                        {props.darkMode
                                            ? <ImmoDark />
                                            : <Immo />
                                        }
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <a rel="noreferrer" href="https://www.homegate.ch" className='text-decoration-none' target="_blank">
                                    <div className='p-3 useFullLinks text-center'>
                                        {props.darkMode
                                            ? <HomegateDark />
                                            : <Homegate />
                                        }
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <a rel="noreferrer" href="https://www.maklerkammer.ch/" className='text-decoration-none' target="_blank">
                                    <div className='p-3 useFullLinks text-center'>
                                        {props.darkMode
                                            ? <SvitDark />
                                            : <Svit />
                                        }
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='pb-5'>
                    <div className='pb-4 text-start'>
                        <span className='finanuSubTitle fw-700 fs-3'>Entwicklung der Kauf- und Mietpreise</span>
                    </div>
                    <div>
                        <div className="row g-3 text-start justify-content-start">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <a rel="noreferrer" href="https://www.bfs.admin.ch/bfs/de/home/statistiken/preise/baupreise/baupreisindex.html" className='text-decoration-none' target="_blank">

                                    <div className='p-3 useFullLinks text-center'>
                                        {props.darkMode
                                            ? <Ent1Dark />
                                            : <Ent1 />
                                        }
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <a rel="noreferrer" href="https://www.bfs.admin.ch/bfs/de/home/statistiken/preise/mieten/index.html" className='text-decoration-none' target="_blank">
                                    <div className='p-3 useFullLinks text-center'>
                                        {props.darkMode
                                            ? <Ent2Dark />
                                            : <Ent2 />
                                        }
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <a rel="noreferrer" href="https://www.bfs.admin.ch/bfs/de/home/statistiken/preise/immobilienpreise.html" className='text-decoration-none' target="_blank">
                                    <div className='p-3 useFullLinks text-center'>
                                        {props.darkMode
                                            ? <Ent3Dark />
                                            : <Ent3 />
                                        }
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <a rel="noreferrer" href="https://www.ubs.com/ch/de/private/mortgages/real-estate.html" className='text-decoration-none' target="_blank">
                                    <div className='p-3 useFullLinks text-center'>
                                    {props.darkMode
                                            ? <Ent4Dark />
                                            : <Ent4 />
                                        }
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div className='pb-4 text-start'>
                        <span className='finanuSubTitle fw-700 fs-3'>Rechtliches</span>
                    </div>
                    <div>
                        <div className="row g-3 text-start justify-content-start">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <a rel="noreferrer" href="https://www.ch.ch/de/steuern-und-finanzen/steuerarten/immobiliensteuer/" className='text-decoration-none' target="_blank">

                                    <div className='p-3 useFullLinks text-center'>
                                        <Rech1 />
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <a rel="noreferrer" href="https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/bv/grundlagen-und-gesetze/grundlagen/wohneigentumsfoerderung.html" className='text-decoration-none' target="_blank">
                                    <div className='p-3 useFullLinks text-center'>
                                        {props.darkMode
                                            ? <Rech2Dark />
                                            : <Rech2 />
                                        }
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HausratCards