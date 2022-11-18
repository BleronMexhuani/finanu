import React from 'react'
import Logo from '../../assets/images/versicherungen/swicaLogo.png'
import { NavLink, Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import Photo1 from '../../assets/images/versicherungen/swicaPic1.png'
import Photo2 from '../../assets/images/versicherungen/swicaPic2.png'
import Photo3 from '../../assets/images/versicherungen/swicaPic3.png'
import Photo4 from '../../assets/images/versicherungen/swicaLaptop.png'
import Video from '../../assets/images/versicherungen/swicaVid.mp4'
function Swica() {
    return (
        <>
            <div className='pt-5 bodyCounterPadding'>
                <div className='swicaBackground'>
                    <div className='positionAbsoluteVid'>
                        <video autoPlay muted loop>
                            <source src={Video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="swicaLogoDiv">
                        <img src={Logo} alt="" />
                    </div>
                    <div className='container-xl px-4 px-xl-0 py-5 h-100'>
                        <div className="d-flex h-100 flex-column justify-content-between text-start">
                            <div className='col-auto'>
                                <div className='pb-3'>
                                    <span className='fw-800 fs-3 text-light'>Gesundheit fördern und begleiten</span>
                                </div>
                                <div>
                                    <span className='text-light'>Die Swica Krankenkasse zeichnet sich regelmässig durch eine besonders<br></br> hohe Kundenzufriedenheit aus. <br></br>Das liegt unter anderem an den grosszügigen Services, die Versicherte geniessen.</span>
                                </div>
                            </div>
                            <div className='col-auto'>
                                <div className='pb-3'>

                                    <div className="row g-1">
                                        <div className="col-auto">
                                            <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="21" height="2" rx="1" fill="#179F96" />
                                            </svg>
                                        </div>
                                        <div className="col">
                                            <span className='fw-500 text-light'>Die Nr. 1 im Krankenkassenvergleich</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className='swicaBtn'>
                                        Prämienrechner
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding'>
                <div className=''>
                    <div className='text-center pb-5'>
                        <div className='pb-2'>
                            <span style={{ color: "#179F96" }} className='fs-3 fw-800'>Unser Angebot</span>
                        </div>
                        <div>
                            <span className='fw-800 normalTextToWhite'>
                                Prämien berechnen, Rechnungen einreichen oder persönliche Daten anpassen.
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="row g-4 justify-content-center">
                            <div className="col-12 col-sm-6 col-md-3">
                                <NavLink to='/versicherungen/krankenkasse' className='text-decoration-none text-dark'>
                                    <div className='servicesBorderDivSwica p-4 p-lg-5'>
                                        <div className="pb-4">
                                            <svg width="35" height="47" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M31.8742 0H3.12581C1.39948 0 0 1.38905 0 3.10251V43.8975C0 45.6109 1.39948 47 3.12581 47H31.8742C33.6005 47 35 45.6109 35 43.8975V3.10251C35 1.38905 33.6005 0 31.8742 0ZM4.96218 35.108V30.6945C4.96218 30.3419 5.2501 30.0561 5.60535 30.0561H10.052C10.4072 30.0561 10.6952 30.3419 10.6952 30.6945V35.108C10.6952 35.4606 10.4072 35.7464 10.052 35.7464H5.60535C5.2501 35.7464 4.96218 35.4605 4.96218 35.108ZM4.96218 26.2188V21.8053C4.96218 21.4527 5.2501 21.167 5.60535 21.167H10.052C10.4072 21.167 10.6952 21.4527 10.6952 21.8053V26.2188C10.6952 26.5714 10.4072 26.8572 10.052 26.8572H5.60535C5.2501 26.8572 4.96218 26.5713 4.96218 26.2188ZM25.6211 43.0152H9.37887C8.24178 43.0152 7.32004 42.1003 7.32004 40.9717C7.32004 39.8431 8.24178 38.9283 9.37887 38.9283H25.6211C26.7582 38.9283 27.68 39.8431 27.68 40.9717C27.68 42.1003 26.7582 43.0152 25.6211 43.0152ZM15.2767 30.056H19.7233C20.0786 30.056 20.3665 30.3418 20.3665 30.6944V35.1079C20.3665 35.4605 20.0786 35.7463 19.7233 35.7463H15.2767C14.9214 35.7463 14.6335 35.4605 14.6335 35.1079V30.6944C14.6335 30.3419 14.9214 30.056 15.2767 30.056ZM14.6335 26.2188V21.8053C14.6335 21.4527 14.9214 21.167 15.2767 21.167H19.7233C20.0786 21.167 20.3665 21.4527 20.3665 21.8053V26.2188C20.3665 26.5714 20.0786 26.8572 19.7233 26.8572H15.2767C14.9214 26.8572 14.6335 26.5713 14.6335 26.2188ZM29.3946 35.7464H24.948C24.5927 35.7464 24.3048 35.4606 24.3048 35.108V30.6945C24.3048 30.3419 24.5927 30.0561 24.948 30.0561H29.3946C29.7499 30.0561 30.0378 30.3419 30.0378 30.6945V35.108C30.0378 35.4606 29.7499 35.7464 29.3946 35.7464ZM29.3946 26.8572H24.948C24.5927 26.8572 24.3048 26.5714 24.3048 26.2188V21.8053C24.3048 21.4527 24.5927 21.167 24.948 21.167H29.3946C29.7499 21.167 30.0378 21.4527 30.0378 21.8053V26.2188C30.0378 26.5714 29.7499 26.8572 29.3946 26.8572ZM30.2647 15.289C30.2647 16.4945 29.2801 17.4717 28.0656 17.4717H6.93453C5.71993 17.4717 4.73529 16.4944 4.73529 15.289V6.37187C4.73529 5.16642 5.71993 4.18913 6.93453 4.18913H28.0656C29.2801 4.18913 30.2647 5.16642 30.2647 6.37187V15.289Z" fill="#8F85BA" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className='fw-800 '>Prämien berechnen</span>
                                        </div>
                                    </div>
                                </NavLink>

                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                {/* <Link rel="noreferrer" className='text-decoration-none text-dark' target='_blank' href='https://www.sympany.ch/de/privatkunden/wissenswertes/einmaleins/bezahlen-einsenden.html'> */}
                                <div className='servicesBorderDivSwica p-4 p-lg-5'>
                                    <div className="pb-4">
                                        <svg width="35" height="48" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.83333 0C2.61589 0 0 2.69063 0 6V42C0 45.3094 2.61589 48 5.83333 48H29.1667C32.3841 48 35 45.3094 35 42V15H23.3333C21.7201 15 20.4167 13.6594 20.4167 12V0H5.83333ZM23.3333 0V12H35L23.3333 0ZM10.2083 24H24.7917C25.5938 24 26.25 24.675 26.25 25.5C26.25 26.325 25.5938 27 24.7917 27H10.2083C9.40625 27 8.75 26.325 8.75 25.5C8.75 24.675 9.40625 24 10.2083 24ZM10.2083 30H24.7917C25.5938 30 26.25 30.675 26.25 31.5C26.25 32.325 25.5938 33 24.7917 33H10.2083C9.40625 33 8.75 32.325 8.75 31.5C8.75 30.675 9.40625 30 10.2083 30ZM10.2083 36H24.7917C25.5938 36 26.25 36.675 26.25 37.5C26.25 38.325 25.5938 39 24.7917 39H10.2083C9.40625 39 8.75 38.325 8.75 37.5C8.75 36.675 9.40625 36 10.2083 36Z" fill="#8F85BA" />
                                        </svg>

                                    </div>
                                    <div>
                                        <span className='fw-800 '>Rechnungen einreichen</span>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                {/* <Link rel="noreferrer" className='text-decoration-none text-dark' target='_blank' href='https://www.sympany.ch/de/privatkunden/wissenswertes/einmaleins/bezahlen-einsenden.html'> */}

                                <div className='servicesBorderDivSwica p-4 p-lg-5'>
                                    <div className="pb-4">
                                        <svg width="35" height="48" viewBox="0 0 33 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 37V52" stroke="#8F85BA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16.5 31C25.0604 31 32 24.2843 32 16C32 7.71573 25.0604 1 16.5 1C7.93959 1 1 7.71573 1 16C1 24.2843 7.93959 31 16.5 31Z" fill="#8F85BA" stroke="#8F85BA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>


                                    </div>
                                    <div>
                                        <span className='fw-800 '>Adresse ändern</span>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="pb-4">
                    <span className='finanuSubTitle fw-800'>Swica Grundversicherung
                    </span>
                </div>
                <div className='pb-3'>
                    <span className='fw-500 normalTextToWhite'>
                        In der obligatorischen Grundversicherung bietet Swica die klassischen Modelle bezüglich der Arztwahl an. Folgende Tarife stehen zur Auswahl:

                    </span>
                </div>
                <div className='fw-500 normalTextToWhite'>
                    <div>
                        <span className='fw-700'>
                            Standard/Sana:
                        </span>
                        <span>
                            Freie Arztwahl
                        </span>
                    </div>
                    <div>
                        <span className='fw-700'>
                            Casa/Medicasa:
                        </span>
                        <span>
                            Ersteinschätzung durch Hausarzt; bis 16,5 % Rabatt
                        </span>
                    </div>
                    <div>
                        <span className='fw-700'>
                            Medica:
                        </span>
                        <span>
                            Freie Arztwahl aus Ärzteliste; bis zu 13 % Rabatt
                        </span>
                    </div>
                    <div>
                        <span className='fw-700'>
                            Medpharm:
                        </span>
                        <span>
                            Ersteinschätzung durch Swica Partnerapotheke oder Videosprechstunde; bis zu 23,5 % Rabatt
                        </span>
                    </div>
                    <div>
                        <span className='fw-700'>
                            Multichoice:
                        </span>
                        <span>
                            Ersteinschätzung durch Swica Partnerapotheke, Videosprechstunde oder App; bis zu 20 % Rabatt
                        </span>
                    </div>
                    <div>
                        <span className='fw-700'>
                            Sante/HMO:
                        </span>
                        <span>
                            Ersteinschätzung durch Swica-Partnerpraxis; bis 22,5 % Rabatt
                        </span>
                    </div>
                    <div>
                        <span className='fw-700'>
                            Telmed:
                        </span>
                        <span>
                            Ersteinschätzung durch Videosprechstunde; bis 11 % Rabatt
                        </span>
                    </div>
                </div>
            </div> */}
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className='pb-4 text-center px-0 px-lg-5'>
                    <div className='pb-3'>
                        <span className='firstBlueTitle normalTextToWhite'>Attraktive Modelle der Grund­versicherung</span>
                    </div>
                    <div className=''>
                        <span>Die obligatorische Krankenversicherung deckt die grundlegenden Bedürfnisse bei Krankheit, Unfall und Mutterschaft ab. Mit den sechs alternativen Versicherungsmodellen von SWICA und PROVITA profitieren Sie vom besten Preis-Leistungs-Verhältnis und sparen bis zu mehreren hundert Franken pro Jahr. Der einzige Unterschied zur klassischen Grundversicherung «STANDARD» liegt in der Wahl der Anlaufstelle. Der Leistungsumfang bleibt identisch.</span>
                    </div>
                </div>

                <div className="swc-text has-text-left swc-text--has-background">
                    <p className='finanuSubTitle fw-800'>Modelle der Grundversicherung von SWICA und PROVITA</p>
                    <ul className="arrow swicaUl">
                        <li>
                            <Link to='/versicherungen/krankenkasse'>CASA / MEDICASA:</Link><strong>
                                <Link to='/versicherungen/krankenkasse'></Link>&nbsp;</strong>Ihr Hausarzt als erste Anlaufstelle

                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>MEDICA:</Link><strong>
                                <Link to='/versicherungen/krankenkasse'></Link>&nbsp;</strong>Freie Wahl aus der Ärzteliste
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>MEDPHARM:</Link>&nbsp;SWICA-Partnerapotheken oder santé24 für eine Ersteinschätzung
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>MULTICHOICE:</Link> BENECURA-App, santé24 oder SWICA-Partnerapotheke für Erstkontakt
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>SANTE / HMO:</Link><strong>
                                <Link to='/versicherungen/krankenkasse'></Link>&nbsp;</strong>SWICA-Partnerpraxen als erste Anlaufstelle
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>TELMED:</Link><strong>
                                <Link to='/versicherungen/krankenkasse'></Link>&nbsp;</strong>Telemedizinische Beratung durch santé24 für eine Ersteinschätzung
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>STANDARD / SANA:</Link> Freie Arztwahl
                        </li>
                    </ul>
                    <br></br>
                    <p className='finanuSubTitle fw-800'>Kostenlose Vorteile für alle SWICA-Versicherten</p>
                    <ul className="arrow swicaUl">
                        <li>
                            <Link to='/versicherungen/krankenkasse'>Alle SWICA-Versicherten profitieren kostenlos von folgenden Services</Link>
                        </li>
                    </ul>
                    <br></br>
                    <Link to='/versicherungen/krankenkasse' className="rte-button">Jetzt Prämie berechnen</Link>

                </div>
            </div>

            {/* <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="pb-4">
                    <span className='finanuSubTitle fw-800'>Swica Zusatzversicherung
                    </span>
                </div>
                <div className='pb-3'>
                    <span className='fw-500 normalTextToWhite'>
                        Für den individuellen Versicherungsschutz können weitere Zusatzversicherungen abgeschlossen werden. Die folgenden Produkte werden angeboten:
                    </span>
                </div>
                <div className='fw-500 normalTextToWhite'>
                    <div>
                        <span className='fw-700'>
                            Hospita:
                        </span>
                        <span>

                            Spitalversicherung in verschiedenen Abstufungen
                        </span>
                    </div>
                    <div>
                        <span className='fw-700'>
                            Completa Top:
                        </span>
                        <span>
                            Ambulante Ergänzungen, beispielsweise Komplementärmedizin
                        </span>
                    </div>
                    <div>
                        <span className='fw-700'>
                            Completa Praeventa:
                        </span>
                        <span>
                            Ambulante Präventionsmassnahmen wie Sportkurse oder Impfungen
                        </span>
                    </div>
                    <div>
                        <span className='fw-700'>
                            Supplementa:
                        </span>
                        <span>
                            Zusatzversicherung für Brillen und Kontaktlinsen
                        </span>
                    </div>
                    <div>
                        <span className='fw-700'>
                            Optima:
                        </span>
                        <span>
                            All-Inclusive-Paket mit Höchstsätzen
                        </span>
                    </div>
                    <div>
                        <span className='fw-700'>
                            Denta:
                        </span>
                        <span>
                            Zahnzusatzversicherung mit verschiedenen Deckungen
                        </span>
                    </div>

                </div>
            </div> */}
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className='pb-4 text-center px-0 px-lg-5'>
                    <div className='pb-3'>
                        <span className='firstBlueTitle normalTextToWhite'>Flexibel und leistungsstark – die Zusatzversiche­rungen von SWICA</span>
                    </div>
                    <div className=''>
                        <span>Alternativmedizin, Fitness, Impfungen, Zähne, Brillen und vieles mehr: Mit den Zusatzversicherungen von SWICA ergänzen Sie Ihre Versicherung nach Ihren individuellen Bedürfnissen und erhalten attraktive Beiträge an Gesundheitsförderungs- und Präventions-Massnahmen.</span>
                    </div>
                </div>
                <div className="swc-text has-text-left swc-text--has-background">
                    <p className='finanuSubTitle fw-800'>Unsere bedürfnisorientierten Zusatzversicherungen</p>
                    <ul className="arrow swicaUl">
                        <li>
                            <Link to='/versicherungen/krankenkasse'>HOSPITA:</Link>&nbsp;Die umfassende Spitalversicherung mit hoher Flexibiliät von halbprivat bis privat weltweit
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>COMPLETA TOP:</Link><strong>
                                <Link to='/versicherungen/krankenkasse'></Link>&nbsp;</strong>Schliesst die Lücken zur obligatorischen Grundversicherung
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>COMPLETA PRAEVENTA:</Link><strong>
                                <Link to='/versicherungen/krankenkasse'></Link>&nbsp;</strong>Bietet attraktive Beiträge an Ihre Gesundheitsförderung
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>SUPPLEMENTA:</Link><strong>
                                <Link to='/versicherungen/krankenkasse'></Link>&nbsp;</strong>Sie profitieren von grosszügigen Beiträgen für Brillen und Kontaktlinsen
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>OPTIMA:</Link>&nbsp;Maximale Beiträge an Sehhilfen, Gesundheitsförderung und Auslandsbehandlungen
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>Zahnversicherung DENTA:</Link><strong>
                                <Link to='/versicherungen/krankenkasse'></Link>&nbsp;</strong>Bietet attraktive Beiträge an Zahnbehandlungen und Dentalhygiene
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>Unfallversicherung INFORTUNA:</Link> Ihre weltweite Privatpatientenversicherung bei Unfall
                        </li>
                        <li>
                            <Link to='/versicherungen/krankenkasse'>Exklusive SWICA-Services bei den Zusatzversicherungen</Link>
                        </li>
                    </ul> <br></br>
                    <Link to='/versicherungen/krankenkasse' className="rte-button">Jetzt Prämie berechnen</Link>
                </div>
            </div>

            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="pb-4">
                    <span className='finanuSubTitle fw-800'>Besondere Leistungen
                    </span>
                </div>
                <div>

                    <div className="pb-3">
                        <span className='fw-500 normalTextToWhite'>
                            Swica zeichnet sich durch besonders kundenfreundliche Arbeitszeiten aus. So ist eine Beratung unter der Woche bis 21.30 Uhr möglich, für Versicherte stehen Experten rund um die Uhr zur Verfügung. Neben der erstklassigen medizinischen Versorgung locken Challenges in der App der Versicherungsgesellschaft. Dabei wird ein gesunder Lebensstil mit Auszeichnungen belohnt, die in Prämienrabatte oder Angebote umgewandelt werden können.
                        </span>
                    </div>
                    <div className="pb-3">
                        <span className='fw-500 normalTextToWhite'>
                            Sie interessieren sich für eine Versicherung bei der Swica? Dann lassen Sie uns jetzt Ihr unverbindliches Angebot berechnen!
                        </span>
                    </div>

                </div>
            </div>
            
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <Accordion defaultActiveKey="0" className='borderTopAcc'>
                    <Accordion.Item eventKey="0" className='swicaAccItem'>
                        <Accordion.Header>
                            <div className="row g-3">
                                <div className="col-auto">
                                    <svg className='swicaAccSvg' width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.8346 1.25L8.8763 18.2083L1.16797 10.5" stroke="#5E5E5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className="col">
                                    <div>
                                        <span className='benefitsSpan fw-500'>Persönlicher Kundenservice rund um die Uhr</span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='fw-500'>
                                <span>
                                    Die Mitarbeitenden unseres Kundendienstes stehen Ihnen in über 56 Standorten in der Schweiz zur Verfügung. Unser telefonischer Kundenservice 7x24 ist auch nach Büroschluss und am Wochenende für Sie da.
                                    Gratisnummer <span className='benefitsSpan'>0800 80 90 83</span>
                                </span>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='swicaAccItem'>
                        <Accordion.Header>
                            <div className="row g-3">
                                <div className="col-auto">
                                    <svg className='swicaAccSvg' width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.8346 1.25L8.8763 18.2083L1.16797 10.5" stroke="#5E5E5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className="col">
                                    <div>
                                        <span className='benefitsSpan fw-500'>Kostenlose telemedizinische Beratung 7x24</span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='fw-500'>
                                <span>
                                    365 Tage im Jahr, rund um die Uhr: Die Ärztinnen und Ärzte sowie das medizinische Fachpersonal vom telemedizinischen Dienst santé24 stehen Ihnen bei allen Fragen zu Prävention, Krankheit, Unfall und Mutterschaft zur Verfügung. Denn Unwohlsein, Schmerzen oder Krankheit halten sich nicht an Öffnungszeiten. Die Beratung ist für SWICA-Versicherte kostenlos. Telefon:
                                    <span className='benefitsSpan'>+41 44 404 86 86</span>
                                </span>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='swicaAccItem'>
                        <Accordion.Header>
                            <div className="row g-3">
                                <div className="col-auto">
                                    <svg className='swicaAccSvg' width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.8346 1.25L8.8763 18.2083L1.16797 10.5" stroke="#5E5E5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className="col">
                                    <div>
                                        <span className='benefitsSpan fw-500'>
                                            Erstklassige medizinische Versorgung</span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='fw-500'>
                                <span>
                                    SWICA sichert dank ihrem Premium-Angebot den schnellen und bevorzugten Zugang zu qualitativ hochstehenden Behandlungen und engagiert sich mit einem breiten Spezialistennetz für den optimalen Genesungsverlauf ihrer Versicherten. Mit santé24 profitieren SWICA-Versicherte ausserdem von kostenlosen telemedizinischen Dienstleistungen.
                                </span>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='swicaAccItem'>
                        <Accordion.Header>
                            <div className="row g-3">
                                <div className="col-auto">
                                    <svg className='swicaAccSvg' width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.8346 1.25L8.8763 18.2083L1.16797 10.5" stroke="#5E5E5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className="col">
                                    <div>
                                        <span className='benefitsSpan fw-500'>
                                            Gleichstellung von Schul- und Komplementärmedizin
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='fw-500'>
                                <div className="pb-4">

                                    <span>
                                        SWICA steht für die Verbindung von Schul- und Komplementärmedizin ein. Gut ist, was der Gesundheit nützt. Deshalb unterstützt SWICA komplementärmedizinische Therapiemethoden und stellt diese der Schulmedizin gleich.
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        Zu den komplementärmedizinischen Therapiemethoden gehören beispielsweise Akupunktur, Aroma- oder Feldenkrais-Therapien, Fango, Schröpfen, Rolfing, Bachblüten- oder ayurvedische Therapien, Biodynamik, Spagyrik, Kneipp, Shiatsu, Qi Gong und viele mehr.
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='swicaAccItem'>
                        <Accordion.Header>
                            <div className="row g-3">
                                <div className="col-auto">
                                    <svg className='swicaAccSvg' width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.8346 1.25L8.8763 18.2083L1.16797 10.5" stroke="#5E5E5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className="col">
                                    <div>
                                        <span className='benefitsSpan fw-500'>
                                            Beiträge an über 100 Angebote für Gesundheitsförderung und Prävention
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='fw-500'>
                                <div>
                                    <span>
                                        SWICA unterstützt über 100 Angebote und Kursen für Gesundheitsförderung und Prävention. In den Vorsorgearten Bewegung, Ernährung, Entspannung und Wohlbefinden (z.B. Fitness, Sportverbände, Tanzkurse, Ernährungsberatung, Achtsamkeitstraining, Bäder und Saunen) belohnt SWICA Ihr gesundes und präventives Verhalten mit attraktiven Beiträgen von bis zu 800 Franken pro Jahr.
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className='swicaAccItem'>
                        <Accordion.Header>
                            <div className="row g-3">
                                <div className="col-auto">
                                    <svg className='swicaAccSvg' width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.8346 1.25L8.8763 18.2083L1.16797 10.5" stroke="#5E5E5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className="col">
                                    <div>
                                        <span className='benefitsSpan fw-500'>
                                            Persönliche Unterstützung bei Krankheit oder Unfall
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='fw-500'>
                                <div className='pb-4'>
                                    <span>
                                        Als Gesundheitspartner ist es SWICA wichtig, Sie in schwierigen Zeiten schnell, kompetent und vor allem persönlich zu unterstützen. Das Angebot reicht von der Begleitung durch erfahrene Care Manager bis hin zu einer zuverlässigen Kinderbetreuung oder Haushaltshilfe im Fall von Krankheit oder Unfall.
                                    </span>
                                </div>
                                <div className='pb-4'>
                                    <span>
                                        Professionelles Care Management: Bei Krankheit und Unfall erhalten Sie persönliche Unterstützung durch erfahrene Care Manager. Diese beraten und unterstützen Sie bei der Wahl der geeigneten Behandlung und entlasten Sie administrativ. Schweizweit sind über 85 SWICA Care Manager für die Kunden im Einsatz.
                                    </span>
                                </div>
                                <div>
                                    <span>Persönlicher Betreuungsservice Home Nanny und Home Attendant: Während eines Spital- oder Kuraufenthalts ist für die persönliche Betreuung Ihres Kindes und des Haushalts gesorgt. SWICA-Versicherte erhalten durch die professionellen Services Home Nanny und Home Attendant Unterstützung.</span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className='swicaAccItem'>
                        <Accordion.Header>
                            <div className="row g-3">
                                <div className="col-auto">
                                    <svg className='swicaAccSvg' width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.8346 1.25L8.8763 18.2083L1.16797 10.5" stroke="#5E5E5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className="col">
                                    <div>
                                        <span className='benefitsSpan fw-500'>
                                            Tiefere Kostenbeteiligung
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='fw-500'>
                                <div>
                                    <span>
                                        SWICA und PROVITA rechnen als einzige Krankenversicherer die Kostenbeteiligung der Grundversicherung an diejenige der SWICA-Zusatzversicherungen an, wodurch die maximale jährliche Kostenbeteiligung im Vergleich zu anderen Krankenversicherern deutlich tiefer liegt.
                                    </span>
                                </div>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className='swicaAccItem'>
                        <Accordion.Header>
                            <div className="row g-3">
                                <div className="col-auto">
                                    <svg className='swicaAccSvg' width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.8346 1.25L8.8763 18.2083L1.16797 10.5" stroke="#5E5E5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className="col">
                                    <div>
                                        <span className='benefitsSpan fw-500'>
                                            Abschlussaltertarif bleibt lebenslang unverändert
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='fw-500'>
                                <div>
                                    <span>
                                        Der SWICA-Abschlussaltertarif berücksichtigt die bisherige Versicherungszeit bei der Berechnung der Prämie und belohnt somit die Kundentreue. So schonen Sie auch im Alter Ihr Portemonnaie und profitieren dennoch von einem optimalen Versicherungsschutz.
                                    </span>
                                </div>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8" className='swicaAccItem'>
                        <Accordion.Header>
                            <div className="row g-3">
                                <div className="col-auto">
                                    <svg className='swicaAccSvg' width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.8346 1.25L8.8763 18.2083L1.16797 10.5" stroke="#5E5E5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>
                                <div className="col">
                                    <div>
                                        <span className='benefitsSpan fw-500'>
                                            BENEVITA: Digitaler Gesundheitscoach mit Bonusprogramm
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='fw-500'>
                                <div>
                                    <span>
                                        Wir unterstützen Sie dabei, Ihren Alltag gesund zu gestalten und belohnen Sie dafür. Sammeln Sie Punkte mit der BENEVITA-App, informieren Sie sich über Gesundheitsthemen und profitieren Sie von attraktiven Angeboten sowie bis zu 15% Rabatt auf die Zusatzversicherungen COMPLETA TOP und HOSPITA.
                                    </span>
                                </div>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-center'>
                <div className='col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 mx-auto'>
                    <div className="">
                        <span style={{ lineHeight: '41px' }} className='normalTextToWhite fw-800 fs-3'>
                            Swica wurde von diversen unabhängigen Testerorganisationen wie dem K-tipp, amPuls und Comparis für deren Kundenservice in höchsten Tönen gelobt.
                        </span>
                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-center'>
                <div className="row g-0 justify-content-center">
                    <div className="col-auto">
                        <img className='img-fluid' src={Photo1} alt="" />
                    </div>
                    <div className="col-auto">
                        <img className='img-fluid' src={Photo2} alt="" />

                    </div>
                    <div className="col-auto">
                        <img className='img-fluid' src={Photo3} alt="" />

                    </div>
                </div>
            </div>
            <div className='wrapDiv container-xl px-4 px-lg-5 bodyCounterPadding text-start'>
                <div className="row g-0">
                    <div className="col order-2 order-md-1">
                        <div className='swicaGreenBg p-4 p-md-5'>
                            <div className='pb-3'>
                                <span className='fw-800 fs-3'>Swica Kontakt & Adresse</span>
                            </div>
                            <div>
                                <span>
                                    SWICA Krankenversicherung AG

                                </span>
                            </div>
                            <div>
                                <span>
                                    Römerstrasse 38
                                </span>
                            </div>
                            <div className='pb-3'>
                                <span>
                                    8400 Winterthur
                                </span>
                            </div>
                            <div className='pb-3'>
                                <span>
                                    Telefon: 052 244 22 33
                                </span>
                            </div>
                            <div className='pb-3'>
                                <span>
                                    BAG-Nr.: 1384

                                </span>
                            </div>
                            <div>
                                <span>
                                    Bei dieser Seite handelt es sich nicht um die offizielle Webseite der Swica Krankenkasse.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-auto order-1 order-md-2">
                        <img src={Photo4} alt="" className='h-100 w-100' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Swica