import React from 'react'
import { NavLink } from "react-router-dom";
import '../assets/css/versicherungen.css'
function Versicherungen() {
  return (
    <div>
      <div className='cloudsBackground wrapDiv1'>
        <div className='pb-3'>
          <span className='firstBlueTitle'>
            VERSICHERUNGEN
          </span>
        </div>
        <div>
          <span className='finanuSubTitle'>Hier finden Sie eine Übersicht<br></br>
            unserer Versicherer.</span>
        </div>
      </div>
      <div className='wrapDiv1 container-xl px-4 px-xl-0'>
        <div className='pb-4 text-start'>

          <NavLink to='/versicherungen/sympany' className='text-decoration-none'>
            <div className='versicherungenLinks'>
              <span className='finanuSubTitle whiteTextOverwrite'>Sympany</span>
            </div>
          </NavLink>

        </div>
        <div className='pb-4 text-start'>

          <NavLink to='/versicherungen/swica' className='text-decoration-none'>
            <div className='versicherungenLinks'>
              <span className='finanuSubTitle whiteTextOverwrite'>Swica</span>
            </div>
          </NavLink>

        </div>
        <div className='pb-4 text-start'>

          <NavLink to='/versicherungen/allianz' className='text-decoration-none'>
            <div className='versicherungenLinks'>
              <span className='finanuSubTitle whiteTextOverwrite'>Allianz</span>
            </div>
          </NavLink>

        </div>
      </div>

    </div>
  )
}

export default Versicherungen