import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import TabsImage01 from '../images/tabs-image-01.jpg';
import { ImRocket } from 'react-icons/im'

function Tabs2() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab-1]) {
      tabs.current.style.height = tabs.current.children[tab-1].offsetHeight + 'px'
    }
  }
  
  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])  

  const quarters = [
    {
      title: "Q1",
      index: 1
    },
    {
      title: "Q2",
      index: 2
    },
    {
      title: "Q3",
      index: 3
    },
    {
      title: "Q4",
      index: 4
    },
  ]

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">ROADMAP</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-tabs]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div> */}

          {/* Section content */}
          <div>

            {/* Tabs buttons */}
            <div className="flex flex-wrap  justify-around " data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">

              { quarters.map(q => {
                return (
                    <button
                    className={`flex items-center font-medium py-2 px-4 m-2 border-8 border-blue-300 rounded-full group transition duration-500 w-36 h-36 ${tab !== q.index && 'opacity-50'}`}
                    onClick={() => setTab(q.index)} key={q.index}
                    >
                    <h2 className="h2 text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out m-auto">{q.title}</h2>
                    </button>
                )
              })}

                    {/* <button
                    className={`flex items-center font-medium py-2 px-4 m-2 border-8 border-blue-300 rounded-full group transition duration-500 w-36 h-36 ${tab !== 1 && 'opacity-50'}`}
                    onClick={() => setTab(1)} 
                    >
                    <h2 className="h2 text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out m-auto">Q1</h2>
                    </button>
                    
                    <button
                    className={`flex items-center font-medium py-2 px-4 m-2 border-8 border-blue-300 rounded-full group transition duration-500 w-36 h-36 ${tab !== 2 && 'opacity-50'}`}
                    onClick={() => setTab(2)} 
                    >
                    <h2 className="h2 text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out m-auto">Q2</h2>
                    </button> */}
            </div>

            {/* Tabs items */}
            <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>

              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img className="w-full h-full object-cover" src={TabsImage01} width="516" height="387" alt="Tabs 01" />
                  </figure>
                  <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2">Optimize and scale, easy to start</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img className="w-full h-full object-cover" src={TabsImage01} width="516" height="387" alt="Tabs 02" />
                  </figure>
                  <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2">Easy to start, optimize and scale</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img className="w-full h-full object-cover" src={TabsImage01} width="516" height="387" alt="Tabs 01" />
                  </figure>
                  <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2">Optimize and scale, easy to start</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 4 */}
              <Transition
                show={tab === 4}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img className="w-full h-full object-cover" src={TabsImage01} width="516" height="387" alt="Tabs 02" />
                  </figure>
                  <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2">Easy to start, optimize and scale</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 5 */}
              <Transition
                show={tab === 5}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img className="w-full h-full object-cover" src={TabsImage01} width="516" height="387" alt="Tabs 01" />
                  </figure>
                  <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2">Optimize and scale, easy to start</h4>
                    <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Tabs2;
