Class based Components:

Content

- what and why
- working with class based components
- error Boundaries

class Product extends Component {
    render () {
        return <h2></h2>
    }
}

before React <16.8 you had to use class-based components to manage state, React 16.8 introduced React Hooks for Functional Component

Class-based components can't use React Hooks

Example:

import { Component } from 'react'

class User extends Component{

    render () {
        return <li>{this.props.name}</li>
    }
};

- State and Events

import { Component } from 'react'
class Users extends Component{

    constructor () {
        super();
        this.state = {
            showUsers: true,
            moreStates: 'anyvalue'
        };
    }

    nameOfMethod () {
        this.setState((curState) => {
            return { showUsers: !curState.showUsers}
        })
    }

    render () {
        return <div></div>
    }
};

- Lifecycle

componentDidMount();    --> called once the component is mounted eq. to useEffect(()=>{},[])
componentDidUpdate();   --> Called once the component updated eq. to useEffect(() => {}, [someValue])
componentWillUnmount(); --> Called rigth before component is unmounted eq. to useEffect(return () =>{}, [])

- Class-based Components and Context:

class UserFinder extends Component {
    static contextType = usersContext;
}

- Error Boundaries

componentDidCatch








Important Refs:

THIS Keyword
https://academind.com/tutorials/this-keyword-function-references