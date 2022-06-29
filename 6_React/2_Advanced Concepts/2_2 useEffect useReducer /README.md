Content:

- Working with Side Effects
- Managing more Complex State with Reducers
- Managing App-wide or component-wide State With Context

------------------------------------------------------------------------------------

- Effect or Side Effect
Anything Else that might happen in our app that is not strictly related to React
Store Data in browser Storage
Send Http request to Backend Servers
Set and Manage Timers, etc

To handle Side effects, React have a hook: useEffect()

useEffect (()=>{...}, [dependencies])

UseEffect uses 2 Arguments:
* A function that should be executed AFTER every component evalutation IF the specified dependencies changed (Side effect function)
* Dependencies of this effect  the function only runs if the dependencies changed (Dependencies of your function)

Example:

useEffect (() => {
    const isLoggedIn = localStorage.getItem('IsLoggedIn');

    if (isLoggedIn === '1') {
        setLoggedIn(true)
    }

}, [])

Dependencies
useEffect (() => {
    setFormatIsValid (
        enteredEmail.includes() && enteredPassword.trim().length > 6
    );
}, [enteredEmail,enteredPassword])

<!--Dependencies make your code evaluate the properties you pass into the array dependencies, this means this useEffect will run 
in every load just if any dependency changes, otherwise it won't run*/-->

What to add & Not to add as Dependencies
In the previous lecture, we explored useEffect() dependencies.

You learned, that you should add "everything" you use in the effect function as a dependency - i.e. all state variables and functions you use in there.

That is correct, but there are a few exceptions you should be aware of:

You DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)

You also DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change

You also DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

So long story short: You must add all "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered. That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!

Here's a made-up dummy example to further clarify the above-mentioned scenarios:

import { useEffect, useState } from 'react';
 
let myTimer;
 
const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
 
  const { timerDuration } = props; // using destructuring to pull out specific props values
 
  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};
In this example:

timerIsActive is added as a dependency because it's component state that may change when the component changes (e.g. because the state was updated)

timerDuration is added as a dependency because it's a prop value of that component - so it may change if a parent component changes that value (causing this MyComponent component to re-render as well)

setTimerIsActive is NOT added as a dependency because it's that exception: State updating functions could be added but don't have to be added since React guarantees that the functions themselves never change

myTimer is NOT added as a dependency because it's not a component-internal variable (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) wouldn't cause the component to be re-evaluated

setTimeout is NOT added as a dependency because it's a built-in API (built-into the browser) - it's independent from React and your components, it doesn't change


- Clean up Function

useEffect (() => {
    const identifier = setTimeout(() => {
        setFormatIsValid (
            enteredEmail.includes() && enteredPassword.trim().length > 6
        );
    }, 500)
    return () => {
        clearTimeout(identifier);       /*This works before Unmount*/
    }
}, [enteredEmail,enteredPassword])

<!---------------------------------------------------------------------------------------------------------------useReducer-->

useReducer();

Sometimes you have more complex state for example if it got multiple states, multiple ways of changing it or dependencies to other states
useReducer is a replacement if you need more powerful state managment


const [state,dispatchFn] = useReducer(reducerFn, initialState, intiFn)

- state = The state snapshot used in he component re-render re-evaluation cycle
- dispatchFn = A function that can be used to dispatch a new action
- reducerFn = A function taht is triggered automatically once an action is dispatched via dispatchedFn it receives the latest state snapshot and should return the new updated state
- initialState = The initial state
- initFn = A function to set the initial state programatically

Example:
import {useReducer} from 'react';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes()} 
    }
    return {value: '', isValid: false}
}

const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: false});

To use them
emailState.value
emailState.isValid

const emailChangeHandler = event => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
}

- useReducer and useEffect:

const { isValid: emailIsValid } = emailState;   /* It renames the property*/
const { isValid: passwordIsValid } = passwordState;

useEffect (() => {
    const identifier = setTimeout(() => {
        setFormatIsValid (
            emailIsValid && passwordIsValid
        );
    }, 500)
    return () => {
        clearTimeout(identifier);       /*This works before Unmount*/
    }
}, [emailIsValid,passwordIsValid])

- Adding Nested Properties As Dependencies To useEffect
In the previous lecture, we used object destructuring to add object properties as dependencies to useEffect().

const { someProperty } = someObject;
useEffect(() => {
  // code that only uses someProperty ...
}, [someProperty]);
This is a very common pattern and approach, which is why I typically use it and why I show it here (I will keep on using it throughout the course).

I just want to point out, that they key thing is NOT that we use destructuring but that we pass specific properties instead of the entire object as a dependency.

We could also write this code and it would work in the same way.

useEffect(() => {
  // code that only uses someProperty ...
}, [someObject.someProperty]);
This works just fine as well!

But you should avoid this code:

useEffect(() => {
  // code that only uses someProperty ...
}, [someObject]);
Why?

Because now the effect function would re-run whenever ANY property of someObject changes - not just the one property (someProperty in the above example) our effect might depend on.

- useState vs useReducer

Generally you'll know when you need useReducer, when useState becomes cumbersome or youre getting a lot of bugs unintented behavior

* useState
        The main state managment "tool"
        Great for independent pieces of State/data
        Great if store update are easy and limited to a few kinds of updates

* useReducer
        Great if you need more power
        Should be considered if yu have related pieces of state/data
        Can be helpful if you have more complex state updates