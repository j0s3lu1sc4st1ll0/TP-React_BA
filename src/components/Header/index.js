import { Link, useHistory } from 'react-router-dom';
import image from './assets/images/popcorn.png';
import Button from './Button';

function Header({ links }) {
	const history = useHistory();

	const handleSubmit = (e)=>{
		e.preventDefault();

		let input = e.target.search.value;
		if (input.length >= 3){
			history.push(`/results?search=${input}`);
			e.target.search.value = '';
		}
	}

	return (
		<nav className="navbar navbar-expand-lg bg-secondary bg-gradient text-white">
			<div className="container">
				<img src={image} height='40' alt='pochoclos' />
				<Link to="/" className="navbar-brand">MoviEros</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{
							links.map((link, i) => <Button text={link} key={link + i} />) //utilizamos key props para diferenciar los botones en React
						}
					</ul>
				</div>
				<form onSubmit={(e) => handleSubmit(e)}>
					<input className='form-control' type="text" name="search" id="search" placeholder='search movies' />
				</form>
			</div>
		</nav>
	);
}

export default Header;

