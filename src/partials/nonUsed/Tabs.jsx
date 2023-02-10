import React, { useState, useRef, useEffect } from 'react';
import Transition from '../../utils/Transition';

import { ImRocket } from 'react-icons/im'
import { HiArrowRight } from 'react-icons/hi'
import { CgArrowLongRight } from 'react-icons/cg'
import { VscArrowRight } from 'react-icons/vsc'

function Tabs() {

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

          <div>

            <div className="flex flex-wrap justify-around" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">

            <div className="absolute w-8/12 h-1 bg-blue-300 mx-auto" />


              { quarters.map((q, i) => {
                return (
                    <button
                      className={`flex items-center font-medium my-8 group transition duration-500 w-36 h-36 ${tab !== i && 'opacity-50'}`}
                      onClick={() => setTab(i)}
                    >
                      <h2 className="h2 text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out m-auto">{q.title}</h2>
                    </button>
                )
              })}

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

                  <article className="mx-8">
                    <div className="flex py-2" data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <h4 className="h4 mb-2 basis-3/4 tracking-wider	">Lancement du projet</h4>
                    </div>
                    <div className="flex py-2" data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <h4 className="h4 mb-2 basis-3/4 tracking-wider	">Construction du site</h4>
                    </div>
                    <div className="flex py-2" data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <h4 className="h4 mb-2 basis-3/4 tracking-wider	">Développement des partenariats et collaborations</h4>
                    </div>
                    <div className="flex py-2" data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <h4 className="h4 mb-2 basis-3/4 tracking-wider	">Sortie du site</h4>
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
                  <article className="mx-8">
                    <div className="flex py-2" data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <h4 className="h4 mb-2 basis-3/4 tracking-wider	">Livraison des premiers rapports gratuits</h4>
                    </div>
                    <div className="flex py-2 " data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <h4 className="h4 mb-2 basis-3/4 tracking-wider	">Création de la première collection de NFT (Token d’accès à la communautée, au site et à ses rapports)</h4>
                    </div>
                    <div className="flex py-2 " data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <h4 className="h4 mb-2 basis-3/4 tracking-wider	">Mint</h4>
                    </div>
                    <div className="flex py-2 " data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <h4 className="h4 mb-2 basis-3/4 tracking-wider	">Sortie du site</h4>
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
                  <article className="mx-8">
                    <div className="flex py-2" data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <p className="text-2xl mb-2 basis-3/4 tracking-wide">Application mobile</p>
                    </div>
                    <div className="flex py-2 " data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <p className="text-2xl mb-2 basis-3/4 tracking-wide">Annonce de l’utilité du NFT PFP</p>
                    </div>
                    <div className="flex py-2 " data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <p className="text-2xl mb-2 basis-3/4 tracking-wide">Implémentation de la monthly subscription</p>
                    </div>
                    <div className="flex py-2 " data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <p className="text-2xl mb-2 basis-3/4 tracking-wide">Airdrop PFP NFT SPECIAL EDITION</p>
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
                  <article className="mx-8">
                    <div className="flex py-2" data-aos="fade-left" >
                      <ImRocket size={30} className="basis-1/4"/>
                      <p className="text-2xl mb-2 basis-3/4 tracking-wide">Campagne marketing</p>
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

export default Tabs;
