import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
//import { Link } from "react-router-dom";

const Results = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const textSearch = params.get('search');


    useEffect(() => {
        if (textSearch.length >= 3) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=bc564be597cfe46ac043e8fd3d5124f6&language=es-ES&sort_by=popularity.desc&page=1&query=${textSearch}&limit=10`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMovies(data.results);
                })
        }
    }, [textSearch])

    return (
        <div className="container" >
            <h5>Resultados</h5>
            <div className="container" >
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
                {
                    movies.map(movie => (

                        <Card movie={movie} key={movie.id} />

                    ))
                }
                </div>
            </div>
        </div>
    )
};

export default Results;

//<div className="card h-100" >
//<img src={imageUrl} className="card-img-top" alt="Poster" />
//<Link to="/Favorites"><FaHeart /></Link>
//<div className="card-body">
  //  <h5 className="card-title one-line-title">{movie.title}</h5>
   // <Link to={`/detail/${movie.id}`} className="btn btn-info">Ver detalle</Link>

//</div>
//</div>