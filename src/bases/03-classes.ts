import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

/* export class Pokemon {

    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
} */

// Forma corta y común de crear una clase
export class Pokemon {

    // Modificadores de acceso (public, private, static, protected)
    constructor(
        // El readonly evita que se pueda cambiar el valor tanto dentro como fuera de la clase
        public readonly id: number,
        public name: string
    ) { }

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    public scream() {
        console.log(`${this.name.toUpperCase()}!`);
        this.speak();
    }

    // Solo se puede usar a nivel de clase
    private speak() {
        console.log(`${this.name}, ${this.name}`)
    }

    // cuando se ven los signos < > significa que es algo genérico
    // Facilita el entendimiento del código porque se coloca el tipo de dato
    public async getMoves(): Promise<Move[]> {
        // Es una forma de decir que cuando termine va a esperar ese tipo de dato
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        // Además, acá ayuda a completar a medida que vayamos escribiendo "data."
        return data.moves;
    }
}

export const charmander = new Pokemon(1, 'charmander');
console.log(await charmander.getMoves()); // await se puede por fuera de una async func por la v de node

// console.log(charmander.imageUrl);
// charmander.scream();
// charmander.speak();

// charmander.id = 12;
// charmander.name = 'new';