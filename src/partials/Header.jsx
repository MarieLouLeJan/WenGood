import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/wenGood/logo.png';
import Scroll from 'react-scroll';
import ConnectWallet from './ConnectWallet';


function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  const navHome = [
    "Mission",
    "Roadmap",
    "Team",
    "Mintpass"
  ]

  const navRapport = [
    "NFT",
    "Gaming",
    "Infrastructure"
  ]

  const location = useLocation();

  const logoLocation = () => {
    if (location.pathname === '/home') {
      return (
        <Scroll.Link className="flex hover:cursor-pointer" to='wengood' spy={true} smooth={true} offset={-200} duration={500} delay={100} >
          <img src={logo} className='w-14 h-16' alt="wengood" />
          <div className='my-auto text-center'>
            <h4 className='h4 text-sm tracking-widest'>WEN GOOD </h4>
            <h3 className='h4 text-xs tracking-widest'>PROJECT</h3>
          </div>
        </Scroll.Link>
      )
    } else if (location.pathname !== '/home') {
      return (
        <Link to="/home" className="flex hover:cursor-pointer ">
          <img src={logo} className='w-14 h-16' alt="wengood" />
          <div className='my-auto text-center'>
            <h4 className='h4 text-sm tracking-widest'>WEN GOOD </h4>
            <h3 className='h4 text-xs tracking-widest'>PROJECT</h3>
          </div>
        </Link>
      )
    }
  }

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });


  return (
    <header className="w-full z-30 fixed bg-bg-200"  data-aos="fade-up">
      <div className="mx-auto pb:1 py-6 md:py-8 lg:py-8 px-4 sm:px-6">
        <div className="flex items-center justify-between h-6 md:h-15 md:mr-6">

          <div className="shrink-0 mr-4">
            {logoLocation()}
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Home menu links */}
            { location.pathname === '/home' && (
              <ul className="flex grow justify-end flex-wrap items-center">
                { navHome.map((elem, i) => {
                  return (
                    <li key={i}>
                      <Scroll.Link to={elem} spy={true} smooth={true} offset={-120} duration={500} delay={100}  className="md:hover:text-blue-100 hover:cursor-pointer lg:px-4 py-2items-center transition duration-150 ease-in-out text-lg  md:px-2" activeClass="underline underline-offset-8 text-blue-200 font-bold"> 
                        {elem}
                      </Scroll.Link>
                    </li>
                  )
                })}
                <li>
                  <Link to="/rapports" className="text-lg md:hover:text-blue-100 px-4 py-2 flex items-center transition duratioease-in-out">Rapports</Link>
                </li>
              </ul>
            ) }

            {/* Rapport menu links */}
            { location.pathname !== '/home' && (
              <ul className="flex grow justify-end flex-wrap items-center">
                { navHome.map((elem, i) => {
                  return (
                    <li key={i}>
                      <Link to='/home' className="md:hover:text-blue-100 hover:cursor-pointer lg:px-4 py-2items-center transition duration-150 ease-in-out text-lg md:px-2"> 
                        {elem}
                      </Link>
                    </li>
                  )
                })}
                <li>
                  <Link to='/rapports'className={`hover:cursor-pointer md:hover:text-blue-100 lg:px-4 py-2items-center transition duration-150 ease-in-out text-lg md:px-2 ${location.pathname === '/rapports' && 'text-blue-100 underline underline-offset-8'} `}>
                        Rapports
                  </Link>
                 </li>
              </ul>
            ) }

            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <ConnectWallet/>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 md:hover:text-gray-200 transition duration-150 ease-in-out text-blue-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out " style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>

              { location.pathname === '/home' && (
              <ul className="bg-bg-200 px-4 py-4 text-center">
                { navHome.map((elem, i) => {
                  return (
                    <li key={i}>
                      <Scroll.Link to={elem} spy={true} smooth={true} offset={-90} duration={700} delay={200}  className="md:hover:text-blue-100 hover:cursor-pointer text-lg" activeClass="underline underline-offset-8 text-blue-100" onClick={() => setMobileNavOpen(!mobileNavOpen)}> 
                        {elem}
                      </Scroll.Link>
                    </li>
                  )
                })}
                <li>
                  <Link to="/rapports" className="text-lg md:hover:text-blue-100" onClick={() => setMobileNavOpen(!mobileNavOpen)}>Rapports</Link>
                </li>
                <li>
                  <ConnectWallet onClick={() => setMobileNavOpen(!mobileNavOpen)}/>
                </li>
              </ul>
            ) }

            { location.pathname !== '/home' && (
              <ul className="bg-bg-200 px-4 py-4 text-center">
                { navHome.map((elem, i) => {
                  return (
                    <li key={i}>
                      <Link to='/home' className="md:hover:text-blue-100 hover:cursor-pointer lg:px-4 py-2items-center transition duration-150 ease-in-out text-lg md:px-2"> 
                        {elem}
                      </Link>
                    </li>
                  )
                })}
                <li>
                  <Link to='/rapports'className={`hover:cursor-pointer md:hover:text-blue-100 lg:px-4 py-2items-center transition duration-150 ease-in-out text-lg md:px-2 ${location.pathname === '/rapports' && 'text-blue-100 underline underline-offset-8'} `} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                        Rapports
                  </Link>
                 </li>
                 <li>
                  <ConnectWallet onClick={() => setMobileNavOpen(!mobileNavOpen)}/>
                </li>
              </ul>
            ) }
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
