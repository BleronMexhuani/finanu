import React from 'react'

function FourteenthStep() {
  return (
    <div className="text-start col-12 col-sm-9 col-md-12 col-lg-9 col-xl-6 stepsBlueDiv px-4 px-sm-5 pb-5 pt-4 pt-md-5 mx-auto">
      <div className='pb-4'>
        <div className='pb-2'>
          <span className='fw-600'>Vorname und Nachname / Firmenname</span>
        </div>
        <div>
          <input className='krankenInputStyle' type="text" name="" placeholder='Vorname und Nachname / Firmenname' id="" />
        </div>
      </div>
      <div className='pb-4'>
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className='pb-2'>
              <span className='fw-600'>Postleitzahl</span>
            </div>
            <div className="">
              <input className='krankenInputStyle' type="text" name="" placeholder='PLZ' id="" />
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='pb-2'>
              <span className='fw-600'>Ort</span>
            </div>
            <div className="">
              <input className='krankenInputStyle' type="text" name="" placeholder='Ort' id="" />
            </div>
          </div>
        </div>
      </div>
      <div className='pb-4'>
        <div className='pb-2'>
          <span className='fw-600'>Strasse</span>
        </div>
        <div>
          <input className='krankenInputStyle' type="text" name="" placeholder='Strasse' id="" />
        </div>
      </div>
      <div className='pb-4'>
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className='pb-2'>
              <span className='fw-600'>Geburtsdatum</span>
            </div>
            <div className="">
              <input className='form-control dateStyleIOS' type="date" name="" placeholder='PLZ' id="" />
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='pb-2'>
              <span className='fw-600'>Telefonnummer</span>
            </div>
            <div className="">
              <input className='krankenInputStyle' type="tel" name="" placeholder='Telefonnummer' id="" />
            </div>
          </div>
        </div>
      </div>
      <div className='pb-4'>
        <div className='pb-2'>
          <span className='fw-600'>E-mail</span>
        </div>
        <div>
          <input className='krankenInputStyle' type="text" name="" placeholder='E-mail' id="" />
        </div>
      </div>
      <div className='text-center'>
        <div className="col-12 col-md-4 col-lg-4 mx-auto">
          <button className='step3RechtssBtn w-100'>Einreichen</button>
        </div>
      </div>
    </div>
  )
}

export default FourteenthStep