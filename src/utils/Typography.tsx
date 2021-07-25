interface SizeProps{
  applicationTitle: number;
  name: number;
  filterTitle: number;
  decription: number;
  pokemonNumber: number;
  pokemonTyoe: number;
}

export const Size:SizeProps = {
  applicationTitle: 32,
  name: 26,
  filterTitle: 16,
  decription: 16,
  pokemonNumber: 12,
  pokemonTyoe: 16,
}

interface WeightProps{
  applicationTitle: string;
  name: string;
  filterTitle: string;
  decription: string;
  pokemonNumber: string;
  pokemonTyoe: string;
}

export const Weight:WeightProps = {
  applicationTitle: 'bold',
  name: 'bold',
  filterTitle: 'bold',
  decription: 'regular',
  pokemonNumber: 'bold',
  pokemonTyoe: 'medium',
}
