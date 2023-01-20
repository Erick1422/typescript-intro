
export const pokemonIds = [1, 20, 30, 35, 66];

// Funciona debido a que ts convierte el código (transpila) en js haciendo que sea permitido
// pokemonIds.push('sAAA');

// Las interfaces se usan para validar que clases u objetos contengan dichas propiedades
// Al transpilar a js, el reemplazo de las interfaces es ""
interface Pokemon {
    id: number,
    name: string,
    age?: number
}

export const pikachu: Pokemon = {
    id: 1,
    name: 'Picachu',
    age: 12
}

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander'
}

export const pokemons: Pokemon[] = [];
pokemons.push(charmander, pikachu);

console.log(pokemons);