import React, { useRef } from 'react';
import Transition from '../../../../../utils/TransitionDoc';
import Scroll from 'react-scroll'


import { VscDebugBreakpointDataUnverified, VscChromeClose } from 'react-icons/vsc'

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  title,
  setTitle,
  categories
}) {

  const scroll = Scroll.animateScroll;

  const handleCLick = (cat) => {
    if(sidebarOpen) setSidebarOpen(false)
    setTitle(cat)
    scroll.scrollToTop()
  };

  const sidebar = useRef(null);

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!sidebar.current) return;
  //     if (!sidebarOpen || sidebar.current.contains(target)) return;
  //     setSidebarOpen(false);
  //   };
  //   document.addEventListener('click', clickHandler);
  //   return () => document.removeEventListener('click', clickHandler);
  // });

  // close if the esc key is pressed
  // useEffect(() => {
  //   const keyHandler = ({ keyCode }) => {
  //     if (!sidebarOpen || keyCode !== 27) return;
  //     setSidebarOpen(false);
  //   };
  //   document.addEventListener('keydown', keyHandler);
  //   return () => document.removeEventListener('keydown', keyHandler);
  // });

  return (
    <div>
      {/* <Transition
        className="md:hidden fixed inset-0 z-10 transition-opacity"
        show={sidebarOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      /> */}

      <div ref={sidebar}>
        <Transition
          show={sidebarOpen}
          tag="aside"
          id="sidebar"
          className="fixed left-0 top-48 bottom-0 w-64 bg-gradient-to-r from-bg-200 to-bg-100 h-screen border-r border-t rounded-2xl border-blue-100 md:left-auto md:shrink-0 z-10 md:!opacity-100 md:!block"
          enter="transition ease-out duration-200 transform"
          enterStart="opacity-0 -translate-x-full"
          enterEnd="opacity-100 translate-x-0"
          leave="transition ease-out duration-200"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >

          <div className="fixed top-0 bottom-0 w-82 sm:px-6 md:pl-0 md:pr-8 overflow-y-auto no-scrollbar mt-44">
            <div className="pt-8 md:pt-12 pb-8">
              {/* Docs nav */}
              <nav className="md:block">
                <div className='flex justify-between md:block mx-4 pb-4'>
                  <p className='text-center text-2xl text-blue-100 md:pb-16 lg:pb-16'>Impostors</p>
                  {sidebarOpen && (
                    <div className=''>
                      <VscChromeClose size={30} className="text-blue-100 sticky left-52" onClick={() => setSidebarOpen(false)}/>
                    </div>
                  )}
                  </div>
                  
                  <ul className="text-lg text-gray-100">
                  {categories.map((cat, i) =>
                    (
                      <li key={i}>
                        <button className={`hover:text-blue-100 px-4 py-2 flex  space-x-4 items-center transition duratioease-in-out ${title === cat && `text-blue-100`}`} onClick={() => handleCLick(cat)}>
                          <div className=''>
                            <VscDebugBreakpointDataUnverified size={30} className='text-blue-100'/>
                          </div>
                          <span>{cat}</span>
                        </button>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default Sidebar;
