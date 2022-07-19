- Mock Service Worker and Handlers

Purpose:
    Intercept network calls
    return specified responses
Preventw network calls during tests
Set up conditions using server response

npm install msw (mock service worker);

create handlers
create test server
make sure test server listens during all tests
    reset after each test

create a folder
mocks
    handlers.js
    import {rest} from 'msw';

    export const handlers = [
        
        rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
            return res(
                ctx.json([
                    {name: 'Chocolate', imagePath: '/images/chocolatepng'},
                    {name: 'Vanilla', imagePath: '/images/vanilla.png'},
                ])
            )
        }),
    ];

    server.js

    import setupServer  from 'msw';
    import handlers from './handlers'

    export const server = setupServer(...handlers)


Modify the file
setupTest.js 
https://mswjs.io/docs/getting-started/integrate/node


- Test with Mock service Worker

    import {render, screen} from 'testing-library/react';

    import Options from ..components

    test('displays images for each scope from the server', async () => {
        render(<Options optionType="scoops"/>);

        //find Images

        const scoopImages = await screen.findAllBy('img', {name: /scoop$/i});
        expect(scoopImages).toHaveLength(2);

        confirm alt text of images

        const altText = scoopImages.map((element) => element.alt)
        expect(altText).toEqual(['Chocolate scoop', 'vanilla scoop'])
    })


- Using await findBy to find Elements that popuate Async
    When youre waiting for smthg to appear async on the page ou must use await FINDBY
    

- Jest Debugging Tools
    Jest debugging tools
        running only one test file
        running only one test within a file


- Example:
    OrderEntry.jsx
    export default function OrderEntry () {
        return <div></div>
    }

    OrderEntry.test.jsx
    import {render, screen} from 'resting-library'
    import OrderEntry

    test.only('handles errors for scoops and toppings routes', async() => { /*This is to run only this test, inverse of this "skip"/
        server.resetHandlers(
            rest.get('https://localhost:3030/scoops', (req,res,ctx) => 
                res(ctx.status(500))
            )
        )

        render(<OrderEntry />)

        waitFor(async () => {
            const alerts = await screen.findAllByRole('alert', {name: 'An unexpected error ocurred'});
            expect(alerts).toHaveLength(2);
        })
    });



