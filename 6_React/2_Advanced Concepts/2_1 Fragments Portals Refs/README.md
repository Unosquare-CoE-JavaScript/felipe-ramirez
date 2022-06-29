Fragments, Portals & Refs

Content:
- JSX Limitations and Fragments
- Getting a cleaner DOM with portals
- Working with Refs
------------------------------------------------------------------------------------

- JSX Limitations:

    2 Elements next by each other will cause an error
    You Can't return more than one 'root' JSX element (You also can't store more than one 'root' JSX element in a variable)

    Solution 1:
    wrap all in one <div></div>

    return (
        <div>
            <h2>Hi there </h2>
            <p>This works!</p>
        </div>
    )

    Solution 2:
    Helpers
    |
    |
    |
    |_____ Wrapper.js
        const Wrapper = props => {
            return props.children
        }

    And use it in main files
    import Wrapper from './Wrapper';
    return (
        <Wrapper>
            <content1>...if does not matter if it is more than one children
            <content2>
        </Wrapper>
    )

    Solution 3:
    React Fragments

    return (
        <React.fragment>
            <content1>
            <content2>
        </React.fragment>
    )

    Solution 4:
    <> and </> tags

    return (
        <>              <!--This tags could not be supported-->
            <content1>
            <content2>
        </>
    )

<!-------------------------------------------------------------------->
 - React Portals  
 This is to avoid deeply nested elements into the dom (elements like modals)
 return (
     <React.Fragment>
        <MyModal/>      /*Having a modal is not semantically a clean HTML structure. It is an overlay to the entire page after all*/
        <MyInputForm/>
     </React.fragment>
 )

 add into the index.html file
 <div id="backdrop-root"></div>     /*Used into the Modal, in getElementById Function*/
 <div id="overlay-root"></div>
 <div id="root"></div>

To use it:
    Split the modal in 2 components
    import ReactDom from 'react-dome'
    const Backdrop = (props) => {
        return <div className={classes.backdrop}>/*Background of modal*/</div>
    }
    const ModalOverlay = (props) => {
        return <Card>/*Conent of modal*/</Card>
    }
    const ErrorModal = (props) => {
        return(
            <React.Fragment>
                {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}    
                {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.onConfirm}/>, document.getElementById('overlay-root'))}    
            </React.Fragment>
        )
    }

- Working with "ref"s (References):
They allow us to get acces to another DOM elements

import {useRef} from 'react'

const AddUser = () => {
    const nameInputRef = UseRef();
    const ageInputRef = UseRef();
    return (
        <form>
            <input 
            id="username"
            value={enteredUserName}
            onChange={usernameChangeHandler}
            type="text"
            ref={nameInputRef}
            />  /*This ref is connected to the useRef()*/
        </form>
    )
}

You can work only with Refs insted of using States if you want just to read a value







