import roadmap1 from '../../../../../../images/rapports/impostors/roadmap1.png'
import roadmap2 from '../../../../../../images/rapports/impostors/roadmap2.png'



function Roadmap() {
  return (
    <div className='max-w-6xl mx-12 mt-16 md:mt-8 lg:mt-8'>

      <div className="text-gray-100">
        {/* Article section */}

        <div className="text-justify text-xl">
          <p>
            Pour le moment, tous les mints de la phase 1 se sont déroulés comme prévu, le dernier “test de jeux” à été effectué le 27 janvier 2023, avec un très bon retour des joueurs. 
            Le prochain gros évènement pour le projet est la vente de LAND pour les holders des genesis NFTs, ce dernier mint est très attendu et peu de communication à été effectuée à son sujet.
          </p>
          <div className='max-w-4xl'>
            <img src={roadmap1} alt="" />
          </div>
          
          <img src={roadmap2} alt="" />
        </div>

      </div>
    </div>
  );
}

export default Roadmap;
