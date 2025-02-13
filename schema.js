const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Movie type definition
  type Movie {
    id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  # Input type for creating a new movie
  input MovieInput {
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  # Input type for updating a movie
  input MovieUpdateInput {
    name: String
    director_name: String
    production_house: String
    release_date: String
    rating: Float
  }

  # Query type - defines what data can be retrieved
  type Query {
    # Get all movies
    movies: [Movie!]!
    # Get a specific movie by ID
    movie(id: ID!): Movie
  }

  # Mutation type - defines what data can be modified
  type Mutation {
    # Create a new movie
    createMovie(movie: MovieInput!): Movie!
    # Update an existing movie
    updateMovie(id: ID!, movie: MovieUpdateInput!): Movie!
    # Delete a movie
    deleteMovie(id: ID!): Movie
  }
`;

module.exports = typeDefs;