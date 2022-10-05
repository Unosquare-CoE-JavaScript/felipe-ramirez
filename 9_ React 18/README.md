<!------------------------------------------------------------------------------------------------------------------------------> Current Rendering Adventures in React 18
<Link>
http://www.theproblemsolver.nl/concurrent-rendering-adventures-in-react-18.pdf

https://github.com/mauricedb/concurrent-rendering-adventures-in-react-18
</Link>

Tags:
- <Suspense/>
- Learn about useing Concurrent mode

✅ ———————————————— Suspense ————————————————
React 17- Allows react to suspend rendering a component subtree

SWR and suspense -> SWR is used in the application to load data

- Suspense and Errors
<ErrorBoundary FallbackComponent={ErrorFallback}>

- Nesting Suspense and Parallel suspense
<Suspense>
    <Suspense></Suspense>
</Suspense>
<Suspense></Suspense>

✅ ————————————————  React 18!!!! ————————————————
 npm install react@next react-dom@next --force

 New hooks

 useDeferredValue
    Return a deferred version of the value that may lag behind
 useTransition
    Avoid undesirable states when waiting for content
 useMutableSource
    Enables React components to safely and efficiently read from a mutable external source in concurrent mode
 useOpaqueIdentifier
    Can be used to generate unique ID's in an SSR-safe way  this can be used for labels or html elements


- <SuspenseList>

    <SuspenseList revealOrder="together"></SuspenseList>
    <SuspenseList revealOrder="forwards" tail="hidden"></SuspenseList>
    <SuspenseList revealOrder="forwards" tail="collapsed"></SuspenseList>


- Concurrent Mode
    event can ocurr during components Rendering

- startTransition()
    This works to make my app more efficient

- useTransition()
    const [isPending,startTransition] = useTransition();

- useDeferredValue()
    Can prevent extra re-renders of expensive components
    
