Styling

Content:

- Conditional and Dynamic styles
- Styled components
- CSS Modules


- Conditional and Dynamic styles
This is one way (Inline Styles)
const [isValid, setIsValid] = useState(true);

const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0 {
        setIsValid(true)
    }
}
const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
        setIsValid(false)
        return
    }
}

return (
    <form onSubmi={formSubmitHandler}>
    <label style={{color: !isValid ? 'red' : 'white'}}>Course Goal</label>
    <input 
        style={{borderColor: !isValid ? 'red' : 'black'}} 
        type="text"
        onChange={goalInputChangeHandler}
        />
    </form>
)

Second Way - Setting CSS Classes

const [isValid, setIsValid] = useState(true);

const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0 {
        setIsValid(true)
    }
}
const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
        setIsValid(false)
        return
    }
}

return (
    <form onSubmit={formSubmitHandler}>
    <div className={`form-control ${!isValid ? 'invalid' : ''}}>
        <label >Course Goal</label>
        <input 
            style={{borderColor: !isValid ? 'red' : 'black'}} 
            type="text"
            onChange={goalInputChangeHandler}
            />
        </form>
    </div>
)

- Styled Components
https://styled-components.com/

- CSS Modules
https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/


<!---------------------------------------------------------------------------------------------------------- Debugging-->
Browser Breakpoints
React DevTools





