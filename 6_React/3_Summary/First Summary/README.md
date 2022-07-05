- useContext

export const AuthContext = React.createContext({
    isAuth: false,
    login: () => {}
});

const AuthContextProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const loginHandler = () => {
        setIsAuthenticated(true)
    }
    return (
        <AuthContext.Provider value={{login: loginHandler, isAuth: isAuthenticated}}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider

Now wrap the whole app in the index 

ReacDOM.render(
    <AuthContextProvider>
        <App/>
    </AutContextProvider>
)

Now You can use it into any component

const App = props => {
    const authCtx = useContext(AuthContext);

    if (authContext.isAuth) {
        content = <Ingredients />
    }
    return content
}