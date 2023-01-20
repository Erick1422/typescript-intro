// Los decoradores no son más que simples funciones
// Hay decoradores de clases, métodos, propiedades...

class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() {
        console.log(`Método scream!`)
    }

    speak() {
        console.log(`Método de speak`)
    }
}

// Los decoradores permiten enxpandir la funcionalidad de una clase
const MyDecorator = () => {
    // target se usa en los decoradores a nivel de clase
    return (target: Function) => {
        // console.log(target); // imprime la definición de la clase

        return NewPokemon; // Al realizar esto, se sobreescribe la clase
    } 
}

@MyDecorator()
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() {
        console.log(`${this.name.toLocaleUpperCase()}!!`)
    }

    speak() {
        console.log(`${this.name}, ${this.name}!!`)
    }
}

export const charmander = new Pokemon(4, 'Charmander');
charmander.scream()
charmander.speak()