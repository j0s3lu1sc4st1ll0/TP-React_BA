import {Link} from 'react-router-dom';
import './assets/css/notFound.css';

const NotFound = () => {
    return ( 
      
      <body>
        <main className='notFound'>
        <section className="notFound">
        <div className="img">
          <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
          <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
        </div>
        <div className="text">
          <h1>404</h1>
          <h2>PAGE NOT FOUND</h2>
          <Link to="/" className="yes">BACK TO HOME</Link>
        </div>
      </section>
      </main>
      </body>
     );
}
 
export default NotFound;