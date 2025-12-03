import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react';

function MovieCard() {    
    const [movieData, setMovieData] = useState([]); // State to hold movie data
    const [apiError, setApiError] = useState(null); // State to hold API error

    useEffect(() => { // Fetch movie data from API
    fetch('https://jsonfakery.com/movies/rando')
      .then(res => res.json())
      .then(data => setMovieData(data)) // Update state with fetched data
      .catch(error => setApiError(error)); // Update state with error if fetch fails
  }, []);

    return ( // Render movie data or error message
        <div className='flex'>
            {movieData.length > 0 ?
                (<div>
                {movieData.map(movie => (<MovieInfo key={movie.id} movieObj={movie}/>))} {/* Passing props */}
                </div>)
            : apiError && <div>Error: {apiError.message}</div>}
        </div>
    )
}

function MovieInfo({ movieObj }) { // Destructuring props
    return (   // Render movie information
    <div className="profile" style={{border: '1px solid black', borderRadius: '10px', maxWidth: '400px'}}>
        <div>
            <div>
                <img src={movieObj.poster_path} alt={movieObj.original_title} style={{width: "100%"}}/>
                <div>
                    <h2>{movieObj.original_title}</h2>
                </div>
            </div>
            <div>
                
                <span>{movieObj.overview}</span>
                <span>{movieObj.release_date}</span>
            </div>
        </div>
    </div>
    );
}

function App() { // Main App component
    return <MovieCard/>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)