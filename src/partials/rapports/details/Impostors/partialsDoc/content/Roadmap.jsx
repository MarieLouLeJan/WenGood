import roadmap from '../../../../../../images/rapports/impostors/roadmap.png'
import roadmap1 from '../../../../../../images/rapports/impostors/roadmap1.png'
import roadmap2 from '../../../../../../images/rapports/impostors/roadmap2.png'

function Roadmap() {
  return (
    <section>
    <div className='max-w-8xl md:max-w-6xl mx-4 md:mx-12 mt-8 md:mt-0' data-aos="fade-up" data-aos-delay="200">

      <div className="">
        <div className="text-lg md:text-xl">
          <p>
            Pour le moment, tous les mints de la phase 1 se sont déroulés comme prévu, le dernier “test de jeu” à été effectué le 27 janvier 2023, avec un très bon retour de la part des joueurs.

            Le prochain gros évènement pour le projet est la vente de LAND pour les holders des genesis NFTs, ce dernier mint est très attendu et peu de communication a été effectuée à son sujet.
          </p>
        </div>
      </div>
    </div>


    <div className='w-full mt-16 md:mt-8' data-aos="fade-up" data-aos-delay="400">
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
