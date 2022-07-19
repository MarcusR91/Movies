
import { useEffect, useState } from 'react';
import './App.css';
import IndividualMovie from './Movies/IndividualMovie';
import { landingPageDTO, movieDTO } from './Movies/movies.models';
import MoviesList from './Movies/MoviesList';



function App() {

  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timeerId = setTimeout(() =>{
      setMovies({
        inTheaters: [{
          id:1,
          title: 'Lord of the rings',
          poster: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg'
        },
        {
          id:2,
          title: 'Obi-Wan kenobi',
          poster: 'https://www.streammagasin.se/wp-content/uploads/2022/02/obi-wan-kenobi-series-poster-image-692x1024-1.jpg'
        }
        ],
        upcomingReleases:   [
          {
            id: 3,
            title: 'Avatar 2',
            poster: 'https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg'
          },
        ]
      })
    },1000);

    return () => clearTimeout(timeerId)
  })


  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </>
  )
}

export default App;