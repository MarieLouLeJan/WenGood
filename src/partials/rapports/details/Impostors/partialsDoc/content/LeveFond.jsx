import fond1 from '../../../../../../images/rapports/impostors/fond1.png'
import fond2 from '../../../../../../images/rapports/impostors/fond2.png'
import fond3 from '../../../../../../images/rapports/impostors/fond3.png'
import fond4 from '../../../../../../images/rapports/impostors/fond4.png'


function LeveFond() {
  return (
    <div className='max-w-6xl mx-12 mt-16 md:mt-8 lg:mt-8'>

      <div className="text-gray-100 space-x-12">
        {/* Article section */}

        <div className="text-justify text-xl">
          <p>
            Pour le moment, tous les mints de la phase 1 se sont déroulés comme prévu, le dernier “test de jeux” à été effectué le 27 janvier 2023, avec un très bon retour des joueurs. 
            Le prochain gros évènement pour le projet est la vente de LAND pour les holders des genesis NFTs, ce dernier mint est très attendu et peu de communication à été effectuée à son sujet.
          </p>
        </div>
        <div className='max-w-4xl  lg:pl-28 flex space-x-16 mt-12'>

          <div className='basis-1/4'>
            <img className='rounded-full' src={fond1} alt="fond" />
          </div>

          <div className='basis-1/4'>
            <img className='rounded-full' src={fond2} alt="fond" />
          </div>

          <div className='basis-1/4'>
            <img className='rounded-full' src={fond3} alt="fond" />
          </div>

          <div className='basis-1/4'>
            <img className='rounded-full' src={fond4} alt="fond" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeveFond;
