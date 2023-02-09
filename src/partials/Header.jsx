import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo-02.png';
import Scroll from 'react-scroll'


function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  const navHome = [
    "MISSION",
    "ROADMAP",
    "TEAM",
    "MINTPASS"
  ]

  const navRapport = [
    "NFT",
    "GAMING",
    "INFRASTRUCTURE"
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
    } else if (location.pathname === '/rapports') {
      return (
        <Link to="/" className="flex hover:cursor-pointer ">
          <img src={logo} className='w-20 h-22' alt="wengood" />
          <h4 className='h4 text-sm my-auto'>WEN GOOD PROJECT</h4>
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
      <div className=" max-w-8xl mx-auto py-8 px-4 sm:px-6">
        <div className="max-w-full flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            {logoLocation()}
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              { navHome.map((elem, i) => {
                return (
                  <li key={i}>
                    <Scroll.Link  activeClass="text-blue-100 underline underline-offset-8" to={elem} spy={true} smooth={true} offset={-200} duration={500} delay={100} className="h4 text-gray-100 hover:text-blue-100 hover:cursor-pointer lg:px-4 py-2 flex items-center transition duration-150 ease-in-out text-base md:px-2">
                      {elem}
                    </Scroll.Link>
                </li>
                )
              }) }
              <li>
                <Link to="/pricing" className="h4 text-base text-gray-100 hover:text-blue-100 px-4 py-2 flex items-center transition duration-150 ease-in-out">RAPPORTS</Link>
              </li>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signup" className="h4 text-base btn-sm text-gray-900 bg-blue-100 hover:bg-gray-900 hover:text-blue-100 ml-3 rounded-full">Connect wallet</Link>
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
                <li className="py-2 my-2 border-t border-b border-gray-700">
                  <span className="flex text-gray-300 py-2">Support</span>
                  <ul className="pl-4">
                    <li>
                      <Link to="/contact" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Contact us</Link>
                    </li>
                    <li>
                      <Link to="/help" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">Help center</Link>
                    </li>
                    <li>
                      <Link to="/404" className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">404</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/signin" className="flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center">Sign in</Link>
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
