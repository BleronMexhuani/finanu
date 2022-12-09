import React from 'react'
import { ReactComponent as Ilu } from '../../assets/images/kraken/houuusushi.svg'
import { ReactComponent as IluDark } from '../../assets/images/kraken/houuusushiDark.svg'

function FirstSectionHaus(props) {
    return (
        <>
            <div className="container-xl px-4 px-xl-0 bodyCounterPadding">
                <div className="row justify-content-between gy-5 gy-md-0 gx-5">
                    <div className="col-12 col-md-6 col-lg-6 my-md-auto">
                        <div className='pb-3 text-start'>
                            <span className='fw-700 fs-1 firstBlueTitle'>Alles rund ums Eigenheim</span>
                        </div>
                        <div className='text-start pb-4'>
                            <span className='normalTextToWhite'>
                                Der Erwerb eines Eigenheims ist ein langer und oft einzigartiger Prozess im Leben. Doch mit der richtigen Finanzierung ist die erste Hürde zum Wohneigentum bereits genommen. Erfahren Sie, wo Sie beim Kauf einer Immobilie Geld sparen können und was Sie vermeiden sollten. Nutzen Sie das Wissen unserer Spezialisten zu Ihrem Vorteil, wenn es um die Erfüllung von Immobilienträumen geht.
                            </span>
                        </div>
                        <div className='text-start'>
                            <button onClick={props.toSteps} className='hausratBtn py-2'>
                                Zum Hypothekenvergleich
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 my-md-auto">

                        <div className="">
                            <div>
                                {props.darkMode

                                    ? <IluDark className='img-fluid' />
                                    : <Ilu className='img-fluid' />
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstSectionHaus