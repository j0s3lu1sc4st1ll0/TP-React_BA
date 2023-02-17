import { Component } from 'react';
import Card from './Card';

class Getpopular extends Component { //creamos un componente de clase
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount() { //Para llamar a la API
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bc564be597cfe46ac043e8fd3d5124f6&language=es-ES&sort_by=popularity.desc&page=1`)
            .then(res => res.json())
            .then(movie => {
                this.setState({ movies: movie })
            })
    }
    render() {

        return (
            <>

                <div className="container" >
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
                        {this.state.movies.results?.map(movie => {
                            return <Card movie={movie} key={movie.id} />
                        })

                        }
                    </div>
                </div>

            </>

        );
    }
}

export default Getpopular;
