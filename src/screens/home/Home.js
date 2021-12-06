import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Home(props) {
    const name = props.name;
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h1>Welcome to {name}</h1>
            <button>
                <Link to="/catalogue">Shop Now</Link>
            </button>
        </div>
    );
}

export default Home;