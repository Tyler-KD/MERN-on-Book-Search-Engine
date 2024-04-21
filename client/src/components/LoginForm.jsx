// see SignupForm.js for comments
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

// import { loginUser } from '../utils/API';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


// Component for logging in a user
const LoginForm = () => {
  // A mutation function returned by useMutation that will be used to execute the LOGIN_USER mutation.
  const [ loginUser, { error }] = useMutation(LOGIN_USER);
  // An object that stores the user's email and password.
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  // A boolean that indicates whether the form has been validated.
  const [validated] = useState(false);
  // A boolean that controls the visibility of an alert message.
  const [showAlert, setShowAlert] = useState(false);

  // This function updates userFormData when the user types into the form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // This function is called when the user submits the form.
  // It prevents the default form submission, checks if the form is valid, and then attempts to log in the user using the loginUser mutation.
  // If the login is successful, the user is authenticated using Auth.login.
  // If there's an error, an alert is shown.
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({ variables: { ...userFormData }, } );

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
