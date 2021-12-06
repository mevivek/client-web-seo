import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { products } from '../../DemoData';


function ProductDetails() {
    const { slug } = useParams();
    const product = products.find(product => product.urlSlug === slug);


    return (
        <div>
            <Helmet>
                <title>{product.name}</title>
                <meta name="description" content={product.description} />
                <meta property="og:title" content={product.name} />
                <meta property="og:description" content={product.description} />
                <meta property="og:image" content={product.image} />
            </Helmet>
            <div>
                <img src={product.image} alt={product.name} />
                <h1>{product.name}</h1>
                <p>{product.price}</p>
            </div>
        </div>
    );
}

export default ProductDetails;