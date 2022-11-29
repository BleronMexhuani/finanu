import React from 'react'
import { NavLink } from "react-router-dom"
import '../assets/css/versicherungen.css'
import { ReactComponent as Groupe } from '../assets/images/versicherungen/mutuelLogo.svg'
import { ReactComponent as Swica } from '../assets/images/versicherungen/swicaLogo.svg'
import Sympany  from '../assets/images/versicherungen/logoSympany.png'

function Versicherungen() {
  return (
    <div className='bodyCounterPadding'>
      <div className='container-xl px-4 px-xl-0 pb-5 wrapDiv1'>
        <div className='pb-3'>
          <span className='firstBlueTitle'>
            Versicherungen
          </span>
        </div>
        <div>
          <span className='finanuSubTitle fs-5'>
            Auf der folgenden Seite stellen wir Ihnen die verschiedenen Versicherungsgesellschaften und ihre Modelle, Vor- und Nachteile sowie die wichtigsten Links vor.  Derzeit gibt es noch keine Seiten für alle Gesellschaften. Weitere Gesellschaften werden regelmäßig hinzugefügt. Wenn Sie Fragen zu einer bestimmten Gesellschaft haben, welche noch nicht aufgeführt ist, zögern Sie bitte nicht, uns zu kontaktieren!
            unserer Versicherer.</span>
        </div>
      </div>
      <div className='wrapDiv1 container-xl px-4 px-xl-0 '>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-sm-6 col-xl-4">
            <NavLink to='/versicherungen/sympany' className='text-decoration-none'>

              <div className='versicherungenLinks'>
                <img src={Sympany} alt="" />
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <NavLink to='/versicherungen/swica' className='text-decoration-none'>
              <div className='versicherungenLinks'>
                <Swica />
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <NavLink to='/versicherungen/groupe-mutuel' className='text-decoration-none'>
              <div className='versicherungenLinks'>
                <Groupe className='img-fluid' />
              </div>
            </NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Versicherungen