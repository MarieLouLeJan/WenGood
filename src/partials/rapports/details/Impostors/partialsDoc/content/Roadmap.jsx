import roadmap from '../../../../../../images/rapports/impostors/roadmap.png'
import roadmap1 from '../../../../../../images/rapports/impostors/roadmap1.png'
import roadmap2 from '../../../../../../images/rapports/impostors/roadmap2.png'

function Roadmap() {
  return (
    <section>
    <div className='max-w-6xl mx-12 mt-24 md:mt-16 md:mt-8 lg:mt-8'>

      <div className="">
        {/* Article section */}

        <div className="text-xl">
          <p>
            Pour le moment, tous les mints de la phase 1 se sont déroulés comme prévu, le dernier “test de jeux” à été effectué le 27 janvier 2023, avec un très bon retour de la part des joueurs.

            Le prochain gros évènement pour le projet est la vente de LAND pour les holders des genesis NFTs, ce dernier mint est très attendu et peu de communication a été effectué à son sujet.
          </p>
        </div>
      </div>
    </div>


    <div className='w-full mt-16 md:mt-8'>
      <div className='max-w-11/12 hidden md:hidden lg:flex mx-4'>
        <img src={roadmap} alt="roadmap" />
      </div>
      <div className='w-full lg:hidden'>
        <img src={roadmap1} alt="roadmap" />
        <img src={roadmap2} alt="roadmap" />
      </div>
    </div>
  </section>

  );
}

export default Roadmap;
