Context API

Content:
Using the React Context API


Component-wide behind the scenes stage Storage 
store
auth-context.js 

import React from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;

got to the App.js

return (
    <AuthContext.Provider 
        value={{
            isLoggedIn: isLoggedIn  /*This is related to a state using useState*/
        }}>
        content of my app
    </AuthContext.Provider>
)

To Change the state for isLoggedIn:

go to any Component and wrap it into 
This is one way to use the consumer
return (
    <AuthContext.Consumer>
    {(context) => {
        return (
        {context.isLoogedIn && 
            ..render whatever it comes if youre logged in...
        })
    }}
    </AuthContext.Consumer>
)

This is another way to use the consumer
import AuthContext
import {useContext} from 'react'
const Navigation = (props) => {
    const context = useContext(AuthContext);
}
return (
    <div>
        {context.isLoogedIn && 
            ..render whatever it comes if youre logged in...
        })
    </div>
)

- Making Context Dynamic:

go to the App.js

const logoutHandler = () => {

}

return (
    <AuthContext.Provider 
        value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler
        }}>
        content of my app
    </AuthContext.Provider>
)

- Learning Rules of Hooks
useState
useEffect
useReducer
useContext

Rules:

1. Only call react Hooks in react Functions, (React Components, custom Hooks)
2. Only call react hooks at the top level
    dont call them in nested functions
    don't call them in any block statements
3. Always add everything you refer to inside as a dependency

- Another hook

input.js
Import { useImperativeHandle } from 'react';
const Input = React.forwardRef((props, ref) = > {            /*This "ref" is put from outside*/
    const inputRef = useRef();
    const activate = () => {
        inputRef.current.focus();           /*to focus on the input*/
    };
    useImperativeHandle(ref, () =>{
        return {
            focus: activate             /*This is done to be used outside the function*/
        }
    })
    return (
        <div>
            <form>
                <label>{props.label}</label>
                <input
                ref={inputRef}
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    onChange={props.emailChangeHandler}
                />
            </form>
        </div>
    )
});

export default Input

now to call "focus: activate" from outside the component

import {useRef} from 'react':

const emailInputRef = useRef();
const passwordInputRef = useRef();
const submitHandler = (event) => {
    emailInputRef.current.focus()
}
return (
    ....
    <Input
        ref={emailInputRef}
    >
    </Input>
    ...
)