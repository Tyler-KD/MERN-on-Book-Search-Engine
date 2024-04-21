import { gql } from '@apollo/client';

// Authenticates a user.
// email and password as input parameters.
// If the login is successful, it returns a token and the user's details (ID and username).
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

// Create a new user.
// username, email, and password as input parameters.
// If the user is successfully created, it returns a token and the new user's details (ID and username).
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Add a book to a user's saved books.
// input as input parameter.
// If the book is successfully saved, it returns the user's details (username, email, bookCount) and the list of saved books.
export const SAVE_BOOK = gql`
mutation saveBook($input: BookInput!) {
    saveBook(input: $input) {
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

// Remove a book from a user's saved books.
// bookId as input parameter.
// If the book is successfully removed, it returns the user's details (username, email, bookCount) and the updated list of saved books.
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
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