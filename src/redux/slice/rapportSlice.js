import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rapports: [
    {
        // type: [
        //   'play2earn',
        //   'JcJ'
        // ],
        title: 'Impostors',
        content: `Un jeu de détection sociale comme Among Us, mais avec une qualité graphique AAA et des mécanismes de P&E. Premier jeux dans un “social metaverse” qui comprendra aussi des mini jeux, comme “courses d’OVNI” “bataille d’animaux” et des modes de jeux créés par les utilisateurs.`,
        date: 'Mars 2023',
        image: impostors
    },
    {
        // type: [
        //     'play2earn',
        //     'JcJ'
        //   ],
        title: 'Sidus Heroes',
        content: 'Sidus Heroes est un métaverse sous la forme d’un univers de planètes qui représentent plusieurs genres de game plays comme “battle arena, FPS, tower defender et autres. Avec ses mécaniques P2E ce titre de qualité AAA avec une impressionnante équipe, à toutes les qualités pour s’imposer comme un des titres les plus innovateurs du cryptogaming.',
        image: sidus
    },
    {
        // type: [
        //     'play2earn',
        //     'JcJ'
        //   ],
        title: 'Treeverse',
        content: `Treeverse est un MMORPG en monde ouvert en vue de dessus ( Top down )  créé pour  mobiles avec des fonctionnalités d’intéractions sociales et une accentuation sur le jeu coopératif. Le titre a été révélé il y a un peu plus d'un an par la personnalité Loopify, très populaire dans le milieux NFT, qui se trouve aussi être à la tête du studio de développement de jeux Endless Clouds.`,
        image: treeverse
    },
    {
        // type: [
        //     'play2earn',
        //     'JcJ'
        //   ],
        title: 'Rooniverse',
        content: `Entrez dans le monde sauvage et tribal des Roos qui se battent à mort pour la gloire! Recueillez des ressources dans les différentes Lands, combattez avec vos amis et construisez votre propre localité dans le Rooniverse! Rooniverse est jouable sur iOS, Android, PC et Mac. Développé par XP Foundry.`,
        image: treeverse
    },
    {
        // type: [
        //     'play2earn',
        //     'JcJ'
        //   ],
        title: 'Stables',
        content: `Rejoignez un jeu de fantasy équestre passionnant et prouvez que vous avez ce qu'il faut pour sortir du lot. Adoptez votre propre cheval de course virtuel, affrontez d'autres joueurs et gagnez des récompenses pour devenir le meilleur performeur de la communauté. Un model à la DERACE, fait par une équipe principalement Française.`,
        image: treeverse
    },
    {
        // type: [
        //     'play2earn',
        //     'JcJ'
        //   ],
        title: 'Big Time',
        content: `Big Time est un jeu d'action-RPG multijoueur gratuit à jouer qui combine un combat rapide et une aventure à travers le temps et l'espace. Explorez les mystères antiques et les civilisations futuristes tout en vous battant à travers l'histoire. Ramassez des objets de collection digitaux rares et des token pendant que vous combattez et vainquez les ennemis.`,
        image: bigtime
    },

  ]
};

const authSlice = createSlice({
  name: "rapports",
  initialState,
  reducers: {
    SET_RAPPORTS: (state, action) => {
      // console.log(action.payload);
      const { email, userName, userID } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.userID = userID;
    }
  },
});

export const { SET_RAPPORTS } = authSlice.actions;

export const SelectRapports = (state) => state.auth.rapports;

export default authSlice.reducer;