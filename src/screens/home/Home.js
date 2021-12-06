import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { restaurantJsonLd } from '../../utility/json-ld';
import './Home.css';
import {restaurant} from '../../utility/DemoData'

function Home() {
    return (
        <div className="container">
            <Helmet>
                <title>{restaurant.name}</title>
                <meta name="description" content={restaurant.about} />
                <meta property="og:title" content={restaurant.name} />
                <meta property="og:description" content={restaurant.about} />
                <meta property="og:image" content={restaurant.images[0]} />
                <meta property="og:url" content={restaurant.url} />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">
                    {JSON.stringify(restaurantJsonLd(restaurant))}
                </script>
            </Helmet>


            <h1>Welcome to {restaurant.name}</h1>
            <p>{restaurant.about}</p>
            <button id="menu">
                <Link className="link-undecorated" to="/catalogue">Shop Now</Link>
            </button>
        </div>
    );
}

export default Home;