import 'bootstrap/dist/css/bootstrap.min.css';
import MovieComponent from './page/MovieComponent';
import AppContext from './utils/AppContext';

function App() {
  return (
    <>
    <AppContext>
      <MovieComponent />
    </AppContext>
     
    </>
  )
}

export default App
