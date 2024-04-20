const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

// Resolvers are functions that provide the instructions for turning a GraphQL operation into data.
// They resolve the query to data by defining how the types and fields in the schema are connected to back-end data sources.
const resolvers = {
    Query: {
        // Returns the data of the currently authenticated user
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id })
            }
            throw AuthenticationError;
        },
    },

    Mutation: {
        // Creates a new user with provided username, email, and password,
        // then returns a signed token and the user data.
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        // Authenticates a user with the provided email and password
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        // Adds a book to the authenticated user's savedBooks array
        saveBook: async (parent, { book }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: {savedBooks: book} },
                    { new: true }
                ) 
                return updatedUser;
            }
            throw AuthenticationError;
        },
        // Removes a book from the authenticated user's savedBooks array by the book's ID
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true }
                )
                return updatedUser;
            }
            throw AuthenticationError;
        },
    }
}

module.exports = resolvers;