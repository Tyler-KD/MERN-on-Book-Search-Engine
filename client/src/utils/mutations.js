import { gql } from '@apollo/client';

// Authenticates a user
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

// Create a new user
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

// Add a book to a user's saved books
export const SAVE_BOOK = gql`
mutation saveBook($book: SavedBookInput!) {
    saveBook(book: $book) {
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

// Remove a book from a user's saved books
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
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