<!------------------------------------------------------------------------------------------------------------------------------>Building an Multi-SPA with React Router

Tags:
- What is Client-side Routing
- Using React-router
- Advanced Features: Nested Routes

What is Routing:
When URL changes, visible content changes

✅ ———————————————— React Router V5 ————————————————

npm install react-router-dom

App.js -->

import  {Route} from 'react-router-dom';
import Dummycomponent from './pages/DummyComponent';
import AnotherComponent from './pages/AnotherComponent'; <!--It is common to call the folder "pages" because they are regular components but they are pages at the same time using routes-->

function App () {
    return (
        <div>
            <Route path="/welcome">
                <DummyComponent />
            </Route>
            <Route path="/products">
                <AnotherComponent />
            </Route>
        </div>  
    )
}

index.js -->

import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
) 

✅ ———————————————— Working with links to move from one page to another ————————————————


function App () {
    return (
        <div>
            <MainHeader />
            <main>
                <Route path="/welcome">
                    <DummyComponent />
                </Route>
                <Route path="/products">
                    <AnotherComponent />
                </Route>
            </main>
        </div>  
    )
}

now in header component:

import {Link} from 'react-router-dom';

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="welcome">Dummy Component</Link>
                    </li>
                    <li>
                        <Link to="products">Another Component</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


✅ ———————————————— Use NavLinks: ————————————————
To highlight the current page in the application

import {NavLink} from 'react-router-dom';

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClass={classes.active} to="welcome">Dummy Component</NavLink>
                    </li>
                    <li>
                        <NavLink activeClass={classes.active} to="products">Another Component</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

✅ ———————————————— Dynamic routes with params ————————————————

App.js

import {Switch} from ...
return (
    <Switch>
    <Route exact path="products">
        <Products>
    </Route>
    <Route exact path="products/:productId">
        <ProductDetail>
    </Route>
    </Switch>
)

Products.js --> 

import {Link} from 'react-router-dom'
const Products = () => {

    return (
        ...some code to list all of the products
        <Link to="products/p1"></Link>
        <Link to="products/p2"></Link>
        <Link to="products/p3"></Link>
    )
}

import {useParams} from 'react-router-dom';

ProductDetail.js-->

const ProductDetail = () => {
    const params = useParams();
    const productId = params.productId

    return (
        ... some code that details every product
    )
}


✅ ———————————————— Nested Routes: ————————————————

DummyComponent.js --> 

import {Route} from 'react-router-dom';

return (
    <section>
        <Route path="/welcome/new-user">
            <p>Welcome new user</p>
        </Route>
    </section>
)

✅ ———————————————— Redirecting the user: ————————————————
<Route path='/' exact>
    <Redirect to="/welcome"/>
</Route>


✅ ———————————————— Prevent Unwanted routing backward ————————————————
To show a warning if the user accidentally go backward

import useState
import {Propmt} from 'react-router-dom';
// If the user accidentally go to another side

const [isEntered, setIsEntered] = useState(false);

const formFocusedHandler = () => {
    setEntered(true);
};

const finishEnteredHandler = () => {
    setEntered(false);
};

return (
    <Fragment>
    <Prompt when={isEntering} message={(location) => 'Are you sure you want to leave, all your data will be lost} />
    <form onFocus={formFocusHandler}>
        <button onClick={finishEnteredHanler}>
    </form>
    </Fragment>
)

✅ ———————————————— Query Parameters: ————————————————

useLocation
Give us information about current location 
hash
pathname
search
state

you can use history.push() to reevaluate the component on your location 

for example using history.push('/quotes?search=asc')


import {useLocation} from 'react-router-dom';

const location = useLocation()
const queryParams = new URLSearchParams(location.search); this is from javascript

const isSortingAscending = queryParams.get('sort') === 'asc'

✅ ———————————————— more efficient way to use it ————————————————
const match = useRouteMatch();

then you can use like
match.path to use the currently path 

Programmatic navigation:
history.push({
    pathname: location.pathname,
    search: '?sort=desc'
})

<!------------------------------------------------------------------------------------------------------------------------------>Deploying React Apps

From Development To Production

Tags:
- Deployment Steps and pitfalls
- server Side routing vs client side routing 

✅ ———————————————— Deployment Steps ————————————————
1. Test Code
2. Optimize Code
3. Build App for Production
4. Upload Production 
5. Configure Server

✅ ———————————————— Adding Lazy Code ————————————————
(Optimization Code)
Lazy loading
Load code only when it's needed

import React, { Suspense } from 'react';

const NewQuote = React.lazy(() => import('./pages/newQuote'));

function App() {
    return (
        <Layout>
            <Suspense fallback={<div><LoadingSpinner /></div>}>
            <Routes>
                <Route path="/quotes" element={<NewQuote/>}>
            </Routes>
            </Suspense>
        </Layout>
    )
}

✅ ———————————————— Build App for Production ————————————————

npm run build
it creates a build folder


✅ ———————————————— Upload Production Code to server ————————————————
A react SPA is a Static Website
we need a hosting Provider
Firebase, is an example

npm install -g firebase-tools
...
firebase init into 
follow the instructions

- Server side Routing vs Client-side routing


