<!------------------------------------------------------------------------------------------------------------------------------>General Course Plan:
Tags:
- React 
- First App
- Introduce testing interactions that affect the DOM, unit testing functions
- Build up to more complex functionality and tests
- Second App
- Testing more complex user interactions between components
- mocking server responses with Mock server
- Testing async function

<!------------------------------------------------------------------------------------------------------------------------------> General React

✅ ———————————————— Basic Concepts ————————————————
import {fireEvent}

test('button has correct initial color', ()=> {
    render(<App/>);
    cnst colorButton = screen.getByRole('button', { name: 'Change to blue'})
    expect(colorButton).toHaveStyle({background_ 'red'});
}))

test('button turns blue when clicked', () => {
    render(<App/>);
    const colorButton = screen.getByRole('button', {name: 'change to blue'});

    // click the button
    fireEvent.click(colorButton)

    // expect the bg color to blue
    expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

    // expect the button text to be 'Change to red'
    expect(colorbutton.textContent).toBe('Change to red')
})

✅ ———————————————— Add checkbox ————————————————

<Link>
https://github.com/testing-library/jest-dom
</Link>

test('initial conditions', () => {
    render(<App />)
    //Check that the button starts out enabled
    
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    expect(colorButton).toBeEnabled();

    //check that the checkbx starts out unchecked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked()
})

✅ ———————————————— Code Quiz  ————————————————
- When checkbox is checked button should be disabled

test('Checkbox disables button on first click and enables on second click', () => {
    render(<App/>);
    const button = screen.getByRole('button');
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();

     fireEvent.click(checkbox);
    expect(button).toBeEnabled();
})

✅ ———————————————— Checkbox with label ————————————————

test('Checkbox disables button on first click and enables on second click', () => {
    render(<App/>);
    const button = screen.getByRole('button');
    const checkbox = screen.getByRole('checkbox', {name: 'this is the label'});

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
})

✅ ———————————————— Unit Testing Functions ————————————————

Functions separate from components
    Used by several components
    Complex logic
Unit test if
    Complex logic difficult to test via funcional test
    Too many edge cases

import replaceCamelWithSpaces from './App'

describe('spaces before came-case capital letters', () => {
    test('works for no innter capital letters', () => {
        expect(replaceCamelWithSpaces('Red')).toBe('Red')
    });
    
    test('Works for one inner Capital letter', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
    });

    test('work for multiple inner capital letter', () => {
        expect(replaceCamelWithSpaces.toBe('MediumVioletRed')).toBe('Medium Violet Red')
    })
})

✅ ———————————————— When to Unit test ————————————————

    Could be covered by functional test on button
    For more complicated functions unit test help with:
        covering all possible edges
        Determining what caused functional tests to fail
    Issue with functional tests:
        high-level maks them resistant to refactos
        high-level makes them difficult to diagnos