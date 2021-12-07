import React, { useState } from 'react';
import "./App.css"

const movies = [
    {
        title: "Matrix",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
    },
    {
        title: "Full Metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
    },
    {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
    },
    {
        title: "Star Wars",
        poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
    }
]

const App = () => {

    // {안에는 함수,상태값들이 들어간다.
    const [movieDate, setMovieDate] = useState([])
    //
    // const [bdate, setBDate] = useState(22)
    //
    // const [cdate, setCDate] = useState(0)
    //
    // //자신이 이름을 정하고 변수를 입력.
    // const changeText = () => {
    //     setCDate(adate+bdate)
    // }

    const getMovies = () => {
        setMovieDate(movies)
    }
    
  return (
      <div className={"App"}>
          {movieDate.map(movie => (
              <h1>
                  {movie.title}
                  {movie.poster}
              </h1>


          ))}
          <button onClick={getMovies}>
              영화 불러오기.
          </button>
        {/*<hi>*/}
        {/*    {adate} + {bdate} = {cdate}*/}
        {/*</hi>*/}
        {/*  <br />*/}

        {/*  <button onClick={changeText}>*/}
        {/*      hi go!*/}
        {/*  </button>*/}
      </div>
  );
};

export default App;
