<!------------------------------------------------------------------------------------------------------------------------------>React Testing Library

- Not just a library, also a philosophy
    - Test your software the way users actually use it
        - Not internal implementation
    - Find elements by accessibility markers, not testsIDs

✅ ———————————————— React Testing Lib Vs JEST ————————————————

React Testing Library
    Provides Virtual DOM for tests

JEST
    Test runner that
        find test
        Run test
        Determines wheter test pass or fail
    
✅ ———————————————— Getting Started ————————————————
npx create-react-app some-name

npm test

App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

render:
Create Virtual DOM for argument JSX
Acces virtual DOM via Screen global

screen.getByText():
Find element by display text

/learn react/i
Regular expression
case insensitive(i)
could be string 'Learn react'

expect()
asertion, causes test or fail


✅ ———————————————— JEST and JEST-DOM Assertions ————————————————

Assertions:
expect(linkElement).toBeIntheDocument()

expect:
Jest global, starts the assertion

Matcher:
Type of assertion
this matcher comes from JEST-DOM

expect argument
Subject of the assertion

matcher argument
Refines Matcher

Examples of more assertions:

expect(element.textContent).toBe('hello');
expect(eelmentsArray).toHaveLenght(7);

JEST-Dom:
Comes with create-react-app
DOM-based matchers

examples:
    toBeVisible() or toBeChecked

✅ ———————————————— JEST: ————————————————

React Testing Library helps with:
    rendeing components into virtual DOM
    Searching virtual DOM
    Interacting with virtual DOM
Nees a test runner
    find tests, run them, make assertions
JEST is recommended by testing library and it comes by default


✅ ————————————————JEST watch Mode ————————————————
Watch for changes in files since the last commit 
Only run tests related to these files

✅ ———————————————— How does JEST work ————————————————
global test method has two arguments
    * string description
    * test function
test Fail if error is throun when running function
    assertions throw errors when expectations fails


✅ ———————————————— TDD: Test Driven Development ————————————————
Write your test before writting code
    then write code according to spec set by tests
It is called red-green texting
    test fail before code is written

Steps:
    Write shell function
    Write tests
    test Fail
    Write code
    Tests pass

Why to do that?
    Makes a huge difference in how it feels to write tests
    Testing becomes a part of the coding process, not a chore to do at the end
    It's more efficient


✅ ———————————————— React Testing Library: ————————————————

    Create virtual dom for testing and provide utilities for interacting with DOM

✅ ———————————————— Type of tests: ————————————————
    * Unit Tests
        Test one unit of code in isolation
    * Integration Tests
        How multiple units work together
    * Functional Tests
        Tests a particular function of software

✅ ———————————————— Functional Testing vs Unit Testing ————————————————
    Different mindset from unit testing

    * Unit testing
        Isolated: mock dependencies, test internals
        Very easy to pinpoint failures
        Further from how users interact with software
        More likely to break with refactoring

    * Functional Testing:
        Include all relevant units, test behavior
        Close to how users interact with software
        Robust test
        More difficult to debug failing tests

✅ ———————————————— Testing library and Accessibility: ————————————————
Testing library recommends findind elements by accessibility handles
this is the guide
    <Link>
    https://testing-library.com/docs/queries/about/#priority
    </Link>

✅ ————————————————Roles Documentation: ————————————————
    <Link>
    https://www.w3.org/TR/wai-aria/#role_definitions
    </Link>





    

    










