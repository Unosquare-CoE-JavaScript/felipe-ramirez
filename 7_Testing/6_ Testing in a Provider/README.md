<!------------------------------------------------------------------------------------------------------------------------------> Testing in a Provider

✅ ———————————————— Steps  ————————————————
import render,screen
import userEvent

test('description for this test', () => {
    render(<Options optionType="scoops" />);

    const scoopsSubtotal = screen.getByText('Scoops total: $', {exact: false});
    expect(scoopsSubtotal).toHaveTextContent('0.00')

    const vanillaInput = await screen.finByRole('spinbutton', {
        name: 'vanilla'
    }),
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');
    expect(scoopsSubtotal).toHaveTextContent('2.00');
});

- Adding Context to Test Setup, tes catching Error in code: 

test('description for this test', () => {
    render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider});  /*Could be a redux provider or a context Provider*/

    const scoopsSubtotal = screen.getByText('Scoops total: $', {exact: false});
    expect(scoopsSubtotal).toHaveTextContent('0.00')

    const vanillaInput = await screen.finByRole('spinbutton', {
        name: 'vanilla'
    }),
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');
    expect(scoopsSubtotal).toHaveTextContent('2.00');
});

✅ ———————————————— Create a custom Render to wrap in Provider by Default ————————————————
<Link>
https://testing-library.com/docs/react-testing-library/setup/#custom-render
</Link>

foler:
test-utils
    testing-library-utils.js
    import {render} from ''
    import {OrderDetailsProvider} from ...

    const renderWithContext = (ui, options) => render(ui, {wrapper: OrderDetailsProvider, ...options});

    export * from @testing-library/react;
    export {renderWithContext as render};

    And then import everything from here


✅ ———————————————— Code quiz ————————————————

describe('grand total', () => {

    test('grand total starts at $0.00', async() => {
        render(<OrderEntry/>);
        const grandTotal = screen.getByRole('heading', {
            name: /grand total: /$/i,
        })
        expect(grandTotal).toHaveTextContent('0.00')
    });

    test('grand total updates properly if scoop is added first', async() => {
        render(<OrderEntry/>);
        const grandTotal = screen.getByRole('heading', {
            name: /grand total: /$/i,
        })

        const vanillaInput = await screen.findByRole('spinbutton', {name: 'Vanilla'});
        
        userEvent.clear(vanillaInput);
        userEvent.type(vanillaInput, '2');
        expect(grandTotal).toHaveTextContent('4.00');

        const cherriesCheckbox = await screen.findByRole('checkbox', {
            name: 'cherries'
        });
        userEvent.click(cherriesCheckbox);
        expect(grandTotal).toHaveTextContent('5.50');
    });
    test('grand total updates properly if topping is added first', () => {});
    test('grand total updates properly if item is removed', () => {});

})

✅ ———————————————— Debugging Tips ————————————————

* screen.debug()
* Does getBy* fil when there a server call or other async action =
    need to use await findBy*
* Read test error output carefully
    don't get intimidated by huge walls of text
    copy/paste error into the web search
* Try pre-written code to see whether your tests or code are the issue

- Resolving Error from tests:

    unable to find role="role" --> try removing the name
    an update to component inside a test was not wrapped in act -->  there was and update to the component afger teste completed use await findBy
    cant' perform a React state update on an unmounted component use await findBy

-  Placeholder for function pro (jest.fn())

✅ ———————————————— Common mistakes using RTL ————————————————
<Link>
https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
</Link>