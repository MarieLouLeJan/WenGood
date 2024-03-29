import React from 'react';
import openSea from '../../../../images/rapports/opensea.svg'
import phase1 from '../../../../images/rapports/impostors/pet-phase1.png'
import phase2 from '../../../../images/rapports/impostors/pet-phase2.png'
import phase3 from '../../../../images/rapports/impostors/pet-phase3.png'
import phase4 from '../../../../images/rapports/impostors/pet-phase4.png'
import roadmapUFO from '../../../../images/rapports/impostors/roadmapUFO.png'
import roadmapUFO2 from '../../../../images/rapports/impostors/roadmapUFO2.png'

function Tokenomics() {

  const pets = [
    {
      title: 'Phase 1',
      list: [
        'Pet pass - le mint a commencé le 12 mai 2022.',
        '1 PET = 1800 $BLOOD.',
        'Chaque PET appartient à une des 4 galaxies plus ou moins rare.',
        'Chaque PET aura une puissance aléatoire entre 1 et 100.'
      ],
      image: phase1
    },
    {
      title: 'Phase 2',
      list: [
        'Les holders du PET PASS ont été en mesure de claim/réclamer leur PET en 3D qui sera utilisé dans le métaverse d’Impostors.',
        'Le PET suivra son Alien Impostors genesis dans le jeu de déduction sociale.',
      ],
      image: phase2
    },
    {
      title: 'Phase 3',
      list: [
        'La version 1 de “Pet battle” devient live.',
        'Évolution des PETs',
        'Plus de détails sur ces fonctionnalités sortiront prochainement.'
      ],
      image: phase3
    },
    {
      title: 'Phase 4',
      list: [
        'Vous aurez besoin d’un Alien Impostors genesis et Impostors genesis UFO.',
        'Évolution des PETs.',
        'Plus de détails sur ces fonctionnalités sortiront prochainement.'
      ],
      image: phase4
    },
  ]

  return (
    <div className='max-w-8xl md:max-w-6xl md:mx-4 md:mx-12 mt-8 md:mt-0 text-lg md:text-xl'>

          <div className="lg:space-x-8 lg:mx-12 flex flex-col lg:flex-row mb-20">

            <ul className='basis-1/2 space-y-8 lg:space-y-16 my-auto' data-aos="fade-up" data-aos-delay="200">

              <li className='flex flex-col space-y-4'>
                <p><b className='text-blue-100 text-xl md:text-2xl'>$SUPER - SuperFarm</b></p>
                <p>
                $SUPER est le coin de gouvernance pour SUPERFARM, la société derrière IMPOSTORS. Les frais de transaction découlants des ventes du marché secondaire des NFTs d’impostors seront directement injectés dans la trésorerie du $SUPER DAO et le DAO votera sur la façon dont le métaverse d’IMPOSTORS évoluera. Quand les deux mini jeux sortiront, les utilisateurs pourront stacker du $SUPER pour augmenter leurs chances dans ces jeux.
                </p>
              </li>
              <li className='flex flex-col space-y-4'>
                <a href='https://opensea.io/collection/impostors-genesis-aliens' target='_blank' className='flex space-x-4 text-blue-100 items-center text-xl md:text-2xl'>
                  <img src={openSea} alt="openSea" width={35}/>
                  <p><b>Genesis Aliens</b></p>
                </a>
                <p>
                  Total supply de 10 420 - Les holders pourront participer à tous les évènements “Genesis seasons” et ont eu un accès en avant-première aux jeux. Ils auront aussi un avantage significatif pour l’aspect P&E, le prix du mint en WL était de 0.69 et le mint en public était de 0.96. La totalité de la supply a été vendue en quelques minutes sur la vente publique.
                </p>
              </li>
              <li className='flex flex-col space-y-4'>
                <a href='https://opensea.io/collection/impostors-ufo' target='_blank' className='flex space-x-4 text-blue-100 items-center text-xl md:text-2xl'>
                  <img src={openSea} alt="openSea" width={35}/>
                  <p><b>UFO's</b></p>
                </a>
                <p>
                  Mint gratuit pour les holders du Aliens Genesis, utilisé pour le mini-jeu de course d’OVNI/ UFO racing. Gagner des courses permettra aux utilisateurs de remporter du $BLOOD et des ressources.
                </p>
              </li>
              <li className='flex flex-col space-y-4'>
                <a href='https://opensea.io/collection/impostors-cosmetics-chest' target='_blank' className='flex space-x-4 text-blue-100 items-center text-xl md:text-2xl'>
                  <img src={openSea} alt="openSea" width={35}/>
                  <p><b>Cosmetics</b></p>
                </a>
                <p>
                  Ces éléments seront des NFTs utilisables dans les jeux mais n’apporteront pas d'avantages liés aux jeux, cependant certains d’entre eux permettront à leurs utilisateurs d’obtenir du $BLOOD.
                </p>
              </li>
            </ul>
            <ul className='basis-1/2 pt-8 lg:pt-0 space-y-8 my-auto' data-aos="fade-up" data-aos-delay="400">
              <li className='flex flex-col space-y-4'>
                <p><b className='text-blue-100 text-xl md:text-2xl'>$BLOOD</b></p>
                <p>
                  Ce token a été lancé en “fair launch” et non en “pré-vente”. Fair Launch offre une opportunité équitable à tous les investisseurs, sans privilèges pour les investisseurs en dehors du réseau. La pré-vente implique une vente privée de jetons à des investisseurs sélectionnés avant le lancement public, ce qui peut entraîner une concentration de jetons et une centralisation du projet. Ce token ne sera uniquement obtenu à travers la participation de l’écosystème IMPOSTORS, c’est à dire  en stakant le Genesis NFTs et en jouant aux jeux. L’émission et l’utilisation du $BLOOD évolura en fonction de la base d’utilisateur.
                </p>
              </li>
              <li className='flex flex-col space-y-4'>
                <a href='https://opensea.io/collection/impostors-genesis-pets' target='_blank' className='flex space-x-4 text-blue-100 items-center text-xl md:text-2xl'>
                  <img src={openSea} alt="openSea" width={35}/>
                  <p><b>Pets</b></p>
                </a>
                <p>
                  Total supply de 10 420 - Mint gratuit pour les holders du Aliens Genesis, utilisé pour le mini-jeu : Bataille d’animaux / pet battling. Lorsqu’ils sont associés avec les Aliens de la même galaxie, ils engendreront une augmentation significative des statistiques. 
                </p>
              </li>
              <li className='flex flex-col space-y-4'>
                <a href='https://opensea.io/collection/impostors-materials-box' target='_blank' className='flex space-x-4 text-blue-100 items-center text-xl md:text-2xl'>
                  <img src={openSea} alt="openSea" width={35}/>
                  <p><b>Materials</b></p>
                </a>
                <p>
                  Token ERC-1155 NFTs produits par les LANDS, ces ressources seront nécessaires afin de construire et d’améliorer les OVNI/UFOs et de générer et améliorer les Pets/ animaux, améliorer les LANDs et plus encore.
                </p>
              </li>
              <li className='flex flex-col space-y-4'>
                <p><b className='text-blue-100 text-xl md:text-2xl'>Land</b></p>
                <p>
                  À la fin de la saison génésis les holders du pack complet NFT cité au dessus pourrons minter leur LAND. Le LAND produit des ressources et seront en mesure d’acceuillir des infrastructures construite par le holder. La combinaison des ALIEN/UFO/Pet et leur rareté sera déterminante pour la rareté du LAND.
                </p>
              </li>
            </ul>
          </div>

          <div className="md:space-x-8 md:mx-12 space-y-8 text-lg md:text-xl mb-20 md:w-12/12" data-aos="fade-up" data-aos-delay="400">

            <h2 className='text-xl md:text-3xl text-blue-100 text-center'>Roadmap - Pets</h2>

            {
              pets.map(pet => {

                const { title, image, list } = pet;

                return (
                  <div className='flex space-x-2 md:space-x-12'>
                    <div className='space-y-4 basis-1/5'>
                      <img src={image} alt={title} className='w-8/12 m-auto'/>
                    </div>
                    <div className='m-auto space-y-2 basis-4/5'>
                      <p className='h3 text-xl md:text-2xl text-pet-1'>{title}</p>
                      <ul className='list-disc'>
                        {list.map(l => {
                          return (
                            <li>{l}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                )
              })
            }

          </div>

          <div className='space-y-8'   data-aos="fade-up" data-aos-delay="400">
            <h2 className='text-3xl text-blue-100 text-center'>Roadmap - UFOs</h2>
            <img src={roadmapUFO} alt="roadmap ufo" className='md:hidden'/>
            <img src={roadmapUFO2} alt="roadmap ufo" className='hidden md:flex'/>
          </div>
    </div>
  );
}

export default Tokenomics;
