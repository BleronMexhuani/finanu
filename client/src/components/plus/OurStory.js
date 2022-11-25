import React from 'react'
import { ReactComponent as Signature } from '../../assets/images/plus/signature.svg'
import Accordion from 'react-bootstrap/Accordion';
function OurStory(props) {

    return (
        <div className='container-xl px-4 px-xl-0'>
            <div className='text-start'>
                <div className="d-block d-md-none">
                    <div>
                        <span className='plusTitle fw-700 secondaryColor'>
                            Our story
                        </span>
                    </div>
                    <div className='pb-4'>
                        <span className='fw-600 secondaryColor'>AS TOLD BY OUR FOUNDERS</span>
                    </div>
                </div>
                <div className="row gx-0 gx-md-5 gx-lg-0 gy-5 gy-md-0 justify-content-between">
                    <div className="col-12 col-md-6 col-lg-5 order-2 order-md-1">
                        <div className="d-none d-md-block col offset-lg-">
                            <div className='pb-4'>
                                <span className='plusTitle fs-2 fw-700 secondaryColor'>
                                    Our story
                                </span>
                            </div>
                            <div className='pb-5'>
                                <span className='fw-600 secondaryColor'>AS TOLD BY OUR FOUNDERS</span>
                            </div>
                        </div>
                        <div>
                            <div className="row gx-5  text-start">
                                <div className="col-6 col-sm-4  order-1 order-md-1">
                                    <div className='pb-5'>
                                        <Signature className="img-fluid" />

                                    </div>
                                    <div className='pb-3'>
                                        <span className='fw-600 secondaryColor fs-5'>Gresatis Bytyqitiosm</span>
                                    </div>
                                    <div>
                                        <span className='fw-600 secondaryColor'>CO-CEO</span>
                                    </div>
                                </div>
                                <div className="col-auto col-sm-1 order-1 order-md-1 mx-0 px-0"> </div>

                                <div className="col-6 col-sm-4 order-2 order-md-2">
                                    <div className='pb-5'>
                                        <Signature className="img-fluid" />

                                    </div>
                                    <div className='pb-3'>
                                        <span className='fw-600 secondaryColor fs-5'>Gresatis Bytyqitiosm</span>
                                    </div>
                                    <div>
                                        <span className='fw-600 secondaryColor'>CO-CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 order-1 order-md-2">

                        <div className='pb-4'>
                            <span className='secondaryColor fw-500 fw-md-700 fs-md-1 fs-5'>We learn from the past, but build for the future.</span>
                        </div>
                        <div className='secondaryColor fw-500 fs-5'>
                            <div className='pb-3'>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie</span>
                            </div>
                            <div className='pb-3'>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie</span>
                            </div>
                            <div className='pb-3'>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie turpis </span>
                            </div>
                            <div className='pb-3'>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu molestie turpis molestie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie turpis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                </span>
                            </div>
                        </div>

                        {(props.screenWidth < 575.98) && (
                            <div className="pt-4">
                                <Accordion defaultActiveKey="0" className='py-3' >
                                    <Accordion.Item eventKey="0" className='pt-3 accordionstyle' >
                                        <Accordion.Header className='faqstyle'>Lorem Ipsum lorem lorem</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.  
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className='pt-3 accordionstyle'>
                                        <Accordion.Header  className='faqstyle'>Lorem Ipsum lorem lorem</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. 
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className='pt-3 accordionstyle'>
                                        <Accordion.Header  className='faqstyle'>Lorem Ipsum lorem lorem</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.  
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3 " className='pt-3 accordionstyle'>
                                        <Accordion.Header  className='faqstyle'>Lorem Ipsum lorem lorem</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. 
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory