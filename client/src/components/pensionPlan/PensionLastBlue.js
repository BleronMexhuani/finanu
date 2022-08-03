import React from 'react'
import PensionBank from '../../assets/images/pensionBank.svg'
function PensionLastBlue() {
    return (
        <div>
            <div className="container-xl px-4 px-xl-0 py-5 mt-5">
                <div className="blueBgDivPension p-4 p-md-5">
                    <div className="whiteBgInBluePension py-3 px-2">
                        <div className='text-center'>
                            <span className='fw-bold fs-5' style={{color: '#84CDEE'}}>Unterschiede in der Vorsorge 3A
                                Bank oder Versicherung</span>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div className="row g-0">
                            <div className="col-12 col-md-6 col-lg-4">
                                <div>
                                    <img width={90} height={90} src={PensionBank} class="img-fluid rounded-top hidden" alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">

                            </div>
                            <div className="col-12 col-md-6 col-lg-4">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PensionLastBlue