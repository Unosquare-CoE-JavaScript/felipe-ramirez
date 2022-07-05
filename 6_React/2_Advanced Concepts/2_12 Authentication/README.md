Authentication to React Apps

Content
- How Auth works in React Apps
- Implementing User Authentication
- Adding auth Persistence and Auto-logout


Getting Permission
Server-side Sessions
    - Store unique identifier on server, send same identifier to client
    - Client sends identifier along with request to protected resources
Authentication Tokens
    - Create but not store permission token on server, send token to client
    - Client sends token along with requests to protected resources

When working with "Authentication Tokens", these tokens are typically created in the "JSON Web Token" Format (JWT).

As explained in the previous lecture, those "tokens" are really just long strings which are constructed by an algorithm that encodes data into a string (with help of a private key, only known by the server).

You can learn more about JSON Web Tokens (JWTs) here: https://jwt.io/


- Example Project
Auth using Firebase
Firebase auth rest api

- 
An option to manage session in React is using React Context

To Protect Frontend Pages, use Navigation Guards

App.js

import { usecontext } from 'react';

import AuthContext

function App() {
    const autCtx = useContext(AuthContext)
    return (
        <Layout>
        <Switch>
        <Route path='/' exact>
            <HomePage>
        </Route>
        {authCtx.isLoggedIn && (<Route path='/' exact>
            <UserProfile>
        </Route>}
        <Route path='*'>
            <Redirect to='/' />
        <Route>
        </Switch>
        </Layout>
    )
}

- Persisting the user Authentication Status
https://academind.com/tutorials/localstorage-vs-cookies-xss











