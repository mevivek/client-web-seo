import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';
import { products } from '../../utility/DemoData';
import { productJsonLd } from '../../utility/json-ld';


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

                <script type="application/ld+json">{JSON.stringify(productJsonLd(product))}</script>
            </Helmet>
            <div>
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        </div>
    );
}

export default ProductDetails;