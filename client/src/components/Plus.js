import React from 'react'
import { useState, useEffect } from 'react'
import FirstSection from './plus/FirstSection'
import '../assets/css/plus.css'
import PlusTabs from './plus/PlusTabs'
import PlusTabsMobile from './plus/PlusTabsMobile'

import PlusReviews from './plus/PlusReviews'
import OurStory from './plus/OurStory'
import JoinUs from './plus/JoinUs'
import CoverYouNeed from './plus/CoverYouNeed'
import LtBlueSetion from './plus/LtBlueSetion'
import Vorar from './plus/Vorar'
import Otherquestions from './plus/Otherquestions'
function Plus(props) {
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
            <div className="bodyCounterPadding">
                <FirstSection darkMode={props.darkMode} />
            </div>


            {(screenWidth < 575.98) && (
                <div className="bodyCounterPadding">
                    <PlusTabsMobile />
                </div>
            )}
            {(screenWidth > 575.98) && (
                <div className="bodyCounterPadding">
                    <PlusTabs darkMode={props.darkMode} />
                </div>
            )}

            {(screenWidth < 575.98) && (
                <div className="bodyCounterPadding">
                    <JoinUs />
                </div>
            )}

            <div className='bodyCounterPadding'>
                <PlusReviews screenWidth={screenWidth} />
            </div>

            <div className='bodyCounterPadding'>
                <OurStory screenWidth={screenWidth} darkMode={props.darkMode} />
            </div>

            {(screenWidth > 575.98) && (
                <>
                    <div className="bodyCounterPadding">
                        <CoverYouNeed darkMode={props.darkMode} />
                    </div>
                    <div className="bodyCounterPadding">
                        <LtBlueSetion />
                    </div>
                    <div className='bodyCounterPadding'>
                        <Vorar darkMode={props.darkMode} />
                    </div>
                </>
            )}
            <div className='bodyCounterPadding'>
                <Otherquestions />

            </div>

            {(screenWidth > 575.98) && (
                <div className='bodyCounterPadding'>

                    <JoinUs />
                </div>
            )}

        </>
    )
}

export default Plus