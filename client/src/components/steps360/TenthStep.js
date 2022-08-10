import React from 'react'

function TenthStep(props) {
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
  const handleEightthStep = (e) => {
    e.preventDefault()
    const value = []

    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].name === 'eightthStepInput') {
        value.push(parseInt(e.target[i].value))
      }
    }

    props.setTenthStepInputs(value)
    props.toNext()
  }
  return (
    <div>
      <form className='m-0' onSubmit={handleEightthStep}>
        <div className="col-12 col-sm-9 col-md-12 col-lg-9 col-xl-6 stepsBlueDiv px-4 px-sm-5 pb-5 pt-4 mx-auto">
          <div className='pb-4'>
            <span className='fs-4 fw-800'>Erholung, Hobbys</span>
          </div>
          <div className='text-start'>
            <div className="row gx-4 gy-0">
              <div className='pb-5 col-12 col-md-6 mt-auto'>
                <div className='pb-2'>
                  <span className='fw-600'>Ferien/Ausflüge </span>
                </div>
                <div className="">
                  <div className="row g-3">
                    <div className="col">
                      <div className="row g-0 stepsFormInputs rightBorderDiv">
                        <div className="col">
                          <input name="eightthStepInput" onChange={(e) => { props.setTenthStepInputs(e.target.value) }} defaultValue={props.tenthStepInputs[0]} type="number" my={"month"} className='w-100 borderRightInput' />
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
                  <span className='fw-600'>Restaurant, Kino, Konzerte, Bücher</span>
                </div>
                <div className="">
                  <div className="row g-3">
                    <div className="col">
                      <div className="row g-0 stepsFormInputs rightBorderDiv">
                        <div className="col">
                          <input name="eightthStepInput" onChange={(e) => { props.setTenthStepInputs(e.target.value) }} defaultValue={props.tenthStepInputs[1]} type="number" my={"month"} className='w-100 borderRightInput' />
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
                  <span className='fw-600'>Sport, Bildung, Kurse</span>
                </div>
                <div className="">
                  <div className="row g-3">
                    <div className="col">
                      <div className="row g-0 stepsFormInputs rightBorderDiv">
                        <div className="col">
                          <input name="eightthStepInput" onChange={(e) => { props.setTenthStepInputs(e.target.value) }} defaultValue={props.tenthStepInputs[2]} type="number" my={"month"} className='w-100 borderRightInput' />
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
                  <span className='fw-600'>Waren, Dienstleistung </span>
                </div>
                <div className="">
                  <div className="row g-3">
                    <div className="col">
                      <div className="row g-0 stepsFormInputs rightBorderDiv">
                        <div className="col">
                          <input name="eightthStepInput" onChange={(e) => { props.setTenthStepInputs(e.target.value) }} defaultValue={props.tenthStepInputs[3]} type="number" my={"month"} className='w-100 borderRightInput' />
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

export default TenthStep