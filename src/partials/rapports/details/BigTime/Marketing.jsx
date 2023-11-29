import { BsDiscord, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import YoutubeEmbed from '../../../../utils/YoutubeEnbeded';


function Marketing() {

  return (
    <div className='max-w-8xl md:max-w-6xl mx-4 md:mx-12 mt-8 md:mt-0 text-lg md:text-lg'>

      <div className="space-y-6">

        <div className="space-y-6">
          <div className="space-y-6 md:space-y-0 md:space-x-8 flex flex-col md:flex-row"   data-aos="fade-up" data-aos-delay="200">
            <div className='basis-1/2 space-y-5'>
              <p>
                Big Time a une immense base de followers sur Discord et Twitter (241k membres), et consacre beaucoup de temps et d'efforts à la construction de la communauté.              
              </p>
                <Link className='flex flex-row space-x-4 items-center' to='https://www.youtube.com/@elliotrades_official'>
                  <BsTwitter size={35} className='text-twitter-1'/>
                  <span className='font-semibold'>Twitter - 241K</span>
                </Link> 
                <Link className='flex space-x-5 items-center' to='https://www.youtube.com/@elliotrades_official'>
                  <BsDiscord size={30} className='text-discord-1'/>
                  <span className='font-semibold'>Discord - 404K</span>
                </Link> 
              <p>
                Leur serveur Discord est très actif et géré par une équipe de modérateurs professionnels. Ils organisent des campagnes de cadeaux, fonts beaucoup d’éducation sur le fonctionnement du jeu et fournissent des mises à jour sur les progrès de manière efficace et régulière.
              </p>
              <p>
                La majorité des mises à jour de développement sont publiées sur leur Wiki basé sur GitBook et Medium. C'est là que des mises à jour plus longues sont exposées à la communauté.
              </p>
            </div>
            <div className='basis-1/2 flex flex-col space-y-8'>
              <p>
                L'équipe semble très axée sur la construction de la communauté avant le lancement, ce qui devrait les mettre dans une position solide lors de la sortie des différentes phases du jeu. Il est très agréable de voir une équipe aussi tournée vers la construction de leur communauté, ce facteur étant un des plus primordiale pour la réussite de lancement de ce type de projet .
              </p>
              <p>
                Le jeux a aussi sa propre chaine youtube avec ses 13k d’abonnés et upload des vidéos plusieurs fois par mois.              
              </p>
              <Link className='flex space-x-5 items-center' to='https://www.youtube.com/@elliotrades_official'>
                  <BsYoutube size={30} className='text-youtube-1'/>
                  <span className='font-semibold'>Youtuve - 13K</span>
              </Link> 
              <p>
                Ce jeux est très connus de l’écosystème et quelques influenceur internationaux spécialisés dans le crypto gaming on déjà fait des reviews prometteuse sur ce titre.
              </p>
            </div>
          </div>
          <div className="pt-8 space-y-12" data-aos="fade-up" data-aos-delay="400">

            <h4 className='text-2xl text-center text-blue-100'>Crypto Stache :</h4>
            <YoutubeEmbed embedId="_xIo4e951uU"/>
            <h4 className='text-2xl text-center text-blue-100'>Brycent :</h4>
            <YoutubeEmbed embedId="4fgotvvq4Gc"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
