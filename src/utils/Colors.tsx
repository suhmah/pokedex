
interface ColorsProps {
  white: string;
  black: string;
  gray: string;
  textNumber: string;
  backgroundDefaultInput: string;
  backgroundPressedInput: string;
  backgroundModal: string;
  type: {
    typeBug: string;
    typeDark: string;
    typeDragon: string;
    typeElectric: string;
    typeFairy: string;
    typeFighting: string;
    typeFire: string;
    typeFlying: string;
    typeGhost: string;
    typeGrass: string;
    typeGround: string;
    typeIce: string;
    typeNormal: string;
    typePoison: string;
    typPsychic: string;
    typeRock: string;
    typeSteel: string;
    typeWater: string;
  };
  backgorundType: {
    typeBug: string;
    typeDark: string;
    typeDragon: string;
    typeElectric: string;
    typeFairy: string;
    typeFighting: string;
    typeFire: string;
    typeFlying: string;
    typeGhost: string;
    typeGrass: string;
    typeGround: string;
    typeIce: string;
    typeNormal: string;
    typePoison: string;
    typPsychic: string;
    typeRock: string;
    typeSteel: string;
    typeWater: string;
  }
  gradient?: {
    vector: {
      top: string;
      bottom: string;
    };
    pokeball: {
      top: string;
      bottom: string;
    };
    vectirGray: {
      top: string;
      bottom: string;
    };
    pokeballGray: {
      top: string;
      bottom: string;
    };
  }
}

export const Colors: ColorsProps = {
  white: "#ffff",
  backgroundDefaultInput: "#F2F2F2",
  backgroundPressedInput: "#E2E2E2 ",
  backgroundModal: "rgba(0, 0, 0, 0.25);",
  black: '#17171B',
  gray: '#747476',
  textNumber: 'rgba(23, 23, 27, 0.6)',
  gradient: {
    vector: {
      top: 'rgba(255, 255, 255, 0.3)',
      bottom: 'rgba(255, 255, 255, 0.3)'
    },
    pokeball: {
      top: '#F5F5F5',
      bottom: '#FFFFFF'
    },
    vectirGray: {
      top: '#E5E5E5',
      bottom: 'rgba(245, 245, 245, 0)'
    },
    pokeballGray: {
      top: '#ECECEC',
      bottom: '#F5F5F5'
    },
  },
  type: {
    typeBug: '#8CB330',
    typeDark: '#58575F',
    typeDragon: '#0F6AC0',
    typeElectric: '#EED535',
    typeFairy: '#ED6EC7',
    typeFighting: '#D04164',
    typeFire: '#FD7D24',
    typeFlying: '#748FC9',
    typeGhost: '#556AAE',
    typeGrass: '#62B957',
    typeGround: '#DD7748',
    typeIce: '#61CEC0 ',
    typeNormal: '#9DA0AA',
    typePoison: '#A552CC',
    typPsychic: '#EA5D60',
    typeRock: '#BAAB82 ',
    typeSteel: '#417D9A',
    typeWater: '#4A90DA',
  },
  backgorundType: {
    typeBug: '#8BD674',
    typeDark: '#6F6E78',
    typeDragon: '#7383B9',
    typeElectric: '#F2CB55',
    typeFairy: '#EBA8C3',
    typeFighting: '#EB4971',
    typeFire: '#FFA756',
    typeFlying: '#83A2E3',
    typeGhost: '#8571BE',
    typeGrass: '#8BBE8A',
    typeGround: '#F78551',
    typeIce: '#91D8DF ',
    typeNormal: '##B5B9C4',
    typePoison: '#9F6E97',
    typPsychic: '#FF6568',
    typeRock: '#D4C294 ',
    typeSteel: '#4C91B2',
    typeWater: '#58ABF6',
  }
}