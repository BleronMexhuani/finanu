import React from 'react'
import KrankenSteps from '../kranken/KrankenkasseSteps'
function HomeThirdSection() {

    return (
        <>
            {/* <div className='blueCloudsBg pt-2 mb-5'>
                <div className='px-4 px-md-5'>
                    <div className='row g-0 justify-content-center'>
                        <div className='col-12 col-md-8 col-lg-7 col-xl-7'>
                            <div className='py-3'>
                                <span className='fw-bold fs-2' style={{ color: '#fff' }}>Krankenkassenprämien<br></br> 2022 vergleichen</span>
                            </div>
                        </div>
                    </div>
                    <div className='row g-0 justify-content-center pt-4'>
                        <div className='col-12 col-md-9 col-lg-8 col-xl-8'>
                            <div style={{ fontWeight: 500, color: '#fff', fontSize: "18px" }}>
                                <div className='pb-4'>
                                    <span>Vergleichen Sie Ihre Krankenversicherung in zwei Schritten
                                    </span>
                                </div>
                                <div>
                                    <span>Schnell & neutral GRATIS vergleichen
                                        Kontaktiert werden und kostenlose Offerte erhalten
                                        Offerte anpassen und Krankenkasse optimieren
                                        Bis zu CHF 3870.- pro Jahr sparen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row g-0 justify-content-center py-5'>
                        <div className='col-12 col-md-10 col-lg-9 col-xl-9 '>
                            <div className="row justify-content-center g-4 pb-5">
                                <div className="col-12 col-md-4 col-lg-4">
                                    <select name="" className='form-select customSelectStyle' id="">
                                        <option value="test">Aktuelle Krankenkasse</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <select name="" className='form-select customSelectStyle' id="">
                                        <option value="test">Altersgruppe</option>
                                    </select>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4">
                                    <input type="text" className='form-control customSelectStyle' style={{ background: "#fff" }} placeholder='PLZ' />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mx-auto">
                                <button className='firstSectionBlueBtn w-100' style={{ fontWeight: 600 }}>Vergleichen & Sparen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <KrankenSteps />
        </>
    )
}

export default HomeThirdSection