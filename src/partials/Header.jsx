import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/wenGood/logo.png';
import Scroll from 'react-scroll'


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
    if (location.pathname === '/') {
      return (
        <Scroll.Link className="flex hover:cursor-pointer" to='wengood' spy={true} smooth={true} offset={-200} duration={500} delay={100} >
          <img src={logo} className='w-20 h-22' alt="wengood" />
          <div className='my-auto text-center'>
            <h4 className='h4 text-base tracking-widest'>WEN GOOD </h4>
            <h3 className='h4 text-xs tracking-widest'>PROJECT</h3>
          </div>
        </Scroll.Link>
      )
    } else if (location.pathname.includes('/rapports')) {
      return (
        <Link to="/" className="flex hover:cursor-pointer ">
          <img src={logo} className='w-20 h-22' alt="wengood" />
          <div className='my-auto text-center'>
            <h4 className='h4 text-base tracking-widest'>WEN GOOD </h4>
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

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="w-full z-30 fixed bg-gradient-to-r from-bg-200 via-bg-100 to-bg-200">
      <div className=" max-w-8xl mx-auto pb:1 pt-3 md:py-8 lg:py-8 px-4 sm:px-6">
        <div className="max-w-full flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            {logoLocation()}
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Home menu links */}
            { location.pathname === '/' && (
              <ul className="flex grow justify-end flex-wrap items-center">
                { navHome.map((elem, i) => {
                  return (
                    <li key={i}>
                      <Scroll.Link to={elem} spy={true} smooth={true} offset={-200} duration={500} delay={100}  className="text-gray-100 hover:text-blue-100 hover:cursor-pointer lg:px-4 py-2items-center transition duration-150 ease-in-out text-xl md:px-2" activeClass="underline underline-offset-8 text-blue-100"> 
                        {elem}
                      </Scroll.Link>
                    </li>
                  )
                })}
                <li>
                  <Link to="/rapports" className="text-xl text-gray-100 hover:text-blue-100 px-4 py-2 flex items-center transition duratioease-in-out">Rapports</Link>
                </li>
              </ul>
            ) }

            {/* Rapport menu links */}
            { location.pathname.includes('/rapports') && (
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link to="/" className=" text-xl text-gray-100 hover:text-blue-100 px-4 py-2 flex items-center transition duratioease-in-out">Home</Link>
                </li>
                <li>
                  <Link to='/rapports'className={`hover:cursor-pointer hover:text-blue-100 lg:px-4 py-2items-center transition duration-150 ease-in-out text-xl md:px-2 ${location.pathname === '/rapports' && 'text-blue-100 underline underline-offset-8'} `}>
                        Rapports
                  </Link>
                 </li>
              </ul>

            ) }


            {/* Desktop connect wallet button*/}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signup" className="h4 text-lg btn-sm text-gray-900 bg-blue-100 hover:bg-bg-200 hover:text-blue-100 ml-3 rounded-full">Connect wallet</Link>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link to="/features" className="flex text-gray-300 hover:text-gray-200 py-2">Features</Link>
                </li>
                <li>
                  <Link to="/pricing" className="flex text-gray-300 hover:text-gray-200 py-2">Pricing</Link>
                </li>
                <li>
                  <Link to="/blog" className="flex text-gray-300 hover:text-gray-200 py-2">Blog</Link>
                </li>
                <li>
                  <Link to="/about" className="flex text-gray-300 hover:text-gray-200 py-2">About us</Link>
                </li>
                <li>
                  <Link to="/signup" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Sign up</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
