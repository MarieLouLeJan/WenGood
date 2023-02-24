
import fonds from '../../../../../../images/rapports/impostors/fonds.png'


function LeveFond() {
  return (
    <div className='max-w-8xl md:max-w-6xl mx-4 md:mx-12 mt-8 md:mt-0'>

      <div className="space-y-4">

        <div className='md:w-4/6 mx-auto' data-aos="fade-up" data-aos-delay="400">
          <img src={fonds} alt="levé de fond" />
        </div>

        <div className="text-lg text-lg md:text-xl space-y-6" data-aos="fade-up" data-aos-delay="200">
          <p>
            Au total SuperFarm a levé : 
          </p>
          <ul className='list-disc space-y-2'>
            <li>2,56 millions $ entre les tours de financement d’amorçage (seed round) et ventes privées;</li>
            <li>250 000 $ grâce à leur IDO Polkastarter;</li>
            <li>825 ETH (environ 1,5 million $ le 15 février 2021) grâce au drop NFT d'EllioTrades;</li>
            <li>Environ 1,3 million $ en $SUPER (autour de son ATH) grâce au drop NFT Genesis de SuperFarm.</li>
          </ul>
          <br />
          <p>
            Impostors est indirectement soutenu par les investisseurs de SuperFarm, tels qu'Animoca Brands, Bitcoin.com, Black Edge Capital, Spark Digital Capital, Genesis Block Ventures, AU21 Capital, Woodstock, Solidity Ventures et d'autres investisseurs et conseillers incluant Alex Becker, FaZe Banks ainsi que différents créateurs de contenu renommés.
          </p>

        </div>

      </div>
    </div>
  );
}

export default LeveFond;
