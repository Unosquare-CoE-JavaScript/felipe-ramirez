Replacing Redux with React Hooks

Content:

Using hooks to replace Redux

hooks-store
    store.js
    
    import {useState, useEffect} from 'react';
    
    let globalState = {};
    let listeners = [];
    let actions = {};

    const useStore = () => {
        const setState = useState(globalState)[1];

        const dispatch = actionId  => {
            const newState = actions[actionId](globalState);
            globalState = {...globalState, ...newState}
        };
        
        useEffect(() => {
            listeners.push(setState)

            return () => {
                listeners = listeners.filter(li => !== setState)
            }
        }, [setState])

    };