import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { AiFillYoutube } from 'react-icons/ai'
import YoutubeEmbed from '../../../../../../utils/YoutubeEnbeded';


function Marketing() {

  return (
    <div className='max-w-6xl mx-12 mt-16 md:mt-8 lg:mt-8'>

      <div className="text-gray-100 space-y-6">

        <div className="space-y-6  text-xl">
          <div className="space-x-8 flex">
            <p className='basis-1/2'>
              Pour le moment, la majeure partie du marketing a été effectuée par le chef du projet, <b className='text-blue-100'>Elliot Wainman</b>, qui est un des principaux influenceurs dans le domaine des jeux blockchain/NFT. Il est à l’avant-garde depuis 2018 et a fait croître son auditoire à plus de 1,2 million d’abonnés sur YouTube et Twitter confondus. 
              <br />
              <div className='flex space-x-4 pt-5 items-center'>
                <Link to='https://www.youtube.com/@elliotrades_official'><AiFillYoutube size={35} color={'red'}/></Link> 
                <span className='font-semibold'>Youtube - 576K</span>
              </div>
              <div className='flex space-x-5 items-center mt-2'>
                <Link to='https://www.youtube.com/@elliotrades_official'><BsTwitter size={30} className='text-blue-100'/></Link> 
                <span className='font-semibold'>Twitter - 698.6K</span>
              </div>
              <br />
              IMPOSTORS fait partie de l’écosystème <b className='text-blue-100'>SuperFarm</b> et est commercialisé auprès de cette communauté - leur token $SUPER compte plus de 37000 détenteurs répartis dans trois chaînes différentes - ainsi que de la communauté EllioTrades sur discord - 11000 membres. <b className='text-blue-100'>La communauté Impostors / Superfarm / EllioTrades est active sur Twitter et dans Discord.</b>
            </p>
            <div className='basis-1/2 flex flex-col space-y-8'>
              <p >
                L’équipe est sensible aux commentaires et retours de ses communautés. Il n’est pas rare de croiser Ellio sur les différents discords pour parler pendant des heures de ses différents projets directement avec ses membres, plus particulièrement sur IMPOSTORS.
              </p>
              <p >
                Jusqu’à présent, presque aucun marketing n’a été fait en dehors des communautés SuperFarm / EllioTrades, ce qui est vu comme un problème au sein de la communauté. <b className='text-blue-100'>Il semble que le plan est de stratégiquement conserver la majeure partie du marketing externe pour le lancement bêta ouvert.</b> 
              </p>
              <p>
                Certains créateurs de contenu populaire s’investissent dans Impostors/SuperFarm, et auront un impact précieux au moment du lancement des différentes campagnes de marketing.
              </p>
            </div>
          </div>
          <div className="pt-8 space-y-12">
            <YoutubeEmbed embedId="U2GAR8Xfuow"/>
            <p>
              On peut retrouver entre autres, la célèbre chaîne <b className='text-blue-100'>“Crypto Banter”</b> et ses 600K abonnés ainsi que <b className='text-blue-100'>“CryptoStache”</b> et ses 93k abonnés.
              Cela inclut des joueurs et des streamers avec un large public web2, ce qui présage une adoption de cet écosystème par des “normies” - personnes ne connaissant pas ou très peu le monde de la blockchain. Le jeu prendra une approche saisonnière, donc chaque nouvelle saison devrait être lancée avec une nouvelle vague de marketing.
            </p>
            <YoutubeEmbed embedId="i7TAPu3wb90"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
