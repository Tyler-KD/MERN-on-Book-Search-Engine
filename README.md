# MERN on Book Search Engine

![GitHub License](https://img.shields.io/badge/license-MIT-default.svg)

## Description

MERN on Book Search Engine is a fully functioning Google Books API search engine built with a RESTful API, and refactored to be a GraphQL API built with Apollo Server.  This project was built to practice the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.  It solves the problem of wanting to search for new books to read so that a list of books can be saved to purchase.  Some things learned throughout MERN on Book Search Engine were understanding the convenience of having mutations that modify the data on the server so that the client can learn about those modifications, input type in a GraphQL schema is a special object type that groups a set of arguments together and can then be used as an argument to another field, ApolloProvider wraps the application and places the client on the context allowing access to it from anywhere in the component tree, and useEffect is a convenient React hook that can save objects to local storage.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Video](#video)
* [Deployed Site](#deployed-site)
* [Credits](#credits)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Features](#features)
* [Questions](#questions)

## Installation

Within the main directory, install dependencies by running "npm i' within the terminal of the main directory.  This will install all the necessary dependencies needed for React, Vite, and Apollo Server to run.  Then, connect to the client with the command "npm run start."  Connect to both the API Server running on client-side and GraphQL running on server-side by running "npm run develop" within the terminal.

## Usage

To run this application from the terminal, enter "npm run start" to start the server.  The message "Local: http://localhost:3000" will display within the console.  Vite will instantly start the server using the current working directory as a root.  Once the application is loaded, a homepage will be displayed containing a search bar for searching books and a navigation bar featuring "Search For Books" and "Login/Sign Up" links.  

When logged out, enter a title or author in the "Search for Books!" field and click "Submit Search."  A new page will open with several search results, each featuring a book's title, author, description, image, and a "Link" button link to that book on the Google Books site.  After clicking on the Login/Sign Up menu option, a modal appears on screen with a toggle between the option to Login or Sign Up.  When the toggle is set to Sign Up, inputs for unsername, email, and password are displayed with a "Submit" button.  When the toggle is set to Login, inputs for email and password are displayed with a "Submit" button.  An account will be created and logged into after entering a username, valid email, password, and clicking "Submit."  

Once logged in, the modal dissapears and navigation links for "Search for Books" and "See Your Books" appears as well as "Logout."  Searching for title or author while logged in opens up a page with the same search results as before with the added "Save this Book!" button.  When clicking "Save this book!," that book's information is saved to the account denoted by the button now displaying "This book has already been saved!"  Clicking "See Your Books" brings up a Saved Books page with all of the books saved to the account, each featuring the same results from the Search Books page.  To remove a book from the Saved Books list, click the "Delete this Book!" button.  When finished with session, click "Logout" from the navigation bar.

For usage instructions with the deployed application using Render, follow the previous instructions after the application is loaded.

**Attached is a screenshot of the application Homepage:**

![Homepage](/public/assets/MERN%20on%20Book%20Search%20Engine%20-%20Homepage.png)

**Attached is a screenshot of the application Login/Sign Up Modal:**

![Login/Sign Up Modal](/public/assets/MERN%20on%20Book%20Search%20Engine%20-%20Login%20&%20Sign%20Up%20Modal.png)

**Attached is a screenshot of the application Search Books page:**

![Search Books page](/public/assets/MERN%20on%20Book%20Search%20Engine%20-%20Search%20Books%20page.png)

**Attached is a screenshot of the application Saved Books page:**

![Saved Books page](/public/assets/MERN%20on%20Book%20Search%20Engine%20-%20Saved%20Books%20page.png)

## Video

N/A

## Deployed Site

[MERN on Book Search Engine](https://mern-on-book-search-engine.onrender.com)

## Credits

[How to Get Started with GraphQL and Node.js](https://www.freecodecamp.org/news/get-started-with-graphql-and-nodejs/)

[Mutations and Input Types | GraphQL](https://graphql.org/graphql-js/mutations-and-input-types/)

[Introduction to Apollo Client](https://www.apollographql.com/docs/react/)

[Mutations in Apollo Client](https://www.apollographql.com/docs/react/data/mutations/)

[Volume | Google Books APIs](https://developers.google.com/books/docs/v1/reference/volumes)

[Buttons | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/buttons/)

## Contributing

N/A

## License

MIT License

Copyright (c) 2024 Tyler-KD

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

* (https://choosealicense.com/licenses/mit/)

## Tests

N/A

## Features

react 18.2.0, react-dom 18.2.0, react-router-dom 6.22.3, @types/react 18.2.66,
@types/react-dom 18.2.22, @vitejs/plugin-react 4.2.1, @apollo/server 4.10.4, apollo-server-express 3.13.0, 
@apollo/client 3.9.11, bcrypt 4.0.1, express 4.17.1, jsonwebtoken 8.5.1, bootstrap 5.2.3, 
graphql 16.8.1, jwt-decode 3.1.2, react-bootstrap 2.7.4, mongoose 7.0.2, vite 5.1.6  
    
## Questions

If you have any questions, please visit [GitHub/Tyler-KD](https://github.com/Tyler-KD) or submit questions to tyler.kd.knapp@gmail.com.