Advanced React Paterns in the real world:

<!-----------------------  1. Custom Hooks        ------------------------------------------------->

Custom hooks are mechanism to reuse stateful logic

Example:

const useAdvancedatterns  () => {
    // state and effects isolated here
}

// Must be called from a react fn Component or other custom hook
useAdvancedPatterns()

Open-source Examples:
https://github.com/streamich/react-use



<!-----------------------  2. Compound Components       ------------------------------------------------->3

The pattern referes to an interesting way to communicate the relationship between UI components and share implicit state by levaragin an explicit paren-child relationship

Example:
    <MediumClap>
        <MediumClap.Icon/>
        <MediumClap.Total/>
        <MediumClap.Count/>
    </MediumClap>
    // Adding the child components to the instance of the parent comonent is optional. 
    <MediumClap>
        <Icon/>
        <Total/>
        <Count/>
    </MediumClap>

Open Source Examples:
https://reacttraining.com/reach

Props: 
- Flxible markup structure
- Reduced Complexity
- Separation of concerns


<!-----------------------  3. Extensible Styles       ------------------------------------------------->

Regardless of the component you build, a common requirement is allowing the override and addition of new Styles

Example:
    <YourComponent
        className="shouldWork"/>    /*AS with JSX elemnts styling via classname and style prop should be possible*/
    <YourComponent
        style="shouldWork"/>
    
Open source Example:
https://reacttraining.com/reach


<!-----------------------  4. Control Props        ------------------------------------------------->

Perhaps inspired by React's controlled form elements, control props allow users of your component to control the UI state via certain "control" props

Example:
    <YourComponent
        value="string"      /*state value passed via props*/
        onChange={Fn}       /* state updater*/
    />

You'd notice that this is similar to how controlled input elements work in React
    <Input
        value={somStateValue}
        onChange={fnThatUdatesTheStateValue}
        />

Open Source Example:
https://github.com/mui/material-ui


<!-----------------------  5. Props Collection       ------------------------------------------------->

Pros Collection refer to a collection of common props sers of your components/hooks are likely to need
{
    prop1,
    prop2,
    prop3
}

const {propsCollection} = useYourHook

This is particularly imporntan if you're building a custom hook to be used in conjunction with certain UI elemtns that are likely to behave in a consistent way

<!-----------------------  6. Props Getters       ------------------------------------------------->

Props getters, very much like props collection, provide a collection of props to users of your hooks/component. the diference being the provision of a getter - a function invoked to return the collection of props

{
    prop1,
    prop2,
    prop3
}

const {getPropsCollection} = useYourHook

The added advantage a prop getter has is it can be invoked with arguments to override or extend the collection of props returned

const {getPropsCollection} = useYourHook();

const propsCollection = getPropsCollection({
    onClick: myClickHanlder
    data-testId: 'my-test-id'
})

open source Examples:
React Table

<!-----------------------  7. State Initialisers       ------------------------------------------------->

A simple pattern that allows for configurable initial State and an optional state reset handler

Example:
    const {value, reset}  = useYourHook(initialState);  /*user passes in some initial state value*/
    const [internalState] = useState(initialState);     /*initialState is passed into your internal state mechanism*/

Passing props to state is generally frowned upon, which is why you have to make sure the value passed here is only an initialiser.

Open source Example:
Formik


<!-----------------------  8. State Reducers       ------------------------------------------------->

Like the control props pattern, state reducers allow you to cede state control to the users of yur component. Also by leveraging action types, you minimise code duplicates on the user's side


