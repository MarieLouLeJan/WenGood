import fond1 from '../../../../../../images/rapports/impostors/fond1.png'
import fond2 from '../../../../../../images/rapports/impostors/fond2.png'
import fond3 from '../../../../../../images/rapports/impostors/fond3.png'
import fond4 from '../../../../../../images/rapports/impostors/fond4.png'
import fonds from '../../../../../../images/rapports/impostors/fonds.png'


function LeveFond() {
  return (
    <div className='max-w-6xl mx-12 mt-24 md:mt-16 md:mt-8 lg:mt-8'>

      <div className="">
        {/* Article section */}

        <div className='lg:w-4/6 mx-auto'>
          <img src={fonds} alt="levé de fond" />
        </div>

        <div className="text-justify text-xl space-y-6">
          <p>
            Au total SuperFarm a levé : 
          </p>
          <ul className='list-disc space-y-2'>
            <li>2,56 millions de dollars entre les tours de financement d’amorçage (seed round) et ventes privées;</li>
            <li>250 000 dollars grâce à leur IDO Polkastarter;</li>
            <li>825 ETH (environ 1,5 million de dollars le 15 février 2021) grâce au drop NFT d'EllioTrades;</li>
            <li>Environ 1,3 million de dollars en $SUPER (autour de son ATH) grâce au drop NFT Genesis de SuperFarm.</li>
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
