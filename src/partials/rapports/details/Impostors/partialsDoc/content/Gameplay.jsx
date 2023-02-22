import gameplay from '../../../../../../images/rapports/impostors/impostors-gameplay.png'
import impostors from '../../../../../../images/rapports/impostors/impostors-gameplay-1.png'
import YoutubeEmbed from '../../../../../../utils/YoutubeEnbeded';



function Gameplay() {

  return (
    <div className='max-w-6xl mx-12 mt-24 md:mt-16 md:mt-4 lg:mt-4'>

      <div className=" space-y-6">
        {/* Article section */}

        <div className="space-y-12 text-justify text-xl">
          <img src={gameplay} alt="gameplay" className='lg:w-5/6 lg:mx-auto'/>
          <div className="space-y-12">
            <p className='w-10/12 mx-auto'>
              IMPOSTORS est un jeu dans lequel les membres de l’équipage doivent repérer les imposteurs tout en complétant des mini jeux répartis sur la map tandis que le rôle des imposteurs est de tuer tous les joueurs sans être démasqués.
            </p>
            <ul className='list-disc space-y-8 w-10/12 mx-auto'>
              <li>
                “Course d’ovni” et “bataille d’animaux” sont des épreuves séparées dans lesquelles des non-joueurs pourront spéculer sur le résultat de ces mini jeux.
              </li>
              <li>
                Les joueurs obtiendront du $BLOOD et des ressources, les LANDS aussi leur permettront d’obtenir des ressources.
              </li>
              <li>
                Les Propriétaires de LAND pourront aussi construire des OVNI/UFOs et des arènes pour les “batailles d’animaux”.
              </li>
              <li>
                Le jeu sera gratuit, mais seulement les propriétaires des NFT génésis et futur NFT auront la possibilités d’obtenir des récompenses.
              </li>
            </ul> 
          </div>
          <div className="space-y-8">
            <p className='text-2xl text-blue-100 text-center'>Gameplay Trailer</p>
            <YoutubeEmbed embedId="-ASMfcfMw4c"/>
            <p className='w-9/12 mx-auto'>
              Les éléments graphiques sont originaux et très bien conçus, les artistes qui ont participé à la création du jeu ont également travaillé pour Pixar & Disney.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gameplay;
