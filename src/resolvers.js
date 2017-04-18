'use strict'

const nextPokemonId = () => ++pokemonId;

let pokemonId = 0;
let pokemons = [
  { id: nextPokemonId(), name: 'Pikachu', price: 1000, stock: 2 },
  { id: nextPokemonId(), name: 'Charmander', price: 1500, stock: 5 },
  { id: nextPokemonId(), name: 'Squirtle', price: 1200, stock: 15 },
];

const resolvers = {
    Query: {
        pokemons() {
            return pokemons;
        },
        pokemon(_, { id }) {
            return pokemons.filter(e => e.id == id)[0];
        }
    },
    Mutation: {
        createPokemon(_, { name, price, stock }) {
            const pokemon = { id: nextTaskId(), name, rpice, stock };

            pokemons.push(pokemon);

            return pokemon;
        },
        buyPokemon(_, { id, quantity }) {
            let pokemon = null;

            pokemons = pokemons.map(e => {
                if(e.id == id) {
                    if(e.stock >= quantity) {
                        e.stock = e.stock - quantity; 
                        pokemon = e;
                    } else {
                        throw new Error('Pokemon out of stock.');
                    }                                       
                }

                return e;
            });

            if (!pokemon) {
                throw new Error('Unexistent pokemon.');
            }

            const totalAmount = pokemon.price * quantity;
            const purchase = { totalAmount, quantity, pokemon };

            return purchase;            
        }
    }
};

module.exports = resolvers;