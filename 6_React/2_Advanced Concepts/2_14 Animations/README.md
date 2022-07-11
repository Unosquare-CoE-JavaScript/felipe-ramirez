<!------------------------------------------------------------------------------------------------------------------------------>Animating React Apps and Components:

Adding Smooth Animations to our Apps

- CSS Animations and why they are not enough
- Animating React Components with Extra Libraries

✅ ———————————————— CSS transitions: ————————————————
After adding the logic in the component to show and hide a modal

.Modal {
    ...
    ...
    transition: all 0.3s ease-out;
}

.ModalOpen {
    opacity: 1;
    transform: translateY(0);
}

ModalClosed {
    opacity: 0;
    transform: translateY(-100);
}

✅ ———————————————— CSS Animations: ————————————————

.ModalOpen {
    animation: openModal 0.4s ease-out forwards;
}

ModalClosed {
    animation: CloseModal 0.4s ease-out forwards;
}

@keyframes OpenModal {
    0% {
        opacity: 0;
        transform: translateY(-100); 
    }
    50% {
        opacity: 1;
        transform: translateY(20%); 

    }
    100% {
        opacity: 1;
        transform: translateY(0); 
    }
}

@keyframes closeModal {
    0% {
        opacity: 1;
        transform: translateY(0); 
    }
    50% {
        opacity: 0.8;
        transform: translateY(60%); 

    }
    100% {
        opacity: 0;
        transform: translateY(-100%); 
    }
}

✅ ————————————————CSS Limitations: ————————————————

It populates the dom and its not that "react", and we can lose animations

✅ ———————————————— React Transitions Group: ————————————————

npm install react-transition-group --save

import Transition from 'react-transition-group/Transition'
const [showBlock, setShowBlock] = useState(false);
return (
    <button onClick={() => setShowBlock(prevState => !prevState)}>Toggle</button>
    </br>
    <Transition 
        in={showBlock} 
        timeout={300}
        mountOnEnter
        unmountonExit
        >
            {state => (
                <div 
                style={{
                    backgroundColor: 'red', 
                    width: '100%',
                    transition: 'opacity 1s ease-out'
                    opacity: state === 'exited' ? 0 : 1
                }}
                ></div> 
            )}  
    </ Transition>
)

✅ ———————————————— Applyng to the project ————————————————

import Transition from 'react-transition-group/Transition'

const [showBlock, setShowBlock] = useState(false);
return (
    <button onClick={() => setShowBlock(prevState => !prevState)}>Toggle</button>
    </br>
    <Transition 
        in={modalIsOpen} 
        timeout={300}
        mountOnEnter
        unmountonExit
        >
            {state => (
                <Modal
                show={state}
                ></Modal> 
            )}  
    </ Transition>
)

go to the modal and use state passed through props

const modal = props = () => {

    const cssClasses = [
        "Modal",
        props.show === 'entering'
        ? "ModalOpen"
        : props.show === 'exiting'
        ? "ModalClosed"
        ; null
    ]

    return (
        <div className={cssClasses.join(' ')}></div>
    )
}

✅ ———————————————— Animation Timing  ————————————————

const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = props => {
    return (
        <Transition
            timeout={animationTiming}
        >
        {state => {
            cssClasses = .....
            return (
                <div className={cssClasses.join(' ')}></div>
            )
        }}
        </Transition>
    )
}

✅ ———————————————— Parameters on Transistion  ————————————————
<Transition
    onEnter={}
    onEntering={}
    onEntered={}
    onExit={}
    onExiting={}
    onExited={}
>
</Transition>


✅ ———————————————— The CSSTransition Component ————————————————

import CSSTransition from 'react-transition-group/CSSTransition';


return (
    <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.show}
        timeout={animationTiming}
        classNames="fade-slide"
        >
        <div className="Modal"></div>
    </CSSTransition>
)

.css file
//These classes will be changed depending on the status of the transition
.fade-slide-enter {
    animation: openModal 0.4s ease-out forwards;
}

.fade-slide-enter-active {
    animation: openModal 0.4s ease-out forwards;
}

.fade-slide-exit {
    animation: closeModal 0.4s ease-out forwards;
}

.fade-slide-exit-active {
    animation: openModal 0.4s ease-out forwards;
}

- Customizing CSSclasses

return (
    <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.show}
        timeout={animationTiming}
        classNames={
            enter: '',
            enterActive: 'OpenModal',
            exit: 'CloseModal',
            exitActive:''
        }
        >
        <div className="Modal"></div>
    </CSSTransition>
)

and use the same .css file that you created before

- Animating Lists
<TransitionGroup component="ul"></TransitionGroup>


✅ ————————————————Another Options: ————————————————
React-Motion
React-Move
React router transition