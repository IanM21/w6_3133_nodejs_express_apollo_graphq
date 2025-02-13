const Movie = require('./models/Movie');

const resolvers = {
    Query: {
        // Get all movies
        movies: async () => {
            try {
                const movies = await Movie.find({});
                return movies;
            } catch (error) {
                throw new Error(error);
            }
        },

        // Get movie by ID
        movie: async (_, { id }) => {
            try {
                const movie = await Movie.findById(id);
                if (!movie) {
                    throw new Error('Movie not found');
                }
                return movie;
            } catch (error) {
                throw new Error(error);
            }
        }
    },

    Mutation: {
        // Create a new movie
        createMovie: async (_, { movie }) => {
            try {
                const newMovie = new Movie(movie);
                const result = await newMovie.save();
                return result;
            } catch (error) {
                throw new Error(error);
            }
        },

        // Update a movie
        updateMovie: async (_, { id, movie }) => {
            try {
                const updatedMovie = await Movie.findByIdAndUpdate(
                    id,
                    { $set: movie },
                    { new: true, runValidators: true }
                );
                if (!updatedMovie) {
                    throw new Error('Movie not found');
                }
                return updatedMovie;
            } catch (error) {
                throw new Error(error);
            }
        },

        // Delete a movie
        deleteMovie: async (_, { id }) => {
            try {
                const deletedMovie = await Movie.findByIdAndDelete(id);
                if (!deletedMovie) {
                    throw new Error('Movie not found');
                }
                return deletedMovie;
            } catch (error) {
                throw new Error(error);
            }
        }
    }
};

module.exports = resolvers;