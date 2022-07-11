<!------------------------------------------------------------------------------------------------------------------------------>Next JS

Tags

- What is NextJS and why to use it
- Filebase routing and page pre-rendering
- Data fetching and adding and API

✅ ————————————————Basic Concepts  ————————————————

- NextJS
  The React framework for Production
  Is a fullstack Framework for Production
  Next solves common problems and makes building react apps easier
  It has a lot of built-in features that help you solve problems

- key Features:

* Server-side Rendering
  Its all about preparing all the content on the server instead of on the client
  Search Engine Optimization (SEO)
  Automatic page pre-rendering: great for SEO and initial load
  Blending client-side and server-side: Fetch data on the server and render finished pages

* File-based Routing
  Defines pages and routes witrh files and folders instead of code
  less code, less work, easy to understand

* Build fullstack Apps
  Full stack capabilities
  Easily add backend code
  Storing data getting data authentication can be added to your project

- Steps to create a Next.js Project and App
  npx create-next-app
  follow the instructions

It creates a project with this structure where you can add the routes

--Pages
_app.js
index.js
    function HomePage () {
        return ()
    }
    export default HomePage;

news.js
    function NewsPage () {
        return (
            <div></div>
        )
    }
    export default HomePage;

--public

--styles

--package.json
--package-lock.json


✅ ———————————————— Adding Nested Routes  ————————————————

--Pages
_app.js
index.js
    function HomePage () {
        return ()
    }
    export default HomePage;

-- news
    -- index.js
        function NewsPage () {
            return (
                <div></div>
            )
        }
        export default HomePage;
    
    -- nestedPath
        function nestedPath () {
            return (
                <div></div>
            )
        }

        export default nestedPath


✅ ———————————————— Dynamic Pages with Parameters ————————————————

-- news
    -- index.js
        function NewsPage () {
            return (
                <div></div>
            )
        }
        export default HomePage;
    
    -- [someId].js            <!------This [] represents dynamic route---->
        import { useRouter } from 'next-router';
        function DynamicRoute () {

            const router = useRouter();
            const someId = router.query.someId; /* Here you can get the query info from url*/
            return (
                <div></div>
            )
        }

        export default nestedPath

✅ ———————————————— Linking between pages ————————————————

-- news
    import Link from 'next/link'
    -- index.js
        function NewsPage () {
            return (
                <Fragment>
                    <h1>The great List</h1>
                    <ul>
                        <li><Link href="/news/someId">Something <Link/></li>
                        <li><Link href="/news/someId">Something else<Link/</li>
                        <li><Link href="/news/someId">another Something else<Link/</li>
                    </ul>
                </Fragment>
            )
        }
        export default HomePage;

✅ ———————————————— Starting the project ————————————————

-- pages
    _app.js
    index.js
    -- new-meetup.js
        index.js
        [meetupId].js


-- pages
    _app.js
    index.js
    -- new-meetup.js
        index.js
        import MeetupForm from '../../components/MeetupForm'
        [meetupId].js
-- components
    --layout
        Layout.js
        Layout.module.css
        MainNavigation.js
        MainNavigation.css
    -- meetups
        MeetupForm.js
            function NewMeetupForm () {
                    return (
                        <form>
                        </form>
                    )
                }
        MeetupForm.module.css
        MeetupList.js
        Meetup.module.css
    -- ui
        someUIComponent.js
        someUIComponent.module.css


✅ ———————————————— _app.js File ————————————————
It works like the layout component

