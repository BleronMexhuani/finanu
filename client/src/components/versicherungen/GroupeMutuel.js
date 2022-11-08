import React from 'react'
import logoofgroupe from '../../assets/images/versicherungen/groupemutuellogo.png'
import { NavLink } from "react-router-dom";

// card photos
import cardphoto1 from '../../assets/images/versicherungen/cardphoto1.png'
import cardphoto2 from '../../assets/images/versicherungen/cardphoto2.png'
import cardphoto3 from '../../assets/images/versicherungen/cardphoto3.png'
import cardphoto4 from '../../assets/images/versicherungen/cardphoto4.png'

// Costumer photo
import Photo1 from '../../assets/images/versicherungen/swicaPic1.png'
import Photo2 from '../../assets/images/versicherungen/swicaPic2.png'
import Photo3 from '../../assets/images/versicherungen/swicaPic3.png'



function GroupeMutuel() {
    return (
        <div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding'>
                <div className='row gx-0 mainrowofgrupemutuel' >
                    <div className='col-12 col-md-auto pe-0 mb-auto mt-5'>
                        <div className='d-flex flex-column align-items-start p-4 p-md-5'>
                            <div className='mt-s'>
                                <img alt='' src={logoofgroupe} />
                            </div>
                            <div className='mt-4 mb-3'>
                                <p className='mb-0'>Gesundheit fördern und begleiten</p>
                            </div>
                            <div className='mt-2'>
                                <button className='buttonofgroupemutuel py-2 px-4'>Prämienrechner</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-12 col-md px-0'>
                        <div className='backgroundimageofgroupemuetel'>

                        </div>
                    </div>

                </div>
            </div>

            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding'>
                <div className=''>
                    <div className='text-center pb-5'>
                        <div className='pb-2'>
                            <span style={{ color: "#183C4A;" }} className='fs-3 fw-800 finanuSubTitle'>SERVICES</span>
                        </div>
                        <div>
                            <span className='subtitleofservicees normalTextToWhite'>
                                Prämien berechnen, Rechnungen einreichen oder persönliche Daten anpassen.
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="row g-4 justify-content-center" style={{ background: "#183C4A", border: "1px solid #F6EFE7", borderRadius: "18px" }}>
                            <div className="col-12 col-sm-6 col-md-3">
                                <NavLink to='/versicherungen/krankenkasse' className='text-decoration-none text-dark'>
                                    <div className=' p-4 p-lg-5'>
                                        <div className="pb-4">
                                            <svg width="35" height="48" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.8742 0H3.12581C1.39948 0 0 1.38905 0 3.10251V43.8975C0 45.6109 1.39948 47 3.12581 47H31.8742C33.6005 47 35 45.6109 35 43.8975V3.10251C35 1.38905 33.6005 0 31.8742 0ZM4.96218 35.108V30.6945C4.96218 30.3419 5.2501 30.0561 5.60535 30.0561H10.052C10.4072 30.0561 10.6952 30.3419 10.6952 30.6945V35.108C10.6952 35.4606 10.4072 35.7464 10.052 35.7464H5.60535C5.2501 35.7464 4.96218 35.4605 4.96218 35.108ZM4.96218 26.2188V21.8053C4.96218 21.4527 5.2501 21.167 5.60535 21.167H10.052C10.4072 21.167 10.6952 21.4527 10.6952 21.8053V26.2188C10.6952 26.5714 10.4072 26.8572 10.052 26.8572H5.60535C5.2501 26.8572 4.96218 26.5713 4.96218 26.2188ZM25.6211 43.0152H9.37887C8.24178 43.0152 7.32004 42.1003 7.32004 40.9717C7.32004 39.8431 8.24178 38.9283 9.37887 38.9283H25.6211C26.7582 38.9283 27.68 39.8431 27.68 40.9717C27.68 42.1003 26.7582 43.0152 25.6211 43.0152ZM15.2767 30.056H19.7233C20.0786 30.056 20.3665 30.3418 20.3665 30.6944V35.1079C20.3665 35.4605 20.0786 35.7463 19.7233 35.7463H15.2767C14.9214 35.7463 14.6335 35.4605 14.6335 35.1079V30.6944C14.6335 30.3419 14.9214 30.056 15.2767 30.056ZM14.6335 26.2188V21.8053C14.6335 21.4527 14.9214 21.167 15.2767 21.167H19.7233C20.0786 21.167 20.3665 21.4527 20.3665 21.8053V26.2188C20.3665 26.5714 20.0786 26.8572 19.7233 26.8572H15.2767C14.9214 26.8572 14.6335 26.5713 14.6335 26.2188ZM29.3946 35.7464H24.948C24.5927 35.7464 24.3048 35.4606 24.3048 35.108V30.6945C24.3048 30.3419 24.5927 30.0561 24.948 30.0561H29.3946C29.7499 30.0561 30.0378 30.3419 30.0378 30.6945V35.108C30.0378 35.4606 29.7499 35.7464 29.3946 35.7464ZM29.3946 26.8572H24.948C24.5927 26.8572 24.3048 26.5714 24.3048 26.2188V21.8053C24.3048 21.4527 24.5927 21.167 24.948 21.167H29.3946C29.7499 21.167 30.0378 21.4527 30.0378 21.8053V26.2188C30.0378 26.5714 29.7499 26.8572 29.3946 26.8572ZM30.2647 15.289C30.2647 16.4945 29.2801 17.4717 28.0656 17.4717H6.93453C5.71993 17.4717 4.73529 16.4944 4.73529 15.289V6.37187C4.73529 5.16642 5.71993 4.18913 6.93453 4.18913H28.0656C29.2801 4.18913 30.2647 5.16642 30.2647 6.37187V15.289Z" fill="#E5AB3B" />
                                            </svg>

                                        </div>
                                        <div>
                                            <span className='fw-800 servicesofgroupe'>Prämien berechnen</span>
                                        </div>
                                    </div>
                                </NavLink>

                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                {/* <a rel="noreferrer" className='text-decoration-none text-dark' target='_blank' href='https://www.sympany.ch/de/privatkunden/wissenswertes/einmaleins/bezahlen-einsenden.html'> */}
                                <div className=' p-4 p-lg-5'>
                                    <div className="pb-4">
                                        <svg width="35" height="48" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.83333 0C2.61589 0 0 2.69063 0 6V42C0 45.3094 2.61589 48 5.83333 48H29.1667C32.3841 48 35 45.3094 35 42V15H23.3333C21.7201 15 20.4167 13.6594 20.4167 12V0H5.83333ZM23.3333 0V12H35L23.3333 0ZM10.2083 24H24.7917C25.5938 24 26.25 24.675 26.25 25.5C26.25 26.325 25.5938 27 24.7917 27H10.2083C9.40625 27 8.75 26.325 8.75 25.5C8.75 24.675 9.40625 24 10.2083 24ZM10.2083 30H24.7917C25.5938 30 26.25 30.675 26.25 31.5C26.25 32.325 25.5938 33 24.7917 33H10.2083C9.40625 33 8.75 32.325 8.75 31.5C8.75 30.675 9.40625 30 10.2083 30ZM10.2083 36H24.7917C25.5938 36 26.25 36.675 26.25 37.5C26.25 38.325 25.5938 39 24.7917 39H10.2083C9.40625 39 8.75 38.325 8.75 37.5C8.75 36.675 9.40625 36 10.2083 36Z" fill="#E5AB3B" />
                                        </svg>

                                    </div>
                                    <div>
                                        <span className='fw-800 servicesofgroupe'>Rechnungen einreichen</span>
                                    </div>
                                </div>
                                {/* </a> */}
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                {/* <a rel="noreferrer" className='text-decoration-none text-dark' target='_blank' href='https://www.sympany.ch/de/privatkunden/wissenswertes/einmaleins/bezahlen-einsenden.html'> */}

                                <div className=' p-4 p-lg-5'>
                                    <div className="pb-4">
                                        <svg width="33" height="48" viewBox="0 0 33 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 37V52" stroke="#E5AB3B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.5 31C25.0604 31 32 24.2843 32 16C32 7.71573 25.0604 1 16.5 1C7.93959 1 1 7.71573 1 16C1 24.2843 7.93959 31 16.5 31Z" fill="#E5AB3B" stroke="#E5AB3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M5 15C5 11.1715 7.2 3.84271 16 5.15534" stroke="#F4F4F4" stroke-linecap="round" />
                                        </svg>




                                    </div>
                                    <div>
                                        <span className='fw-800 servicesofgroupe'>Adresse ändern</span>
                                    </div>
                                </div>
                                {/* </a> */}
                            </div>
                            {/* <div className="col-12 col-sm-6 col-md-3">

                                <div className=' p-4 p-lg-5'>
                                    <div className="pb-4">
                                        <svg width="54" height="48" viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.2085 24.5785L19.3399 42L24.885 41.56C33.0092 29.9415 32.2162 31.3046 36.8926 24.6102L50.9669 24.6102C53.0132 24.6102 54.0222 22.7958 53.9996 21.0006C54.0233 19.2054 53.0132 17.3921 50.9669 17.3921L36.8948 17.3921C32.2185 10.6977 33.0103 12.0596 24.8872 0.441164L19.341 0L26.2096 17.4215C26.2096 17.4215 8.85374 17.374 8.58452 17.4147L4.3188 11.1807H0.973866L3.71926 19.1488V22.8489L0.973866 30.8193H4.31767L8.58339 24.5831C8.85487 24.626 26.2085 24.5785 26.2085 24.5785Z" fill="#E5AB3B" />
                                        </svg>

                                    </div>
                                    <div>
                                        <span className='fw-800 servicesofgroupe'>Reiseversicherung</span>
                                    </div>
                                </div>
                                
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding'>
                <div className='row g-4 g-lg-5'>
                    <div className='col-12 col-md-6'>
                        <div className='maindivofcard d-flex flex-column'>
                            <div><img alt='' className="imagesofcard" src={cardphoto1} /></div>
                            <div className='p-4 p-lg-5'>
                                <div> <span className='titleofcards text-start'>Groupe Mutuel Grundversicherung</span></div>
                                <div>
                                    <span>
                                        <p className='testofcards text-start pt-4 mb-0'>Für die obligatorische Grundversicherung stehen bei der Groupe Mutuel verschiedene Modelle zur Auswahl. Dabei sinkt die Prämie, je mehr sich der Kunde auf die Experten der Krankenkasse verlässt. Konkret gehören folgende Tarife zum Angebot:
                                        </p>
                                        <ul className='listofcards text-start mb-0'>
                                            <li>Standard: Der Kunde hat freie Hand bezüglich der Arztwahl. </li>
                                            <li>Hausarzt: Bei jedem Arztbesuch muss zuvor der Hausarzt konsultiert werden.</li>
                                            <li>Telemedizin: Vor jedem Arztbesuch muss der Expertenrat der Groupe Mutuel eingeholt werden. </li>
                                            <li>Flexibel: Vor Arztbesuchen muss entweder der Hausarzt, eine Partnerapotheke oder ein Experte der Telefon-Hotline konsultiert werden. </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='maindivofcard d-flex flex-column'>
                            <div><img alt='' className="imagesofcard" src={cardphoto2} /></div>
                            <div className='p-4 p-lg-5'>
                                <div> <span className='titleofcards text-start'>Groupe Mutuel Zusatzversicherung</span></div>
                                <div>
                                    <span>
                                        <p className='testofcards text-start pt-4 mb-0'>
                                        Neben den Grundversicherungen bietet die Groupe Mutuel ein umfangreiches Angebot an Zusatzversicherungen, um individuelle Bedürfnisse bestmöglich abzudecken. Konkret können Ergänzungen in den Bereichen:

                                        </p>
                                        <ul className='listofcards text-start mb-0'>
                                            <li className=''>ambulante Behandlungen</li>
                                            <li className=''>Spitalaufenthalte </li>
                                            <li className=''>Auslandsaufenthalte/Reisen</li>
                                            <li className=''>Zahnpflegeleistungen</li>
                                            <li className=''>-	Zusatz bei Unfall</li>
                                            <li className=''>Komplementärmedizin</li>
                                            <li className=''>Taggelder/Renten/Kapitalien</li>

                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='maindivofcard d-flex flex-column'>
                            <div><img alt='' className="imagesofcard" src={cardphoto3} /></div>
                            <div className='p-4 p-lg-5'>
                                <div> <span className='titleofcards text-start'>Besondere Leistungen</span></div>
                                <div>
                                    <span>
                                        <p className='testofcards text-start pt-4 mb-0'>
                                        Die Groupe Mutuel bietet all ihren Versicherten mit dem Vorteilsprogramm "LeClub" zahlreiche Vergünstigungen und Rabatte in den Bereichen Gesundheit und Wellness, Sport, Familie und Freizeit, Tourismus sowie Diverses an. Auch exklusive Gewinnspiele gehören zu den Aktionen des Programms. 
                                            <br></br>
                                            <br></br>
                                            Ausserdem können vor allem Familien von interessanten Angeboten profitieren. So sinkt ab dem dritten Kind der Betrag der Versicherungsprämie, während der Schwangerschaft kann ein umfangreiches Zusatzpaket abgeschlossen werden und die Verwaltung der Versicherungen aller Familienmitglieder soll durch das digitale Kundenportal so einfach wie möglich gehalten werden. 
                                            <br></br>
                                            <br></br>
                                            Sie interessieren sich für eine Versicherung bei der Groupe Mutuel? Dann lassen Sie uns jetzt Ihr unverbindliches Angebot berechnen!
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='maindivofcard d-flex flex-column '>
                            <div><img alt='' className="imagesofcard" src={cardphoto4} /></div>
                            <div className='p-4 p-lg-5'>
                                <div><span className='titleofcards text-start'>Groupe Mutuel Kontakt & Adresse</span></div>
                                <div>
                                    <span>
                                        <p className='testofcards text-start pt-4 mb-0'>
                                            Groupe Mutuel <br></br>
                                            Rue de Cèdres 5 <br></br>
                                            1919 Martigny <br></br>
                                            <br></br><br></br>
                                            Tel. 0848 803 111
                                            <br></br><br></br>
                                            BAG no.: 1479
                                            <br></br><br></br>
                                            This page is not the official website of Groupe Mutuel.
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-center'>
                <div className='col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 mx-auto'>
                    <div className="">
                        <span style={{ lineHeight: '41px' }} className='normalTextToWhite fw-800 firstBlueTitle'>
                            Customer satisfaction after making a claim

                        </span>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-center'>
                <div className="row g-0 justify-content-center">
                    <div className="col-auto">
                        <img alt='' className='img-fluid' src={Photo1} />
                    </div>
                    <div className="col-auto">
                        <img alt='' className='img-fluid' src={Photo2} />

                    </div>
                    <div className="col-auto">
                        <img alt='' className='img-fluid' src={Photo3} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupeMutuel