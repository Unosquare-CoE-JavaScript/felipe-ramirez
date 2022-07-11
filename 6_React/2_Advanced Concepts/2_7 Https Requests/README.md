<!------------------------------------------------------------------------------------------------------------------------------>Connecting a Backend and DB
Sending https Requests:

Tags

- How do React Apps Interact with DB
- Sending Https Request 
- Handling Errors


✅ ————————————————How to not connect to a DB ————————————————
bowser-side Apps don't directly talk to DB's
React App - Backend App - Database

In the next lecture, you will be introduced to our demo backend that will be used in this course section: The Star Wars API.

I will use this page: https://swapi.dev/

Loading this page (and hence accessing this backend) might fail - if that is the case for you, you can use this alternative: https://swapi.py4e.com/



✅ ————————————————Get Request ————————————————
Axios
Fetch

const [movies,setMovies] = useState([]);
const [isLoading,setIsLoading] = useState(false)
const [error,setError] = useState(null)

function fetchMoviesHandler () {            /*This could be async await way*/
    setLoading(true)
    setError(null)
    fetch('https://swapi.py4e.com/api/films/')
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        const transformedMovies = data.results.map(movie => {
            return {
                id: movie.episode_id,
                title: movie.title,
                openingText: movie.opening_crawl,
                releaseDate: movie.release_date
            };
        })
        setMoviesList(transformedMovies);
        setLoading(false)
    })
    .catch(function (error) {
        setError(error.message);
        setLoading(false)
    });
}

<button onClick={fetchMoviesHandler}>Fetch Movies!!!</button>

useEffect(()=> {
    fetchMoviesHandler()
}, [fetchMoviesHandler])    /*In order to not to create an infinite loop ui use useCallback*/

const fetchMoviesHandle = useCallback(() => {
    ...MethodContent....
}, [])

- HTTPS Status
<Link>
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
</Link>


 