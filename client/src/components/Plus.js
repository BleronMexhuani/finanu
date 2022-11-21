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
function Plus() {
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
            <div className="pb-5 mb-4">
                <FirstSection />
            </div>


            {(screenWidth < 575.98) && (
                <PlusTabsMobile />

            )}
            {(screenWidth > 575.98) && (
                <div className="pb-5 mb-4">
                    <PlusTabs />
                </div>
            )}

            {(screenWidth < 575.98) && (
                <JoinUs />
            )}

            <div className='pb-5 mb-4'>
                <PlusReviews screenWidth={screenWidth} />
            </div>

            <div className='pb-5 mb-4'>
                <OurStory screenWidth={screenWidth} />
            </div>

            {(screenWidth > 575.98) && (
                <>
                    <div className="pb-5 mb-4">
                        <CoverYouNeed />
                    </div>
                    <div className="pb-5 mb-4">
                        <LtBlueSetion />
                    </div>
                    <div className='pb-5 mb-4'>
                        <Vorar />
                    </div>
                </>
            )}
            <div className='pb-5 mb-4'>
                <Otherquestions />

            </div>

        </>
    )
}

export default Plus