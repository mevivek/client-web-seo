import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Product from "../../components/product/Product";
import { products } from "../../DemoData";

function Catalogue() {

    // products list
    const productsList = products.map(product => <li key={product.id}>
        <Link to={`/catalogue/${product.urlSlug}`}>
            <Product product={product} />
        </Link>
    </li>);

    return <div>
        <Helmet>
            <title>Catalogue</title>
        </Helmet>
        <ul>{productsList}</ul>
    </div>
}

export default Catalogue;