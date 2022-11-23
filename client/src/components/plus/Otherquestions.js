import React from 'react'
import imageoflastcomponent from '../../assets/images/plus/imageoflastcomponent.png'
import imageoflastcomponentmobile from '../../assets/images/plus/mobilephoto13.png'
// import useCollapse from 'react-collapsed'
import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from 'react'
function Otherquestions() {
    // const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (

        <>

            <div className='container-xl px-4 px-md-5 px-xl-0 '>
                <div className='row justify-content-evenly' >
                    <div className='col-12 col-md-5 my-auto'>
                        <div className='text-start'>
                            <p className='secondaryColor fs-3 fw-700'>
                                Other questions people ask a lot
                            </p>
                        </div>

                        <div className='collapsofthelastcomponent mb-5 mb-md-auto '>
                            <Accordion defaultActiveKey="0 text-dark accordionmainstyle ">
                                <Accordion.Item eventKey="4" className="accordionstyle agilestyleofaccordion border border-0">
                                    <Accordion.Header className="py-0 buttonofthelastcomponent">Accordion Item #1</Accordion.Header>
                                    <Accordion.Body className="contentoflastaccordion text-dark">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className="accordionstyle agilestyleofaccordion border border-0">
                                    <Accordion.Header className="py-0 buttonofthelastcomponent">Accordion Item #2</Accordion.Header>
                                    <Accordion.Body className="contentoflastaccordion text-dark">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className="accordionstyle agilestyleofaccordion border border-0">
                                    <Accordion.Header className="py-0 buttonofthelastcomponent">Accordion Item #3</Accordion.Header>
                                    <Accordion.Body className="contentoflastaccordion text-dark">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className="accordionstyle agilestyleofaccordion border border-0">
                                    <Accordion.Header className="py-0 buttonofthelastcomponent">Accordion Item #4</Accordion.Header>
                                    <Accordion.Body className="contentoflastaccordion text-dark">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        {(screenWidth > 575.98) && (
                            <div className='text-start my-3'>
                                <button className='lastcomponentbutton w-50 py-2'>Get a qoute</button>
                            </div>
                        )}
                    </div>

                    {(screenWidth > 575.98) && (
                        <div className='col-12 col-md-5 my-auto'>
                            <img style={{ maxWidth: '572px', width: '100%' }} src={imageoflastcomponent} />
                        </div>

                    )}



                </div>
            </div >

            {(screenWidth < 575.98) && (
                <div className='bgcoloroflastcomponent'>
                    <div className='px-4 py-5'>
                        <div className='pb-4'>
                            <img className='img-fluid w-100' src={imageoflastcomponentmobile} />
                        </div>
                        <div className='pb-2'>
                            <span className='fs-3 fw-700 secondaryColor'>Uninsured driver promsie</span>
                        </div>
                        <div>
                            <span className='secondaryColor fw-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default Otherquestions