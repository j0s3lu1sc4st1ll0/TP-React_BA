import { Link } from 'react-router-dom';
import React , { Component } from 'react';

class Detail extends Component {
    constructor({match}){
        super();
        this.state = {
            movieId: match.params.id,
            movieData : {}
        }
    }

    componentDidMount(){

        const API_ORIGEN = "https://api.themoviedb.org/3/movie/";
        const API_ID_MOVIE = this.state.movieId;
        const API_KEY = "?api_key=bc564be597cfe46ac043e8fd3d5124f6&language=es-ES";
        //uso constantes para luego concatenar y que sea mas legible o en todo caso se puede hacer:
        // fetch (https://api.themoviedb.org/3/movie/{this.state.movieId}?api_key=bc564be597cfe46ac043e8fd3d5124f6&language=es-ES)
        const API_URL = `${API_ORIGEN}${API_ID_MOVIE}${API_KEY}`;
        fetch(API_URL)
        .then(res => res.json())
        .then((movie) => {
            this.setState({movieData: movie})
        });
        

    }

render (){

    const genreType = this.state.movieData.genres?.map ((genre)=> {
        return (<li>{genre.name}</li>)
    })
    return (
        <div className="row" id="movieDetail">
        <div className="col-12 col-md-4">
        <img src={`https://image.tmdb.org/t/p/w500${this.state.movieData.poster_path}`} className="card-img-top" alt="Poster" />
        </div>
        <div className="col-12 col-md-8" id="movieInfo">
            <h2>Título: {this.state.movieData.title}</h2>
            <h5>Géneros: {genreType} </h5>
            
            <h5>Reseña: {this.state.movieData.overview}</h5>
            <p />
            <h5 id="rating">Rating: {this.state.movieData.vote_average}</h5>
            <Link to="/" className="btn btn-primary my-3">volver al listado</Link>
        </div>
    </div>
    )

}
}

export default Detail;
