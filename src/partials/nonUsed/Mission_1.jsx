import React from 'react';

import FeatIllustration from '../images/features-illustration.png';
import FeatAvatar from '../images/features-avatar.jpg';

function Mission() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-10 border-t border-gray-800">

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-8 md:pb-12">
            <h2 className="h2 mb-4" data-aos="fade-up">NOTRE MISSION</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">"Wen good project" est une entreprise spécialisée dans la recherche de projets crypto (infrastructures, gaming, NFT).</p>
          </div> */}

          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up" data-aos-anchor="[data-aos-id-features-home]">
                <div className="relative">
                  <img className="md:max-w-none" src={FeatIllustration} width="540" height="520" alt="Features illustration" />
                  <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="540" height="520" viewBox="0 0 540 520" xmlns="http://www.w3.org/2000/svg">
                    <g className="fill-current text-purple-600">
                      <circle className="pulse" cx="270" cy="260" r="64" />
                      <circle className="pulse pulse-1" cx="270" cy="260" r="64" />
                      <circle className="pulse pulse-2" cx="270" cy="260" r="64" />
                      <circle className="pulse pulse-3" cx="270" cy="260" r="64" />
                    </g>
                  </svg>
                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right" data-aos-anchor="[data-aos-id-features-home]">
                <div className="text-right md:pr-4 lg:pr-12 xl:pr-16 leading-relaxed ">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">Lighting fast workflow</div> */}
                  <h3 className="h3 mb-2">Une équipe d'experts</h3>
                  <p className="text-xl text-gray-400 mb-4">Notre équipe d'experts fournit mensuellement des rapports impartiaux de haute qualité pour aider les investisseurs à prendre des décisions éclairées.</p>

                  <h3 className="h3 mb-2">Une communauté</h3>
                  <p className="text-xl text-gray-400 mb-4">Plus que tout, nous croyons en la force de la collectivité. Plus qu’une entreprise, nous sommes une vraie communauté, retrouve-toi plongé entre investisseurs novice et aguerris.</p>

                  <h3 className="h3 mb-2">De l'autonomie</h3>
                  <p className="text-xl text-gray-400 mb-4">Acquérez des connaissances et des compétences pour avoir un avantage compétitif dans l'espace Web3.</p>
                  {/* <ul className="flex flex-wrap text-lg text-gray-400 -mx-2 -my-1">
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Premium statistics</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited jobs</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Free goods</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>No code required</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Always up to date</span>
                    </li>
                  </ul>
                  <div className="flex items-start mt-8">
                    <img className="rounded-full shrink-0 mr-4" src={FeatAvatar} width="40" height="40" alt="Features avatar" />
                    <div>
                      <blockquote className="text-gray-400 italic m-0 mb-3">"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing".</blockquote>
                      <div className="text-gray-700 font-medium">
                        <cite className="text-gray-200 not-italic">— Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              
            </div>

            

          </div>

        </div>
      </div>
    </section>
  );
}

export default Mission;