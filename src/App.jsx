import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails';
import { auth } from "./firebase";



function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  const [app, setApp] = useState(null);

  useEffect(() => {
  
  }, []);
 
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path='/movie/:movie_id' element= {<MovieDetails />} ></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
