import React from 'react'
import imageoflastcomponent from '../../assets/images/plus/imageoflastcomponent.png'
import useCollapse from 'react-collapsed'

function Otherquestions() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className='container-xl px-5 px-xl-0 '>
            <div className='row justify-content-evenly' >
                <div className='col-12 col-md-5 my-auto'>
                    <div className='text-start'>
                        <p className='secondaryColor fs-3 fw-700'>
                            Other questions people ask a lot
                        </p>
                    </div>
                    <div className='collapsofthelastcomponent'>
                        <div className='row py-0 mx-0'>
                            <div className='px-0'>
                                <div className='px-0' {...getToggleProps()}>
                                    {isExpanded ? <div className='row py-4 mx-0'>
                                        <div className='col fw-700 text-center'>Lorem Ipsum lorem lorem</div>
                                        <div className='col text-end'>
                                            <div className='pe-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                            </div>
                                        </div>
                                    </div>
                                        : <div className='row py-4 mx-0'>
                                            <div className='col fw-700 text-center'>Lorem Ipsum lorem lorem</div>
                                            <div className='col text-end'>
                                                <div className='pe-3'>
                                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.47864 1.85059L7.47864 7.85059L13.4786 1.85059" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>}
                                </div>
                                <section {...getCollapseProps()}>Collapsed content 🙈</section>
                            </div>
                        </div>
                        <div className='row py-4 mx-0'>
                            <div className='col fw-700 text-center'>Lorem Ipsum lorem lorem</div>
                            <div className='col text-end'>
                                <div className='pe-3'>
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.47864 1.85059L7.47864 7.85059L13.4786 1.85059" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='row py-4 mx-0'>
                            <div className='col fw-700 text-center'>Lorem Ipsum lorem lorem</div>
                            <div className='col text-end'>
                                <div className='pe-3'>
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.47864 1.85059L7.47864 7.85059L13.4786 1.85059" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='row py-4 mx-0'>
                            <div className='col fw-700 text-center'>Lorem Ipsum lorem lorem</div>
                            <div className='col text-end '>
                                <div className='pe-3'>
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.47864 1.85059L7.47864 7.85059L13.4786 1.85059" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='text-start my-3'>
                        <button className='lastcomponentbutton w-50 py-2'>Get a qoute</button>
                    </div>
                </div>
                <div className='col-12 col-md-5'>
                    <img style={{maxWidth: '572px', width: '100%'}} src={imageoflastcomponent} />
                </div>
            </div>
        </div >

    )
}

export default Otherquestions