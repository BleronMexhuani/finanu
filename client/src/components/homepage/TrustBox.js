import React from 'react';
const TrustBox = () => {
    // Create a reference to the <div> element which will represent the TrustBox
    const ref = React.useRef();
    React.useEffect(() => {
        // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
        // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
        // When it is, it will automatically load the TrustBox.
        if (window.Trustpilot) {
            window.Trustpilot.loadFromElement(ref.current, true);
        }
    }, []);
    return (
        <div
            ref={ref} // We need a reference to this element to load the TrustBox in the effect.
            className="trustpilot-widget normalTextToWhite" // Renamed this to className.
            data-locale='de-DE' data-template-id='5419b6a8b0d04a076446a9ad' data-businessunit-id='637d090c707523ba3847609c' data-style-height='24px' data-style-width='100%' data-theme='light' data-min-review-count='0' data-style-alignment='center'
        >
            <a rel="noreferrer" href="https://de.trustpilot.com/review/finanu.ch" target="_blank"> Trustpilot
            </a>
        </div>
        
    );
};
export default TrustBox;