Testing React Apps

Automated Testing
Content:

- What is testing
- Unit Test
- Testing React Components and building Blocks

- What is testing

Manual Testing:
write code preview and test in browser
very importat: you see what your users will se
It's error -prone: it's hard to test all possible combinations and scenarios

Automated Testing:
write extra-code that runs and test your code
You test the individual building blocks of your app
It is very technical but allows you to test all building blocks all at once

- Different kinds of automated Tests:

* Unit Test:
  Test the individual building blocks (function components) in isolation
  Projects typically contain dozends of hundreds of unit test
  This is the most common important kind of test
  Also important, but focus on unit test in most cases

* Integration Test
  Test the combination of multiple building blocks
  Projects typically containe a couple of integration test

* End-to-end Test (e2e)
  Test complet scenarios in your app as the user would experience them
  Projects typically contains only a few e2e test
  Important but can also be done manually

- What to test and how
    What:
    Test the different building blocks 
    unit Tests: the smalles building blocks that make up your app

    How:
    Test success and error cases, also test reare but possible results


- Technical setup and involved tools
We need a tool for running our test and asserting the results 
we need a tool for simulating our react app/component

* Required tool: 
    running: JEST
    simulating: React Testing Library

They are installed automatically using create-react-app

- Example:
npx create-react-app some-name

-- src
    App.test.js
        import {render, screen} from '@testing-library/react';
        import App from './App';

        test('renders learn react link', ()=> {
            render(<App/>)
            const linkElement = screen.getByText();
            expect(linkElement).toBeInTheDocument()
        })

    setupTest.js

    App.js
    function () {
        return(
            <div>learn react</div>
        )
    }

npm test
Press a to run all test
Press f to run only failed test 
...
...

Running another test

Greeting.js

const Greeting = () => {
    return (
        <div>
            <h2>Hello World</h2>
        </div>
    )
}

Greeting.test.js
    import {render, screen} from '@testing-library/react';
    import Greeting from './Greeting

    test('renders Hello world as a text', ()=> {
        // Arrange
        render(<Greeting/>);

        // Act
        // ...

        // Assert
        const helloWorldElement = screen.getByText('Hello world', { exacts: false });
        expect(helloWorldElement).toBeInTheDocument()
    })

Writing tests - The three A's

Arrange -> setup the test data, test conditions and test enviroment

Act -> Run logic that should be tested 

Assert -> Compare execution results with expected results

- Grouping Test with Test suites

describe('Greeting Component', () => {
    test('renders Hello world as a text', ()=> {
        render(<Greeting/>);
        const helloWorldElement = screen.getByText('Hello world', { exacts: false });
        expect(helloWorldElement).toBeInTheDocument()
    })
})


- More Powerful test:

Greeting.js
import {useState } from 'react';
const Greeting = () => {
    const [changeText,setChangedText] = useState(false)
    const changetextHandler = () => {
        setChangedText(true);
    }
    return (
        <div>
            <h2>Hello World</h2>
            {!changedText && <p>It's good to see you</p>}
            {changedText && <p>changed</p>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )
}

Greeting.test.js
<Greeting/>
import {Greeting} from './Greeting'
import userEvent testing-library/UserEvent
describe('Greeting Component', () => {
    test('renders Hello world as a text', ()=> {
        render(<Greeting/>);
        const helloWorldElement = screen.getByText('Hello world', { exacts: false });
        expect(helloWorldElement).toBeInTheDocument()
    })
    test('renders "good to see you" if the button was not clicked', () => {
        render(<Greeting />)
        const outputElement = screen.getByText('good to see you, { exacts: false });
        expect(outputElement).toBeInTheDocument()
    });
    test('renders "changed" if the button was clicked', () => {
        //Arrange
        render(<Greeting />)
        // Act 
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
        //Assert
        const outputElement = screen.getByText('Changed', { exacts: false });
        expect(outputElement).toBeInTheDocument()
    });
    test('does not render "good to see you" if the button was clicked', () => {
        //Arrange
        render(<Greeting />)
        // Act 
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
        //Assert
        const outputElement = screen.getByText('good to see you', { exacts: false });
        expect(outputElement).not.toBeInTheDocument()
    });
})

- Testing connected Components

<Output>
Output.js

const Output = props => {
    return <p>{props.children}</p>
}
export default Output


Greeting.js
import {useState } from 'react';
import Output from './Output'
const Greeting = () => {
    const [changeText,setChangedText] = useState(false)
    const changetextHandler = () => {
        setChangedText(true);
    }
    return (
        <div>
            <h2>Hello World</h2>
            {!changedText && <Output>It's good to see you<Output>}
            {changedText && <Output>changed</Output>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )
}

- Testing Asynchronous code:
<Async>
Async.js

const Async = () => {
    const [posts,setPosts] = useState([]); 
    useEffect(()=> {
        fetch('url')
        .then(response => response.json)
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <ul>
                {posts.map((posts) => (
                    <li key={post.id}>{post.name}</li>
                ))}
            <ul>
        </div>
    )
}

Async.test.js

describe('Async Component', () => {
    test('renders posts if request succeds', async()=> {
        render(<Async/>);
        const listItemElements = await screen.findAllByRole('listitem');
            //find querys return a promise insted of get querys, for which is better to use them on async test
        expect(listItemElements).not.toHaveALength(0);
    })
}

- Working with Mocks
use dummy function to simulate fetch

describe('Async Component', () => {
    test('renders posts if request succeds', async()=> {
        window.fetch = jest.fn();
        window.fetch.mockResolveValueOnce({
            json: async () => [...data...] // This is to simulate data that will be returned from the API
        });
        render(<Async/>);
        const listItemElements = await screen.findAllByRole('listitem');
            //find querys return a promise insted of get querys, for which is better to use them on async test
        expect(listItemElements).not.toHaveALength(0);
    })
}

- Important tools:
Jest








