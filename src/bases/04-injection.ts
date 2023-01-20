// Tiene casi el mismo contenido que 03-classes.ts
import { HttpAdapter, pokeFetchApiAdapter, PokeAxiosApiAdapter } from '../api/pokeApi.adapter';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

// Se realiza una inyección de dependencia para que la clase no dependa directamente de un paquete
// Ej: Estamos usando axios y al querer cambiarlo por fetch estariamos modificando la clase, cosa que no se debería hacer
export class Pokemon {

    // Se podría decir que tanto id como nombre se inyectan en la clase, por eso las podemos usar con this
    constructor(
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdapter // De esta forma le decimos que no importa que clase se llame, lo importante es que implemente el adapter
    ) { }

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    public scream() {
        console.log(`${this.name.toUpperCase()}!`);
        this.speak();
    }

    private speak() {
        console.log(`${this.name}, ${this.name}`)
    }

    public async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);

        return data.moves;
    }
}

// Siguiendo los principios SOLID, y en especifico el principio Liskov, nuestra clase debería ser cambiada por otra teniendo en cuenta que usa el mismo método (get, en este caso)
const pokeAxiosApi = new PokeAxiosApiAdapter();
const pokeFechApi = new pokeFetchApiAdapter();

export const charmander = new Pokemon(1, 'charmander', pokeFechApi);

charmander.getMoves();