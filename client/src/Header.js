import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import "./assets/css/header.css"
import logo from './assets/images/logo.svg';
import { useEffect, useState } from 'react';

function Header() {
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

    const [show, setShow] = useState(false)

    const controlNavbar = () => {
        if (window.scrollY > 20) {
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
        <div>
            <div className='nav fixed-top justify-content-center'>

                <div className={`nav-container px-0 ${show && 'navBg'}`}>
                    <div className="container-xl row g-0 px-4 px-xl-0">
                        <div className='navLogo col-6 col-md text-start'>
                            <div className="row g-0">
                                <div className="col-auto my-auto">
                                    <img src={logo} alt='companyLogo' className='' />
                                </div>

                                <div className='text-end my-auto col'>
                                    <span className="navlinksondesktop">
                                        <Link to='/' id="linksss" className='text-decoration-none navLinks'>
                                            Home
                                        </Link>
                                        <Link to='/' id="linksss" className='text-decoration-none navLinks' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                                            Versicherungen
                                            {isShown && (
                                                <div className='navbarDropdownsWrap' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                                                    <div className='navbarDropdowns' >
                                                        <div className='pb-3'>
                                                            <Link to='/Krankenkasse' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Krankenkasse
                                                            </Link>
                                                        </div>
                                                        <div className='pb-3'>
                                                            <Link to='/' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Rechtsschutz
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <Link to='/' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Auto & Motorrad
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Link>

                                        <Link to='/' id="linksss" className='text-decoration-none navLinks' onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}>
                                            Finanzen
                                            {isShown1 && (
                                                <div className='navbarDropdownsWrap' onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}>
                                                    <div className='navbarDropdowns' >
                                                        <div className='pb-3'>
                                                            <Link to='/' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Pensionsplanung und Ruhestand
                                                            </Link>
                                                        </div>
                                                        <div className='pb-3'>
                                                            <Link to='/' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Haus & Hypothek
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <Link to='/' id="linksss" className='text-decoration-none navLinks px-3'>
                                                                Finanzen & Budget
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            )}
                                        </Link>
                                        <Link to='/' id="linksss" className='text-decoration-none navLinks'>
                                            Wettbewerbe
                                        </Link>
                                        <Link to='/' id="linksss" className='text-decoration-none navLinks'>
                                            Über uns
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto my-auto">
                            <div className={`navTabs ${toggleMenu && 'navTabsOpen'}`}>
                                <span className='buttonofmenutabs'>
                                    <Button id="buttonofnavbar" variant="outline-danger">360° Budgetanalyse</Button>
                                </span>


                                <div className='row gx-0 gy-4 navTabsRow'>
                                    <div className="col-12">
                                        <Link to='/' id="linksss" className='text-decoration-none navLinks'>
                                            Home
                                        </Link>
                                    </div>
                                    <div className="col-12">
                                        <Link to='/' id="linksss" className='text-decoration-none navLinks'>
                                            Versicherungen
                                        </Link>
                                    </div>
                                    <div className="col-12">
                                        <Link to='/' id="linksss" className='text-decoration-none navLinks'>
                                            Finanzen
                                        </Link>
                                    </div>
                                    <div className="col-12">
                                        <Link to='/' id="linksss" className='text-decoration-none navLinks'>
                                            Wettbewerbe
                                        </Link>
                                    </div>
                                    <div className="col-12">
                                        <Link to='/' id="linksss" className='text-decoration-none navLinks'>
                                            Über uns
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {(screenWidth < 991.98) && (

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
        </div>
    )
}

export default Header