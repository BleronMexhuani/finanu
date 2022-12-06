import React from 'react'
import LawLight from '../../assets/images/versicherungen/JawLight.svg'

function FirstSection(props) {
    return (
        <>
            <div className='container-xl px-4 px-xl-0 bodyCounterPadding'>
                <div className="row justify-content-between gy-5 gy-md-0 gx-5">
                    <div className="col-12 col-md-6 col-lg-6 my-md-auto">
                        <div className='pb-3 text-start'>
                            <span className='fw-700 fs-1 firstBlueTitle'>Jetzt passende<br></br>
                                <span style={{ wordBreak: 'break-all' }}>Rechtsschutzversicherung</span> finden!</span>
                        </div>
                        <div className='text-start pb-4'>
                            <span className='normalTextToWhite'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            </span>
                        </div>
                        <div className='text-start'>
                            <button onClick={props.toSteps} className='hausratBtn py-2'>
                                Rechtsschutzversicherung finden
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 my-md-auto">

                        <div className="">
                            <div>
                                 <img src={LawLight} className="img-fluid" alt="" />
                                    
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="bodyCounterPadding">
                <div className="uberUnsBg">
                    <div className="container-xl px-4 px-xl-0">

                        <div className="row gx-4 justify-content-between ">
                            <div className="col-12 col-md-5 col-xl-4 text-start my-md-auto">
                                <div className='pb-4' >
                                    <span className='fw-700 firstBlueTitle fs-1'>Wozu überhaupt eine
                                        Rechtsschutzversicherung?
                                    </span>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-7 col-xl-7 text-start my-md-auto">

                                <div className=''>
                                    <span className='fw-500 fs-5 normalTextToWhite'>
                                        Nicht immer läuft alles so wie es soll und manchmal benötigt man auch jurstische Unterstützung oder Beratung. Deshalb sollten Sie zur optimalen Absicherung auch an eine Rechtsschutz denken um bei jeglicher Art von Streitigkeiten möglichst gut abgesichert zu sein!
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FirstSection