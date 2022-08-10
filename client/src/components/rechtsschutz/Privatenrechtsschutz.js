import React from 'react'
import BlueBlob from '../../assets/images/blueBlob.svg'

function Privatenrechtsschutz() {
    return (
        <div>
            <div className='wrapDiv container-xl px-4 px-xl-0 mx-auto pt-5 mt-5'>
                <div className="col-12 col-lg-9 col-xl-7 mx-auto">
                    <div className="row g-5 justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className='pe-0 pe-lg-5'>
                                <img src={BlueBlob} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className='pe-0 pe-lg-4 ps-0 ps-lg-4'>
                                <img src={BlueBlob} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className='ps-0 ps-lg-5'>
                                <img src={BlueBlob} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 mt-5">
                        <div className='pb-3'>
                            <span className='fw-700 fs-1' style={{ color: '#50B8E7' }}>Privatrechtsschutz kurz erklärt</span>
                        </div>
                        <div className='pb-5'>
                            <span>
                                Eine Privatrechtschutzversicherung hilft Ihnen bei einem Rechtsstreit bei privatrechtlichen<br></br>
                                Streitigkeiten, unterstützt Sie bei rechtlichen Fragen und übernimmt die anfallenden Kosten für einen<br></br>
                                Rechtsanwalt. Neben der Verkehrsrechtschutzversicherung bietet die Privatrechtschutzversicherung<br></br>
                                eine Basis der rechtlichen Versicherungen für Privatpersonen. Häufig wird die<br></br> Privatrechtschutzversicherung bei Streitigkeiten mit dem Arbeitgeber, dem Vermieter oder auch dem Nachbarn eingesetzt.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privatenrechtsschutz