import React from 'react'

function NinthStep(props) {
  const changeMY = (e) => {
    const el = e.target.parentNode.closest("div");
    const sib = el.parentNode.childNodes;
    const findsib = sib[0].childNodes;
    const anothersib = findsib[0].childNodes;

    var inputValue = anothersib[0].childNodes[0].value;
    var inputAttr = anothersib[0].childNodes[0].getAttribute("my");
    if (inputValue !== null && inputValue !== '0' && inputValue !== '') {
      if (inputAttr === "month") {

        inputValue = inputValue * 12
        anothersib[0].childNodes[0].value = inputValue
        anothersib[0].childNodes[0].setAttribute("my", "year")
      }
      else {
        inputValue = inputValue / 12
        anothersib[0].childNodes[0].value = inputValue
        anothersib[0].childNodes[0].setAttribute("my", "month")

      }
    }
  }
  const handleNinthStep = (e) => {
    e.preventDefault()
    const value = []

    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].name === 'ninthStepInput') {
        value.push(parseInt(e.target[i].value))
      }
    }

    props.setNinthStepInputs(value)
    props.toNext()
  }
  return (
    <div>
      <form className='m-0' onSubmit={handleNinthStep}>
        <div className="col-12 col-sm-9 col-md-12 col-lg-9 col-xl-6 stepsBlueDiv px-4 px-sm-5 pb-5 pt-4 mx-auto">
          <div className='pb-4'>
            <span className='finanuSubTitle fw-800 text-light'>Mobilität</span>
          </div>
          <div className='text-start'>
            <div className="row gx-4 gy-0">
              <div className='pb-5 col-12 col-md-6 mt-auto'>
                <div className='pb-2'>
                  <span className='fw-600'>Leasing (Auto, Motorrad) </span>
                </div>
                <div className="">
                  <div className="row g-3">
                    <div className="col">
                      <div className="row g-0 stepsFormInputs rightBorderDiv">
                        <div className="col">
                          <input name="ninthStepInput" onChange={(e) => { props.setNinthStepInputs(e.target.value) }} defaultValue={props.ninthStepInputs[0]} type="number" my={"month"} className='w-100 borderRightInput' />
                        </div>
                        <div className="col-auto my-auto">
                          <div className='px-2'>
                            <span className='text-dark'>CHF</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type='button' className='stepsNextBtn' onClick={(e) => changeMY(e)}>M/Y</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pb-5 col-12 col-md-6 mt-auto'>
                <div className='pb-2'>
                  <span className='fw-600'>Motorfahrzeigversicherung</span>
                </div>
                <div className="">
                  <div className="row g-3">
                    <div className="col">
                      <div className="row g-0 stepsFormInputs rightBorderDiv">
                        <div className="col">
                          <input name="ninthStepInput" onChange={(e) => { props.setNinthStepInputs(e.target.value) }} defaultValue={props.ninthStepInputs[1]} type="number" my={"month"} className='w-100 borderRightInput' />
                        </div>
                        <div className="col-auto my-auto">
                          <div className='px-2'>
                            <span className='text-dark'>CHF</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type='button' className='stepsNextBtn' onClick={(e) => changeMY(e)}>M/Y</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pb-5 col-12 col-md-6 mt-auto'>
                <div className='pb-2'>
                  <span className='fw-600'>Treibstoff</span>
                </div>
                <div className="">
                  <div className="row g-3">
                    <div className="col">
                      <div className="row g-0 stepsFormInputs rightBorderDiv">
                        <div className="col">
                          <input name="ninthStepInput" onChange={(e) => { props.setNinthStepInputs(e.target.value) }} defaultValue={props.ninthStepInputs[2]} type="number" my={"month"} className='w-100 borderRightInput' />
                        </div>
                        <div className="col-auto my-auto">
                          <div className='px-2'>
                            <span className='text-dark'>CHF</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type='button' className='stepsNextBtn' onClick={(e) => changeMY(e)}>M/Y</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pb-5 col-12 col-md-6 mt-auto'>
                <div className='pb-2'>
                  <span className='fw-600'>Parkplatz </span>
                </div>
                <div className="">
                  <div className="row g-3">
                    <div className="col">
                      <div className="row g-0 stepsFormInputs rightBorderDiv">
                        <div className="col">
                          <input name="ninthStepInput" onChange={(e) => { props.setNinthStepInputs(e.target.value) }} defaultValue={props.ninthStepInputs[3]} type="number" my={"month"} className='w-100 borderRightInput' />
                        </div>
                        <div className="col-auto my-auto">
                          <div className='px-2'>
                            <span className='text-dark'>CHF</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type='button' className='stepsNextBtn' onClick={(e) => changeMY(e)}>M/Y</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pb-5 col-12 col-md-6 mt-auto'>
                <div className='pb-2'>
                  <span className='fw-600'>Strassenverkehrsamt</span>
                </div>
                <div className="">
                  <div className="row g-3">
                    <div className="col">
                      <div className="row g-0 stepsFormInputs rightBorderDiv">
                        <div className="col">
                          <input name="ninthStepInput" onChange={(e) => { props.setNinthStepInputs(e.target.value) }} defaultValue={props.ninthStepInputs[4]} type="number" my={"month"} className='w-100 borderRightInput' />
                        </div>
                        <div className="col-auto my-auto">
                          <div className='px-2'>
                            <span className='text-dark'>CHF</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type='button' className='stepsNextBtn' onClick={(e) => changeMY(e)}>M/Y</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pb-5 col-12 col-md-6 mt-auto'>
                <div className='pb-2'>
                  <span className='fw-600'>Velo, Kleinfahrzeuge</span>
                </div>
                <div className="">
                  <div className="row g-3">
                    <div className="col">
                      <div className="row g-0 stepsFormInputs rightBorderDiv">
                        <div className="col">
                          <input name="ninthStepInput" onChange={(e) => { props.setNinthStepInputs(e.target.value) }} defaultValue={props.ninthStepInputs[4]} type="number" my={"month"} className='w-100 borderRightInput' />
                        </div>
                        <div className="col-auto my-auto">
                          <div className='px-2'>
                            <span className='text-dark'>CHF</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type='button' className='stepsNextBtn' onClick={(e) => changeMY(e)}>M/Y</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pb-5 col-12 col-md-6 mt-auto'>
                <div className='pb-2'>
                  <span className='fw-600'>ÖV, Abos</span>
                </div>
                <div className="">
                  <div className="row g-3">
                    <div className="col">
                      <div className="row g-0 stepsFormInputs rightBorderDiv">
                        <div className="col">
                          <input name="ninthStepInput" onChange={(e) => { props.setNinthStepInputs(e.target.value) }} defaultValue={props.ninthStepInputs[4]} type="number" my={"month"} className='w-100 borderRightInput' />
                        </div>
                        <div className="col-auto my-auto">
                          <div className='px-2'>
                            <span className='text-dark'>CHF</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type='button' className='stepsNextBtn' onClick={(e) => changeMY(e)}>M/Y</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row g-3'>
              <div className="col-6">
                <button className='stepsNextBtn' onClick={props.toPrev}>Zurück</button>
              </div>
              <div className="col-6">
                <button className='stepsNextBtn'>Weiter</button>
              </div>
            </div>

          </div>
        </div >
      </form>
    </div>
  )
}

export default NinthStep