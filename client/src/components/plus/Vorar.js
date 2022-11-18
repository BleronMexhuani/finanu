import React from 'react'
import { ReactComponent as Ilu } from '../../assets/images/plus/vorarIlu.svg'
function Vorar() {
    return (
        <div className='container-xl px-4 px-xl-0 text-start'>
            <div className='pb-5'>
                <span className='fs-4 fw-700 secondaryColor'>Vorarussetzungen  -  Vergunstigung  -  Mitgliederbeirtrag</span>
            </div>
            <div>
                <div className="row g-4">
                    <div className="col-4">
                        <Ilu className="img-fluid" />
                    </div>
                    <div className="col fs-5 fw-600 secondaryColor">
                        <div className="pb-3">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie et, consectetur adipiscing elit. Etiam eu turpis molestie
                            </span>
                        </div>
                        <div className="pb-3">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie et, consectetur adipiscing elit. Etiam eu turpis molestie Etiam eu turpis molestie et, consectetur adipiscing elit. Etiam eu turpis molestieEtiam eu turpis molestie et, consectetur adipiscing elit. Etiam eu turpis molestie
                            </span>
                        </div>
                        <div className="">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie et, consectetur adipiscing elit. Etiam eu turpis molestie Etiam eu turpis molestie et, consectetur adipiscing elit. Etiam eu
                            </span>
                        </div>
                    </div>
                    <div className="col-auto">
                        plusProfileBg
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vorar