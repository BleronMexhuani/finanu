import React from 'react'


function ToggleDarkMode(props) {
    return (
        <div className='darkModeToggleDiv' onClick={() => { props.setDarkMode(!props.darkMode) }}>
            {props.darkMode
                ? <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="14.5" stroke="white" />
                    <path d="M1 17L14.5 4M3 22L14.5 11M6.5 26L14.5 18M11 28.5L14.5 25" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                : <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="14.5" stroke="black" />
                    <path d="M1 17L14.5 4M3 22L14.5 11M6.5 26L14.5 18M11 28.5L14.5 25" stroke="black" strokeWidth="1.4" strokeLinecap="round" />
                </svg>


            }
        </div>
    )
}

export default ToggleDarkMode