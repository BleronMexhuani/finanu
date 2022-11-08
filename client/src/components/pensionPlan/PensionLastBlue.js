import React from 'react'
import PensionBank from '../../assets/images/pensionBank.svg'
import Versicherung from '../../assets/images/pensionVersicherung.svg'


function PensionLastBlue() {
    return (
        <div>
            <div className="container-xl px-4 px-xl-0 py-5 mt-5">
                <div className="px-0 px-lg-5">
                    <div className="blueBgDivPension px-4 px-md-5 pt-4 pt-md-5 pb-4 mx-0 mx-lg-5">
                        <div className="whiteBgInBluePension py-3 px-2">
                            <div className='text-center'>
                                <span className='finanuSubTitle fw-bold' style={{ color: '#50B8E7' }}>Unterschiede in der Vorsorge 3A
                                    Bank oder Versicherung</span>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className="row g-0 gy-5 gy-lg-0 justify-content-center">
                                <div className="col-12 col-md-4">
                                    <div className="pensionBankBorderBottom">
                                        <div>
                                            <img width={90} height={90} style={{ visibility: 'hidden' }} src={PensionBank} alt="" />
                                        </div>
                                        <div className='py-4'>
                                            <span className='fw-600' style={{ color: "#fff", visibility: 'hidden' }}>
                                                Bank
                                            </span>
                                        </div>
                                    </div>
                                    <div className='text-start'>
                                        <div className='py-3 ps-2 pensionBankBorderBottom'>
                                            <span className='fw-600' style={{ color: '#fff' }}>Zahlungen</span>
                                        </div>
                                        <div className='py-3 ps-2 pensionBankBorderBottom'>
                                            <span className='fw-600' style={{ color: '#fff' }}>Erträge</span>
                                        </div>
                                        <div className='py-3 ps-2 pensionBankBorderBottom'>
                                            <span className='fw-600' style={{ color: '#fff' }}>Investmentart</span>
                                        </div>
                                        <div className='py-3 ps-2'>
                                            <span className='fw-600' style={{ color: '#fff' }}>Absicherung möglich gegen</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="pensionBankBorderBottom">
                                        <div>
                                            <img width={90} height={90} src={PensionBank} alt="" />
                                        </div>
                                        <div className='py-4'>
                                            <span className='fw-600' style={{ color: "#fff" }}>
                                                Bank
                                            </span>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <div className='py-3 ps-2 pensionBankBorderBottom'>
                                            <span className='fw-600' style={{ color: '#fff' }}>Flexible Einzahlungen</span>
                                        </div>
                                        <div className='py-3 ps-2 pensionBankBorderBottom'>
                                            <span className='fw-600' style={{ color: '#fff' }}>Variabler Zins</span>
                                        </div>
                                        <div className='py-3 ps-2 pensionBankBorderBottom'>
                                            <span className='fw-600' style={{ color: '#fff' }}>Investment</span>
                                        </div>
                                        <div className='py-0 py-md-3 ps-2'>
                                            <span className='fw-600' style={{ color: '#fff', visibility: 'hidden' }}>sss</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="pensionBankBorderBottom">
                                        <div>
                                            <img width={90} height={90} src={Versicherung} alt="" />
                                        </div>
                                        <div className='py-4'>
                                            <span className='fw-600' style={{ color: "#fff" }}>
                                                Versicherung
                                            </span>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <div className='py-3 ps-2 pensionBankBorderBottom'>
                                            <span className='fw-600' style={{ color: '#fff' }}>Periodische Einzahlungen</span>
                                        </div>
                                        <div className='py-3 ps-2 pensionBankBorderBottom'>
                                            <span className='fw-600' style={{ color: '#fff' }}>Garantie</span>
                                        </div>
                                        <div className='py-3 ps-2 pensionBankBorderBottom'>
                                            <span className='fw-600' style={{ color: '#fff' }}>Garantie + Investment</span>
                                        </div>
                                        <div className='py-3 ps-2'>
                                            <span className='fw-600' style={{ color: '#fff' }}>Erwerbsunfähigkeitsrente<br></br>
                                                Prämienbefreiung<br></br>
                                                Todesfall</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PensionLastBlue