import {Layout} from '../../components/Layout'
function MyApp ({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}

export default MyApp


- Using Programmatic Navigation

import {useRouter} from 'next/router'
function MeetupItem () {
    const router = useRouter();
    function showDetailsIsHandler () {
        router.push('/')
    };
    return (
        <button onClick={showDetailsHandler}></button>
    )
}

✅ ———————————————— Data Fetching for static pages ————————————————

Two forms of pre-rendering
1. Static Generation
2. Server-side Rendering

- Static Generation
    You can export the next statement in the page components
    function HomePage (props) {
        const [loadedData, setLoadedData ] = useState([]);
        useEffect(()=>{
            setLoadedData(DUMMY_DATA)
        },[])
        return (
            return <MeeupList meetups={props.data}>
        )
    }
    export async function getStaticProps() {
                // This code is executed during the build process, this code never executes in the client side
        // example: fetch data from an API
        return {
            props: {
                data: DUMMYDATA
            },       
            //Props will be the props  the component will use

            revalidate: 10
            // the number of seconds next will wait until it regenerate this page for an incoming request
        };
    }
    export default HomePage()



✅ ———————————————— Server Side Rendering (SSR) ————————————————
        function HomePage (props) {
        const [loadedData, setLoadedData ] = useState([]);
        useEffect(()=>{
            setLoadedData(DUMMY_DATA)
        },[])
        return (
            return <MeeupList meetups={props.data}>
        )
    }
    // this function will run on the server after deployment

    export async function getServerSideProps (context) {
        // fetch data from an API, for example

        const req = context.req;
        const res = context.res;

        return {
            props: {
                data: DUMMY_MEETUPS
            }
        };
    };

    export default HomePage()

✅ ———————————————— Example using SSG - Static Generation ————————————————
Using params

export async function getStaticPaths () {
    // USE THIS IN DYNAMIC ROUTES
    // this preload every possible id in dynamic routes

    return {
        fallback: false, // if false youre telling you will have ALL the possible id's, otherwise youre telling you have more than defined ones
        paths: [
            {
                params: {
                    dataId: 'm1'
                },
                params: {
                    dataId: 'm2'
                }
            }
        ]
    }

}

export async function getStaticProps (context) {
    //fetch data for a single data

    const singleDataId = context.params.dataId;

    // then fetch data 

    return {
        props: {
            // then return the data to be used by the component
            SingleData: {
                ...all single data that should've came from bd - backend
            }
        }
    }

}

export async function



✅ ———————————————— API Routes ————————————————

It allows to create our APIS using NEXT
Create an api folder into the pages folder in order to tell next they are your apis

--pages 
    ---api
    new-meetup.js

    //POST /api/new-meetup
    function handler (req, res) {
        if (req.method === 'POST') {
            const data = req.body;

            const {title, image, address, description} = data
        }

    };

    export default handler;


- Connecting to a Database
mongoDB
create an account
...
Create a New Cluster
Network access
    Add local IP to be able to send request
Database Acces
    Create user and set access level

Clusters:
    Connect
    set to Node.js - MongoDB combo

Install mongodb into the project

Now use it in the project

---api
new-meetup.js

import {mongoClient} from 'mongodb';

async function handler (req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('stringConnection.......');

        const db = client.db();

        const meetupsCollections = db.collection('meetups');

        const result = await meetupsCollections.inserOne(data);
        
        client.close();

        res.status(201).json({
            message: 'inserted',
            ok: true
        });

    }

};

export default handler;

Now to send request to our recently created api

function NewMeetupPage () {
    async function addMeetupHandler (enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        //do whatever you want with data

    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
}
export default NewMeetupPage;

✅ ———————————————— Fetching data ————————————————

Use this in the component Page where you need it

import { MongoClient } from 'mongodb';

export async function getStaticProps () {
    MongoClient.connect(...stringConnection....);
    ....
    ....
    const meetups = await meetupsCollection.find().toArray()

    return {
        props: {
            data: meetups.map(meetup => ({
                ...convert your content
                
            }))
        }
    }
}

- Fetching data from dynamic Route

import { MongoClient } from 'mongodb';

export async function getStaticPaths () {
    MongoClient.connect(...stringConnection....);
    ....
    ....
    const meetupsCollection = db.Collection('meetup');

    const meetups = await meetupsCollection.find({}, {_id: 1})
    client.close
    return {
        fallback: false,
        paths: meetups.map(meetup =>({
            params: {meetupId: meetup._id
            }
        })
    }

    
}

export async function getStaticProps (context) {
    const meetupId = context.params.meetupId
    MongoClient.connect(...stringConnection....);
    ....
    ....
    const meetupsCollection = db.Collection('meetupS');

    const selectedMeetup = await meetupsCollection.findOne({_id: meetupId})

    client.close
    return {
        props: {
            data: selectedMeetup
        }
    }   
}

- Adding metadata header

main index

import Header from 'next/head';

function HomePage () {

    return (
        <Fragment>
        <Head>
            <title>React Meetups</title>
            <meta name="description" content="your content" />
        </Head>
        <MeetupList />
        </Fragment>
    )
}

you can add it in every Page Component to make it differente

- Deploy Next App
Vercel.com
create a repository
push your code
Set vercel space




















