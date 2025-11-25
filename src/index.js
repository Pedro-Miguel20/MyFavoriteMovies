import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react';

function MovieCard() {    
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
    fetch('https://jsonfakery.com/movies/random/3')
      .then(res => res.json())
      .then(data => setMovieData(data))
      .catch(console.error);
  }, []);

    return (
        <div >
            {movieData.map(movie => (<MovieInfo key={movie.id} movieObj={movie}/>))}
        </div>
    )
}

function MovieInfo({ movieObj }) {
    return (   
    <div className="profile" style={{border: '1px solid black', borderRadius: '10px', maxWidth: '400px'}}>
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
    );
}

function App() {
    return <MovieCard/>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)