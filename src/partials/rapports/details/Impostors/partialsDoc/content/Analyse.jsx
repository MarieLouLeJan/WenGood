import React from 'react';
import image from '../../../../../../images/rapports/impostors/analyse.png'



function Analyse() {
  return (
    <div className='max-w-6xl mx-12 mt-16 md:mt-8 lg:mt-8'>

      <div className="text-gray-100 space-y-6">

        <div className="space-y-12 text-justify text-xl">

          {/* <div className="lg:space-x-8 flex flex-col lg:flex-row"> */}

            <div className='space-y-12'>

              <p className='text-2xl text-center text-blue-100'>
                FORCES ET AVANTAGES
              </p>

              <ul className='list-disc space-y-8 w-9/12 mx-auto'>

                <li>
                  Style de gameplay populaire  amusant, qui attire déjà près d’un demie milliard d'utilisateurs actifs mensuels avec le jeux “Among Us”
                </li>

                <li>
                  Les NFT Genesis se sont vendus très rapidement et ont atteint un prix plancher de plus de 3 ETH pendant un certain temps.
                </li>

                <li>
                  Pas de barrière d'entrée pour les utilisateurs non-crypto.
                </li>

                <li>
                  Jeux et actifs graphiques 3D à grande valeur ajoutée, la nature évolutive d'Imposteurs, sont une mise à niveau importante par rapport à “Among Us” - le jeux web2 qui inspire IMPOSTORS.
                </li>

                <li>
                  Pas de concurrent notoire basé sur la blockchain dans le genre “social deduction game.
                </li>

                <li>
                  L'un des premiers jeux AAA jouables en Web3.
                </li>

                <li>
                  Imposteurs fait partie de l’écosystème SuperFarm et ses différents branches se ramifies de manière à créer un engrenage d’adoption des utilisateurs.
                </li>

                <li>
                  Le fondateur a déjà construit une énorme communauté et est très réceptif à leur feedback. $SUPER payé par les minteures du NFT Genesis sera bloqué et scellé, démontrant la conviction de l'équipe dans l'avenir de leur projet.
                </li>

              </ul>

            </div>

            <div className='w-9/12 mx-auto'>

            <img src={image} className='rounded-xl drop-shadow-2xl' alt="impostors" />

            </div>

            <div className='space-y-12'>
              <p className='text-2xl text-center text-blue-100'>
                FACTEURS DE RISQUE - INCONVENIENTS
              </p>
              <ul className=' pt-8 lg:pt-0 list-disc space-y-8 w-9/12 mx-auto'>

                <li>
                  Le sentiment de la communauté suite à l'annonce du prix initial du mint d’un personnage d’IMPOSTORS  a été largement négatif. Il faut quand même prendre en compte que de ce fait, Le prix du mint a été réduis et que plus d’informations ont étés divulguées à la communauté.
                </li>

                <li>
                  Le NFT Genesis a perdu de la valeur depuis le mint fin mars 2022 -le prix du mint était de 0,69 et 0,96 ETH pour WL et public. au 2 février 2023, Le floor est de 0,43 ETH.
                </li>

                <li>
                  La communauté s'attendaient en grande partie à ce que le gameplay soit plus unique ; il est directement copié d'Among Us.
                </li>

                <li>
                  Bien que les évènement de “saisons” composants le jeux soit établis par semaines, l'équipe n'a pas encore communiqué sur des dates spécifiques pour le mint des lands.
                </li>

                <li>
                  L'équipe gère plusieurs projets différents simultanément, limitant la quantité de temps qu'elle peut consacrer à chaque projet individuel.
                </li>

                <li>
                  Le “schollarship programme” - qui a été un facteur clé de la croissance explosive d'Axie - est encore loin d’être au point.
                </li>

                <li>
                  Les jeux de détection sociale “social deduction games”  tel Among Us génèrent moins de revenus que les gros titres dans d'autres genres de jeux traditionnels, ce qui est peut-être une raison clé de l'absence de concurrents direct “on chain.”
                </li>

                <li>
                  Pas de tokenomiques détaillées pour $BLOOD.
                </li>

              </ul>
            </div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Analyse;
