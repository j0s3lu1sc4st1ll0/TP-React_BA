/* Importaciones de React/React-Router */
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* Componentes*/
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Results from './pages/Results';

class App extends Component { //creamos un componente de clase
  constructor() {
    super();
    this.state = {
      links: ['Home', 'Favorites'],
    }

  }

  render() {
    return (
      <>
        <Header links={this.state.links} />

<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/Favorites" component={Favorites} />
  <Route path="/Detail/:id" component={Detail} />
  <Route path="/Results" component={Results} />
  <Route component={NotFound}/>
</Switch>

<Footer />
      </>
    );
  }
}


export default App;

/*

*/