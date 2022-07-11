<!------------------------------------------------------------------------------------------------------------------------------> More Complex Tests:

import {render, screen, fireEvent} form '@testing-library/react'
test('Initial Conditions', () => {
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked()
    const confirmButton = screen.getByRole('button', {name: ''});
    expect(confirmButton).toBeDisabled();
})

✅ ———————————————— React Bootstrap popover and Testing Library User Event ————————————————

userEvent to replace fireEvent

import userEvent from '@testing-library/userEvent'

test('popover responds to hover', () => {

    //popover starts out hidden



    //popover appears upon hover of checkbox label

    // popover disappears when we mouse out
})

✅ ———————————————— Screen Query Methodscommand[All]ByQueryType ————————————————

command:
    - get: expect element to be in the DOM
    - query: expect element NOT to be in the DOM
    - find expect element to appear ASYNC

[All]:
    Exclude expect only one match
    Include expecte more than one mathc

QueryType:
    Role (most preferred)
    AltText (images)
    Text (display elements)
    Form Elements:
        PlaceholderText
        LabelText
        DisplayValue

<Link>
https://testing-library.com/docs/queries/about/
https://testing-library.com/docs/react-testing-library/cheatsheet/
https://testing-library.com/docs/queries/about/#priority
</Link>

✅ ———————————————— Testing elements is NOT on the page: Start popover test: ————————————————
import waitForElementToBeRemoved 
import userEvent from '@testing-library/userEvent'

test('popover responds to hover', async () => {
    render(<SummaryForm />)
    
    //popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i)
    expect(nullPopover).not.toBeInTheDocument();

    //popover appears upon hover of checkbox label
    cconst termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument

    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream will actually be delivered/i));
})

