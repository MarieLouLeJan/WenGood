import React, { useEffect, useState } from 'react';
import gameplay from '../../../../../../images/rapports/impostors/impostors-gameplay.png'
import impostors from '../../../../../../images/rapports/impostors/impostors-gameplay-1.png'
import { BsTwitter, BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import YoutubeEmbed from '../../../../../../utils/YoutubeEnbeded';
import { AiFillYoutube } from 'react-icons/ai'



function Gameplay() {

  return (
    <div className='max-w-6xl mx-12 mt-16 md:mt-8 lg:mt-8'>

      <div className="text-gray-100 space-y-6">
        {/* Article section */}

        <div className="space-y-6 text-justify text-xl">
          <img src={gameplay} alt="gameplay" />
          <div className="space-y-4">
            <p className=''>
              IMPOSTORS est un jeux ou des personages inoccent doivent trouver les impostors responsables de meurtres, tout en complétant des mini jeux dans la map, le rôle des imposteurs est de tuer tous le monde.
            </p>
            <ul className='list-disc'>
              <li>
                “Course d’ovni” et “bataille d’animaux” son des minis jeux séparés dans les quels des non joueurs pourrons spéculer sur le résultats de ces minis jeux.
              </li>
              <li>
                Les joueurs obtiendrons du $BLOOD et des ressources, les LANDS aussi leur permetterons d’obtenir des ressources.
              </li>
              <li>
                Les Propriétaires de LAND pourront aussi construire des OVNI/UFOs et des arènes pour les “batailles d’animaux”
              </li>
              <li>
                Le jeux sera gratuit, mais seulement les propriétaires des NFT génésis et futur NFT aurons la possibilités d’obtenir des récompenses.
              </li>
            </ul> 
          </div>
          <div className="space-y-4">
            <p className='text-2xl text-blue-100 text-center'>Gameplay Trailer</p>
            <YoutubeEmbed embedId="-ASMfcfMw4c"/>
            <p>
              Les éléments graphiques sont originaux et très bien fait, certains artistes ayant travaillé sur le jeux ont aussi travaillé pour <b className='text-blue-100'>Pixar & Disney</b>. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gameplay;
