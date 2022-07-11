<!------------------------------------------------------------------------------------------------------------------------------> How React works
Tags
-  Understanding the virtual DOM and DOM updates
- Understanding State and State updates

If the state, props or context, or their parent in a component changed, the component is reeavaluated

To avoid Reevaluate components

use:
React.memo(DemoOutput); --> to evaluate if any PROP has changed!!!

- useCallback

Allow us to store a function to avoid to recreate a function in every run

const nameOfFunction = usCallback(() => {
    contentofThe function ....
}, [])

Dependencies are any state that you use in the function (same as useEffect();

It is important to pass in the dependencies into the array because this hooks acts like a closure in JS, it means React save the function and variables in memory to avoid the re-creation


✅ ————————————————Components and States  ————————————————

- State Scheduling
setState schedules a state update --> schedules state change in the order Setstate demands, so its recommended to use this form of useState

setShowParagraph((prevShowPara) => !prevShowPara) if the state depends on the previous state


- useMemo()

const changeTitleHandler = useCallback(() => {

})

and use React.memo() into the child component

useMemo --> allows to save in memory any kind of data

const sortedlist = useMemo(() => {
    return props.items.sort((a,b) => a-b);          /*We did this because of the recalculation of sort takes time*/
}, [props.items]);
/*This array its only rebuild if items change*/

