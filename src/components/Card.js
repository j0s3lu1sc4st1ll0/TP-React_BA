import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
const Card = ({ movie }) => {

    let imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'images/no-poster.jpg';

    return (
        <div className="col-12 col-sm-6 col-lg-3 my-2">
            <div className="card h-100" >
                <img src={imageUrl} className="card-img-top" alt="Poster" />
                <Link to="/Favorites"><FaHeart /></Link>
                <div className="card-body">
                    <h5 className="card-title one-line-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview.substr(0, 80).trim()}...</p>
                    <Link to={`/detail/${movie.id}`} className="btn btn-info">Ver detalle</Link>
                    
                </div>
            </div>
        </div>
    );
}

export default Card;

