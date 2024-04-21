import { gql } from '@apollo/client';

// Sends a request to the GraphQL server to fetch the specified data for the currently authenticated user.
// The me field in the query represents the currently authenticated user.
// the savedBooks field is an array of book objects.
// The returned data can then be used to display a list of the user's saved books.
export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            authors
            description
            bookId
            image
            link
            title
        }
    }
}
`;