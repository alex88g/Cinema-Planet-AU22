import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import MovieList from './components/MovieList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path='/movie/:movie_id' element= {
            <div></div>
          } ></Route>
        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
