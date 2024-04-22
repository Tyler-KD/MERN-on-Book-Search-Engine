// import { useState, useEffect } from 'react';

import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';

import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

// import { getMe } from '../utils/API';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

// Displays a list of books saved by the user.
const SavedBooks = () => {
  // The useQuery hook is used to bind the GET_ME query to this component.
  // GET_ME query fetches the user's data.
  // The loading and data variables are returned from the useQuery hook.
  // loading is a boolean that indicates whether the query is still in progress.
  // data is the data returned from the query
  const { loading, data } = useQuery(GET_ME);
  // const [userData, setUserData] = useState({});
  // The mutation hook is used to bind the REMOVE_BOOK mutation to this component.
  // REMOVE_BOOK mutation removes a book.
  const [deleteBook, { error }] = useMutation(REMOVE_BOOK);
  // userData is derived from data and represents the current user's data.
  const userData = data?.me || {};

  // Create function that accepts the book's mongo _id value as param and deletes the book from the database
  // It gets the authentication token, checks if the user is authenticated, and then sends a REMOVE_BOOK mutation request to remove the book.
  // If the request is successful, it removes the book's ID from local storage.
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await deleteBook({
        variables: { bookId },
      });
      console.log('Removed bookId:', bookId);
      // upon success, remove book's id from localStorage
      removeBookId(bookId);
    } catch (error) {
      console.error(error);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Container fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Container>
      <Container>
        <h2 className='pt-5'>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {userData.savedBooks.map((book) => {
            return (
              <Col md="4" key={book.bookId}>
                <Card key={book.bookId} border='dark'>
                  {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors}</p>
                    <Card.Text>{book.description}</Card.Text>
                    <Row>
                      <Col>
                        <Button target='_blank' rel='noreferrer' href={book.link}>Link</Button>
                      </Col>
                      <Col>
                        <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                          Delete this Book!
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedBooks;
