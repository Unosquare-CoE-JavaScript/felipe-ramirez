<!------------------------------------------------------------------------------------------------------------------------------>Redux
Tags:
Redux Basics and Redux using react
Redux Toolkit

✅ ————————————————What is Redux ————————————————
Cross-component App-wide State

Local state -->
State that belongs to a single component
should be managed with useState and useReducer

Cross-component -->
state that affects multiple components
Requires props chains / props drilling
React Context or Redux

App-wide State
state that affect the entire app (most/all components)
Requires props chains/props drilling
React Context or Redux

✅ ———————————————— React Context Vs Redux ————————————————

1. React Context Potential Disadvantages
Complex setup / Managment
Performance
React Context is not optimized for high frequency state changes
In more complex apps managing React Context can lead to deeply nested JSX code and or huge "Context Provider" components

2. How Redux Works

One Central Data (state) Store
We can use it inside our Components through Subscriptions
Reducer Function is responsible for Mutates /changes Store data (Not the same as useReducer Reducer Functions are General concepts)
Component DISPATCH Action (JS object that describes the kind of operation that mutates store data)

✅ ———————————————— Core Redux Concepts ————————————————

const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }

    return state;
};
// Inputs: Old State + Dispatched Action
// Output New State Object
// Must be a Pure function --> Same input leads to same output

const store = redux.createStore(counterReducer);

const counterSuscriber = () => {
    const latestState = store.getState();
};

store.suscribe(counterSuscriber);

store.dispatch({type: 'increment' });
store.dispatch({type: 'decrement' })


✅ ———————————————— React with Redux ————————————————

npm install redux
npm install react-redux

new Folder: store
new File: index.js

import {createStore} from 'redux';

const counterReducer = (state = { counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter -1
        }
    }
    return state
};

const store = createStore(counterReducer);

export default store;

Go to index.js (main file)

import {Provider} from 'react-redux'
import store from './store/index.js '

const root = ...
root.render(<Provider store={store}><App /></Provider>)

Go to Any Component
Example: <Counter />

import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const incrementHandler = () => {
        dispatch({type: 'increment'})
    };
    const decrementHandler = () => {
        dispatch({type: 'decrement'})
    };
    const toggleCounter = () => {};
    return (
        <main>
            <h1>Redux Counter</h1>
            <div>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounter}>Toggle Counter</button>
        </main>
    )
}

✅ ———————————————— Attaching Payloads to actions ————————————————

Go to store
const counterReducer = (state= {counter: 0}, action) => {
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount
        }
    }
}


Into the component
const increaseHandler = () => {
    dispatch ({type: 'increase', amount: 5})
}

- Working with multiple States and components

const show = useSelector(state => state.showToggle);

 const toggleHandler = () => {
     dispatch({type: 'toggle'})
 };

 go to the store 

const counterReducer = (state= {counter: 0}, action) => {
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showToggle: !state.showToggle
        }
    }
}

Note: 
Action Types can be very hard coded
Manage State might become a problem because you always have to rewrite the entire object
 

✅ ———————————————— Redux Toolkit ————————————————
<Link>
https://redux-toolkit.js.org
</Link>

npm install redux-toolkit

go to Store/index.js

import { configureStore} from 'reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0, showCounter: true},
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});



const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
    // or
    reducer : counterSlice.reducer
});

export const counterActions = counterSlice.actions

export default store;

now we go to the component

<Counter>

import {counterActions} from 'index.js'

const incrementHandler = () => {
    dispatch(counterActions.increment());
};

const decrementHandler = () => {
    dispatch(counterActions.decrement());
}

const increaseHandler = () => {
    dispatch(counterActions.increase(5));
}

✅ ———————————————— Working with multiple Slices: ————————————————

on Store/index.js


const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuthenticated: false},
    reducers: {
        login(state) {
            state.isAuthenticated: true
        },
        logout(state) {
            state.isAuthenticated: false
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const authActions = authSlice.actions;

export default store;

now go the component:

const counter = useSelector(state => state.counter.counter)


function App() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    return (
        <Fragment>
            {!isAuth && <UserProfile />}
        </Fragment>
    )
}

to dispatch Login Actions:

<Login />

import useDispatch
import {authActions} from 'store'
const Login = () =>  {
    const dispatch = useDispatch();

    const loginHandler = () => {
        event.preventDefault();
        dispatch(authActions.login());
    };

    return (
        <form onSubmit={loginHandler}>
        </form>
    )
}

✅ ———————————————— Split Our code: ————————————————

/store

counter.js
All counterSlice goes here

export const counterActions = cunterSlice.actions;

export counterSlice.reducer

Auth.js
All authSlice goes here
export const authActions = authSlice.actions

export authSlice

and then on index.js

import counterReducer from './counter';
import authReducer  from './auth'


const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export default store

And in every component, import actions from every single file

<!------------------------------------------------------------------------------------------------------------------------------>Advanced Redux


✅ ———————————————— Side Effects, async Tasks and Redux ————————————————

Reducers must be pure, side-effect free and synchronous functions

Where should side-effects and async tasks be executed?

Inside the components

Inside the actions creators

✅ ———————————————— Redux and Async Code ————————————————

You can't use request inside a reducers nor impure functions

- Inside the components & Inside Action Creators

instead of using async code in Reducers, do all the heavy work in Reducers

✅ ———————————————— THUNKS ————————————————

A function that delays an action until later
an action creator function that does not return the action itself but another function which eventually return the action

✅ ———————————————— Redux Devtools ————————————————

<Link>
https://github.com/academind/react-complete-guide-code/tree/19-advanced-redux
</Link>










