import { Link } from 'react-router-dom';

const Button = ({text}) => { //podemos destructurar las props para reducir codigo si tuvieramos mas de una
    return (
        <li className="nav-item">
            <Link to="/" className="nav-link">
                {text} 
                </Link>
        </li>
    );
}

export default Button;
