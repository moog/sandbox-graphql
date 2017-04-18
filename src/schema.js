'use strict'

const schema =  `
    type Pokemon {
        id: Int!
        name: String!
        price: Int!
        stock: Int!
    }

    type Purchase {
        totalAmount: Int!,
        quantity: Int!,
        pokemon: Pokemon!
    }

    type Query {
        pokemons: [Pokemon]
        pokemon(id: Int!): Pokemon
    }

    type Mutation {
        createPokemon(name: String!, price: Int!, stock: Int!): Pokemon
        buyPokemon(id: Int!, quantity: Int!): Purchase
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;

module.exports = schema;