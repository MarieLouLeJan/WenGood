import React, { useState } from "react";
import EWainman from "../../../../images/rapports/impostors/team-ellio-wainman.jpg";
import MCaplan from "../../../../images/rapports/impostors/team-marty-caplan.jpg";
import TClancy from "../../../../images/rapports/impostors/team-tim-clancy.jpg";
import DPrate from "../../../../images/rapports/impostors/team-daniel-prate.png";

import { GrLinkedin } from "react-icons/gr";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Team() {
  const [showDescr, setShowDescr] = useState([false, false, false, false]);

  const toggleDesciption = (i) => {
    let newShow = [...showDescr];
    newShow[i] = !newShow[i];
    setShowDescr(newShow);
  };

  const team = [
    {
      img: EWainman,
      name: "Elliot Wainman",
      position: ["Co-fondateur de Superfarm", "CEO Super Studio"],
      description: `Elliot est un influenceur bien connu de l’écosystème web3, avec une base de plus de 1,2 million d’abonnés sur YouTube & Twitter. Avant de se consacrer à SuperFarm, il a co-fondé DApp Evolution, un écosystème de dApps construit sur Tron, ainsi que son produit phare TronChat, une dApp de médias sociaux. DApp Evolution et TronChat n'ont pas reçu le succès escompté, mais cela démontre et renforce la présence d’Elliot dans le milieu, et cela depuis 2018.`,
      linkedin: "https://www.linkedin.com/in/elliot-wainman-67451484/",
    },
    {
      img: TClancy,
      name: "Tim Clancy",
      position: ["Lead Developper chez SuperFarm"],
      description: `Tim a débuté très tôt dans le monde du web3 (Ethereum, NFT & gaming). Avant SuperFarm, Tim a co-fondé VINCI VR, une plateforme de formation en réalité virtuelle. Il a 8 ans d'expérience en développement de logiciels, y compris des stages de 4 mois chez Amazon Robotics et EA.`,
      linkedin: "https://www.linkedin.com/in/tim-clancy/",
    },
    {
      img: MCaplan,
      name: "Marty Capla",
      position: ["Chef du secteur de jeux blockchain chez Amber"],
      description: `Chez Amber, Marty a aidé à intégrer de nombreux développeurs jeux vidéos à l'équipe Impostors.  Avec plus de 20 ans d'expérience dans l'industrie du jeu, il a livré de nombreux titres. Avant Amber, il a travaillé chez SEGA (producteur), EA (producteur), Playstudios (producteur senior), Zynga (producteur senior) et plus encore.`,
      linkedin: "https://www.linkedin.com/in/martinhuntercaplan/",
    },
    {
      img: DPrate,
      name: "Daniel Prat",
      position: ["Directeur de jeu chez Amber"],
      description: `Vétéran de l'industrie du jeu de plus de 10 ans. Il a travaillé pour JumpStart Games pendant 8 ans à différents postes, du développeur de jeux jusqu'au directeur de production. JumpStart Games est la société derrière NeoPets, un site d’animaux virtuels qui a eu des dizaines de millions d'utilisateurs au début des années 2000.`,
      linkedin: "https://www.linkedin.com/in/daniel-prate-3b347391/",
    },
  ];

  return (
    <div className="max-w-8xl md:max-w-6xl mx-4 md:mx-12 mt-8 md:mt-0">
      <div className="space-y-6">
        <div
          className="text-lg md:text-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="md:leading-7 lg:leading-9">
            Certains des 30 membres de l'équipe sont doxxés. Cette équipe
            d'ingénieurs et de builders a de l'expérience dans ce domaine car
            certains de ses membres ont travaillé dans des studios AAA tels
            qu'Epic Games, Roblox, Pixar et d’autres. L'équipe de SuperFarm
            utilise les services d’un studio de jeux vidéos appelé Amber Studio
            pour aider à développer IMPOSTORS.
          </p>
        </div>

        <div className="md:flex flex-wrap">
          {team.map((t, i) => {
            const { img, name, position, description, linkedin } = t;

            return (
              <div
                key={i}
                className={`pb-8 mx-auto w-full md:w-1/2 py-4 cursor-pointer ${
                  showDescr[i] && "md:my-auto"
                } text-center `}
                onClick={() => toggleDesciption(i)}
              >
                <img
                  className={`rounded-full mb-4 mx-auto border-solid border-2 border-blue-100 ${
                    showDescr[i] && "md:hidden"
                  } transform hover:scale-105 transition duration-700 ease-out`}
                  src={img}
                  width="200"
                  height="200"
                  alt={name}
                />

                <div
                  className="flex flex-col space-y-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <p className="text-xl mx-auto">{name}</p>
                  <div className="text-sm text-blue-100 mx-auto">
                    {position.map((p) => {
                      return <p>{p.toUpperCase()}</p>;
                    })}
                  </div>
                  <AiOutlinePlus
                    size={30}
                    className={`hidden ${
                      !showDescr[i] && "md:flex"
                    }  mx-auto text-blue-100`}
                  />
                </div>

                <div
                  className={`flex flex-col my-auto ${
                    !showDescr[i] && "md:hidden"
                  } space-y-2`}
                >
                  <div
                    className="text-base  mb-1 px-8 pt-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {description}
                  </div>
                  <a href={linkedin} className="mx-auto" target="_blank">
                    <GrLinkedin className="mx-auto" size={25} />
                  </a>
                  <AiOutlineMinus
                    className="hidden md:flex mx-auto text-blue-100"
                    size={30}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
