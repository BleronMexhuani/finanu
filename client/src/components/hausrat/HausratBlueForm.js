import React from 'react'
import { useState, useEffect } from 'react'
import HausratHouse from '../../assets/images/hausratHouse.svg'

function HausratBlueForm() {
    //
    const [interes, setInteres] = useState(1)
    const [aparatament_price, setApartamentPrice] = useState(null);
    const [yearly_income, setYearlyIncome] = useState(null);
    const [capital, setCapital] = useState(null);
    //
    const [zinsen, setZinsen] = useState(null);
    const [amortisation, setAmortisation] = useState(null);
    const [nebenconsten, setNebenconsten] = useState(null);
    const [montaliche, setMontaliche] = useState(null);
    //
    const [hypothek, setHypothek] = useState(null);
    const [eigenmittei, setEigenmittei] = useState(null);
    const [targbarkeit, setTargbarkeit] = useState(null);

    const submitForm = () => {
        if (aparatament_price !== null && capital !== null && yearly_income !== null) {
            let calc_amor = ((((0.333 - (capital / aparatament_price)) * aparatament_price) / 15) / 12);
            let mortgage_1 = 0.6666 * aparatament_price * 0.05;
            let mortgage_2 = 0.1334 * aparatament_price * 0.06;
            let total_interest = mortgage_1 + mortgage_2;
            let other_costs = 0.01 * aparatament_price;
            let tragbarkeit = total_interest + (((0.34 - (capital / aparatament_price)) * aparatament_price) / 15) + other_costs;
            // let mortgage = aparatament_price - capital;

            setZinsen((((aparatament_price - capital) * interes / 100) / 12).toFixed(2));
            setAmortisation(calc_amor < 0 ? 0 : calc_amor.toFixed(2));
            setNebenconsten(((0.01 * aparatament_price) / 12).toFixed(2))
            setHypothek(aparatament_price - capital)
            setEigenmittei((capital / aparatament_price) * 100)
            setTargbarkeit((tragbarkeit / yearly_income * 100).toFixed(2));

        }

    }


    return (
        <>
            <div className='wrapDiv container-xl px-4 px-xl-0 mx-auto'>
                <div className="col-12 col-sm-11 col-md-9 col-lg-8 col-xl-6 hausratBlueDiv mx-auto">
                    <div className='px-4 px-md-5 pt-4 pt-md-5 text-start mx-0 mx-sm-4'>
                        <div className='pb-4'>
                            <div className='pb-2'>
                                <span >Gesamtkaufpreis</span>
                            </div>
                            <div>
                                <input type="number" onChange={(e) => setApartamentPrice(e.target.value)} className='hausratFormInputs' />
                            </div>
                        </div>
                        <div className='pb-4'>
                            <div className='pb-2'>
                                <span >Jährliches Einkommen</span>
                            </div>
                            <div>
                                <input type="number" onChange={(e) => setYearlyIncome(e.target.value)} className='hausratFormInputs' />
                            </div>
                        </div>
                        <div className='pb-4'>
                            <div className='pb-2'>
                                <span >Eigenkapital</span>
                            </div>
                            <div>
                                <input type="number" onChange={(e) => setCapital(e.target.value)} className='hausratFormInputs' />
                            </div>
                        </div>
                        <div className='pb-4'>
                            <div className='pb-2'>
                                <div className="row g-0">
                                    <div className="col">
                                        <span >Angenommener Zinssatz</span>
                                    </div>
                                    <div className="col-auto">
                                        <span>{interes}%</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <input type="range" min={0.4} step={0.05} max={2} onChange={(e) => setInteres(e.target.value)} defaultValue={1} className='hausratRangeInput form-range' />
                            </div>
                        </div>
                        <div>
                            <button type="button" className='hausratBtn py-2 mb-4 w-100' onClick={submitForm} >Submit</button>
                        </div>
                    </div>

                    <div className='hausratHouseDiv'>
                        <img src={HausratHouse} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HausratBlueForm