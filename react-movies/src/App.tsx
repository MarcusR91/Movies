
import './App.css';
import IndividualMovie from './Movies/IndividualMovie';
import { movieDTO } from './Movies/movies.models';



function App() {

const testMovie: movieDTO = {
  id:1,
  title: 'Lord of the rings',
  poster: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg'
}
  return (
    <>
    {/* <h2>Hello Worlds</h2> */}
    <IndividualMovie {...testMovie} />
    </>
  )
}

export default App;