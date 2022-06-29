Custom React Hooks:

Content:

- Building Custom hook
- Custom hook rules

What are custom hooks:
Regular functions but they are functions that can contain outsource stateful logic into reusable functions

--hooks
    |
    |
    |--use-counter.js

    import {useState, useEffect} from 'react'

    const useCounter = (fowards = true) => {
       const [counter,setCounter] = useState(0);

       useEffect(() => {
           const interval = setInterval(() => {
               if (forwards) {
                setCounter((prevCounter) => prevCounter + 1 );
               } else {
                setCounter((prevCounter) => prevCounter - 1 );
               }
           }, 1000);

           return () => clearInterval(interval)
       }, [forwards]);

       return counter           /*This returns the state to the ForwardCounter*/
    };

    export default useCounter;

    to use it:

    const ForwardCounter = () => {
        const counter = useCounter();

        return <Card>{counter}</Card>
    };

    export default ForwardCounter;

    const BackwardCounter = () => {
        const counter = useCounter(false);


        return <Card>{counter}</Card>
    }

    export default BackwardCounter;


- Another Example of Custom React Hooks

Making http request

const useHttp = (requestConfig, applyData) => {
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const sendRequest = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            })

            if(!response.ok) {
                throw new Error('Request Failed!')
            }

            const data = await response.json();
            applyData(data);
        } catch(error) {
            setError(error.message)
        }
    }),[requestConfig, applyData];

    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;

To use it:

function App() {
    const [task,setTasks] = useState([]);

    const transformTask = useCallback((taskObj) => {
        setTasks(taskObj)
    }, []);

    const {isLoading, error, sendRequest: fetchTasks } = useHttp({
        url: 'https://url.com/',
    }, transformTask);

    useEffect(() => {
        fetchTasks
    },[]);
    
}

- bind Method
https://academind.com/tutorials/function-bind-event-execution
