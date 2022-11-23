import React from 'react'
import { NavLink } from "react-router-dom";
import '../assets/css/versicherungen.css'
function Versicherungen() {
  return (
    <div>
      <div className='container-xl px-4 px-xl-0 pb-5 wrapDiv1'>
        <div className='pb-3'>
          <span className='firstBlueTitle'>
            VERSICHERUNGEN
          </span>
        </div>
        <div>
          <span className='finanuSubTitle'>
          Auf der folgenden Seite stellen wir Ihnen die verschiedenen Versicherungsgesellschaften und ihre Modelle, Vor- und Nachteile sowie die wichtigsten Links vor.  Derzeit gibt es noch keine Seiten für alle Gesellschaften. Weitere Gesellschaften werden regelmäßig hinzugefügt. Wenn Sie Fragen zu einer bestimmten Gesellschaft haben, welche noch nicht aufgeführt ist, zögern Sie bitte nicht, uns zu kontaktieren! 
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

          <NavLink to='/versicherungen/groupe-mutuel' className='text-decoration-none'>
            <div className='versicherungenLinks'>
              <span className='finanuSubTitle whiteTextOverwrite'>Groupe Mutuel</span>
            </div>
          </NavLink>

        </div>
      </div>

    </div>
  )
}

export default Versicherungen