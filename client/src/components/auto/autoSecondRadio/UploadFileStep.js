import React from 'react'

function UploadFileStep(props) {
    return (
        <div>

            <div className='pb-4'>
                <span className='fw-500 normalTextToWhite'>Bestehende Offerte Fotografieren und als PDF oder als Bilder Hochladen! Wir senden Ihnen im Anschluss mehrere <br></br> Gegenofferten,  bei gleicher Leistung.</span>
            </div>
            <div className="pb-5">
                <label htmlFor="autoFile">
                    <input type="file" id='autoFile' hidden />

                    <div className="row g-2 text-start justify-content-center">
                        <div className="col-auto">
                            <img width={20} src="https://www.finanu.ch/wp-content/uploads/2022/01/uploadIcon-01.png" alt="" />
                        </div>
                        <div className="col-auto">
                            <span className='fw-500 normalTextToWhite'>Upload File</span>
                        </div>
                    </div>
                </label>
            </div>
            <div>
                <button className='autoBtnStyle' onClick={() => { props.setstep(props.step + 1) }}>
                    Weiter
                </button>
            </div>

        </div>

    )
}

export default UploadFileStep