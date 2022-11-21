import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import "./assets/css/header.css"
import logo from './assets/images/logo.svg';
import { useEffect, useState } from 'react';

function Header(props) {
    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
        if (!toggleMenu) {
            document.body.style.overflowY = "hidden"
        }
        else {
            document.body.style.overflowY = "auto"
        }
    }
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    const [show, setShow] = useState(true)

    const controlNavbar = () => {
        if (window.scrollY >= 0) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    const [isShown, setIsShown] = useState(false);
    const [isShown1, setIsShown1] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }

    }, [])
    return (
        <>
            <div className='nav fixed-top justify-content-center'>

                <div className={`nav-container px-0 ${show && 'navBg'}`}>
                    <div className="container-xl row g-0 px-4 px-xl-0">
                        <div className='navLogo col-6 col-md text-start'>
                            <div className="row g-0">
                                <div className="col-auto my-auto">
                                    <NavLink style={({ isActive }) => ({
                                        color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                    })} to='/' id="linksss" className='text-decoration-none navLinks'>
                                        <img src={logo} alt='companyLogo' className='' />
                                    </NavLink>
                                </div>

                                <div className='text-end my-auto col'>
                                    <span className="navlinksondesktop">
                                        <NavLink style={({ isActive }) => ({
                                            color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                        })} to='/' id="linksss" className='text-decoration-none navLinks'>
                                            Home
                                        </NavLink>
                                        <span className='position-relative'>
                                            <NavLink onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style={({ isActive }) => ({
                                                color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'), zIndex: 100
                                            })} to='/versicherungen' id="" className='text-decoration-none fw-500 navLinks px-3 position-relative'>
                                                Versicherungen
                                            </NavLink>

                                            {isShown && (
                                                <div className='navbarDropdownsWrap' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                                                    <div className='navbarDropdowns' >
                                                        <div className='pb-3'>
                                                            <NavLink style={({ isActive }) => ({
                                                                color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                            })} to='/versicherungen/krankenkasse' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Krankenkasse
                                                            </NavLink>
                                                        </div>
                                                        <div className='pb-3'>
                                                            <NavLink style={({ isActive }) => ({
                                                                color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                            })} to='/versicherungen/rechtsschutz' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Rechtsschutz
                                                            </NavLink>
                                                        </div>
                                                        <div>
                                                            <NavLink style={({ isActive }) => ({
                                                                color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                            })} to='/versicherungen/auto-motorrad' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Auto & Motorrad
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </span>
                                        <span to='/' id="linksss" className='text-decoration-none navLinks' onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}>
                                            Finanzen
                                            {isShown1 && (
                                                <div className='navbarDropdownsWrap' onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}>
                                                    <div className='navbarDropdowns' >
                                                        <div className='pb-3'>
                                                            <NavLink style={({ isActive }) => ({
                                                                color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                            })} to='/finanzen/pensionsplanung-und-ruhestand' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Pensionsplanung und Ruhestand
                                                            </NavLink>
                                                        </div>
                                                        <div className='pb-3'>
                                                            <NavLink style={({ isActive }) => ({
                                                                color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                            })} to='/finanzen/haus-hypothek' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Haus & Hypothek
                                                            </NavLink>
                                                        </div>
                                                        <div>
                                                            <NavLink style={({ isActive }) => ({
                                                                color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                            })} to='/finanzen/360' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Finanzen & Budget
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>

                                            )}
                                        </span>
                                        <NavLink style={({ isActive }) => ({
                                            color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                        })} to='/wettbewerbe' id="linksss" className='text-decoration-none navLinks'>
                                            Wettbewerbe
                                        </NavLink>
                                        <NavLink style={({ isActive }) => ({
                                            color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                        })} to='/uber-uns' id="linksss" className='text-decoration-none navLinks'>
                                            Über uns
                                        </NavLink>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto my-auto">
                            <div className={`navTabs ${toggleMenu && 'navTabsOpen'}`}>
                                <NavLink style={({ isActive }) => ({
                                    color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                })} to='/plus' className='buttonofmenutabs hideNavBtn'>
                                    <Button onClick={() => { setToggleMenu(false) }} id="buttonofnavbar" className="px-5" variant="outline-danger">Finanu Plus </Button>
                                </NavLink>

                                <div className='row gx-0 gy-4 navTabsRow' onClick={toggleNav}>
                                    <div className="col-12">
                                        <NavLink style={({ isActive }) => ({
                                            color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                        })} to='/' id="linksss" className='text-decoration-none navLinks'>
                                            Home
                                        </NavLink>
                                    </div>
                                    <div className="col-12">
                                        <NavLink style={({ isActive }) => ({
                                            color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                        })} to='/versicherungen' id="linksss" className='text-decoration-none navLinks'>
                                            Versicherungen
                                        </NavLink>
                                        {/* {isShown1 && ( */}
                                        <div className='pt-2'>
                                            <div className='pb-2'>
                                                <NavLink style={({ isActive }) => ({
                                                    color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                })} to='/versicherungen/krankenkasse' className='text-decoration-none navLinks fs-5'>Krankenkasse </NavLink>
                                            </div>
                                            <div className='pb-2'>
                                                <NavLink style={({ isActive }) => ({
                                                    color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                })} to='/versicherungen/rechtsschutz' className='text-decoration-none navLinks fs-5'>Rechtsschutz </NavLink>
                                            </div>
                                            <div>
                                                <NavLink style={({ isActive }) => ({
                                                    color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                })} to='/versicherungen/auto-motorrad' className='text-decoration-none navLinks fs-5'>Auto & Motorrad </NavLink>
                                            </div>
                                        </div>
                                        {/* )} */}
                                    </div>
                                    <div className="col-12">
                                        <span id="linksss" onClick={(e) => { e.stopPropagation() }} className='text-decoration-none navLinks'>
                                            Finanzen
                                        </span>
                                        {/* {isShown && ( */}
                                        <div className='pt-2'>
                                            <div className='pb-2'>
                                                <NavLink style={({ isActive }) => ({
                                                    color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                })} to='/finanzen/pensionsplanung-und-ruhestand' className='text-decoration-none navLinks fs-5'>Pensionsplanung und Ruhestand </NavLink>
                                            </div>
                                            <div className='pb-2'>
                                                <NavLink style={({ isActive }) => ({
                                                    color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                })} to='/finanzen/haus-hypothek' className='text-decoration-none navLinks fs-5'>Haus & Hypothek </NavLink>
                                            </div>
                                            <div>
                                                <NavLink style={({ isActive }) => ({
                                                    color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                                })} to='/finanzen/360' className='text-decoration-none navLinks fs-5'>Finanzen & Budget </NavLink>
                                            </div>
                                        </div>
                                        {/* )} */}
                                    </div>
                                    <div className="col-12">
                                        <NavLink style={({ isActive }) => ({
                                            color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                        })} to='/wettbewerbe' id="linksss" className='text-decoration-none navLinks'>
                                            Wettbewerbe
                                        </NavLink>
                                    </div>
                                    <div className="col-12">
                                        <NavLink style={({ isActive }) => ({
                                            color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                        })} to='/uber-uns' id="linksss" className='text-decoration-none navLinks'>
                                            Über uns
                                        </NavLink>
                                    </div>
                                    <div className="col-12">
                                        <NavLink style={({ isActive }) => ({
                                            color: isActive ? '#50B8E7' : (props.darkMode ? '#fff' : '#000'),
                                        })} to='/plus' className=''>
                                            <Button onClick={() => { setToggleMenu(false) }} id="buttonofnavbar" className="px-5 py-1" variant="outline-danger">Finanu Plus </Button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {(screenWidth < 1099.98) && (

                            <div className='col-6 my-auto text-end burgerCol'>
                                <button onClick={toggleNav} className={`my-auto ${toggleMenu && 'open'}`} id="nav-icon1" type="button">
                                    <span className={`${toggleMenu && 'colorofopenburger'}`}></span>
                                    <span className={`${toggleMenu && 'colorofopenburger'}`}></span>
                                    <span className={`${toggleMenu && 'colorofopenburger'}`}></span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header