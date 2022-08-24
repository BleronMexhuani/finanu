import React from 'react'
import LightIcon from '../assets/images/darkMode.png'
import DarkIcon from '../assets/images/darkModeLight.png'

function ToggleDarkMode(props) {
    return (
        <div className='darkModeToggleDiv' onClick={() => {props.setDarkMode(!props.darkMode)}}>
            {props.darkMode
                ? <img src={DarkIcon} alt="" />
                : <img src={LightIcon} alt="" />
            }
        </div>
    )
}

export default ToggleDarkMode