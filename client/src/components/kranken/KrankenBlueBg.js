import React from 'react'
import BlueBlob from "../../assets/images/blueBlob.svg"
function KrankenBlueBg() {
    return (
        <>
            <div className='blueBgKrankenOverflow'>
                <div className='blueBgKranken'>
                    {/* Background Photo per telefon edhe tablet mvyn  */}
                    <div className=' blueBgCenterText'>
                        <div className="wrapDiv container-xl px-4 pt-5 mt-5">
                            <div className='ngtMrg'>
                                <div className='pb-5'>
                                    <span className='fs-1 fw-bold'>Prämien der besten Krankenkassen</span>
                                </div>
                                <div className='fw-500 pb-5'>
                                    <div className='pb-4'>
                                        <span>Das Angebot an Krankenkassen ist in der Schweiz vielfältig. Auf der Webseite von Finanu können Sie die aktuellen Krankenkassenprämien
                                            kostenlos vergleichen und erfahren so, wie hoch ihr jährliches Sparpotential bei einem Wechsel sein könnte.</span>
                                    </div>
                                    <div className='pb-4'>
                                        <span>
                                            Unser Krankenkassenvergleich berechnet anhand nur weniger Angaben die passenden
                                            Krankenkassen für Sie und Ihre Familie. Die Versicherungen unterscheiden sich hierbei in Ihren Leistungen und im Preisgefüge.
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            Deshalb lohnt sich nach einem Onlinevergleich häufig eine kostenlose und unverbindliche Beratung
                                            um ein auf Sie und Ihre Familie Massgeschneidertes Angebot erstellen zu können. Durch die richtige
                                            Wahl der Franchise lassen sich Prämienverbilligung von bis zu 45 Prozent erreichen.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-5'>
                                <div className="row g-5 justify-content-center">
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <img src={BlueBlob} alt="" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <img src={BlueBlob} alt="" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <img src={BlueBlob} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KrankenBlueBg