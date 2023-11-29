import { useRef, useEffect } from 'react';
import Transition from '../../../../utils/TransitionDoc'
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
    scroll.scrollToTop({duration: 300})
  };

  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current) return;
      if (!sidebarOpen || sidebar.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  return (
    <div>

      <div ref={sidebar}>
        <Transition
          show={sidebarOpen}
          tag="aside"
          id="sidebar"
          className="fixed left-0 top-36 md:top-48 bottom-0 w-full md:w-64 h-screen bg-bg-200 border-r border-t border-l md:border-l-0 rounded-2xl border-blue-100 md:left-auto md:shrink-0 z-10 md:!opacity-100 md:!block"
          enter="transition ease-out duration-500"
          enterStart="opacity-0"
          enterEnd="opacity-100"
          leave="transition ease-out duration-500"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >

          <div className="fixed top-0 bottom-0 w-82 md:pl-0 md:pr-8 overflow-y-auto no-scrollbar mt-44">
            <div className="md:pt-8 pb-8">

              <nav className="md:block">

                <div className='md:block pb-4'>
                  {sidebarOpen && (
                    <div className=''>
                      {/* <VscChromeClose size={25} className="text-blue-100 sticky left-52" onClick={() => setSidebarOpen(false)}/> */}
                    </div>
                  )}
                </div>
                  
                  <ul className="text-lg mx-12 md:mx-0">
                  {categories.map((cat, i) =>
                    (
                      <li key={i}>
                        <button className={`hover:text-blue-100 px-4 py-2 flex space-x-4 items-center transition duration ease-in-out ${title === cat && `text-blue-100`}`} onClick={() => handleCLick(cat)}>
                          <div className=''>
                            <VscDebugBreakpointDataUnverified size={25} className='text-blue-100'/>
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
