import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Product from "../../components/product/Product";
import { products } from "../../utility/DemoData";
import { restaurant } from "../../utility/DemoData";

function Catalogue() {

    // products list
    const productsList = products.map(product => <li key={product.id}>
        <Link className="link-undecorated" to={`/catalogue/${product.urlSlug}`}>
            <Product product={product} />
        </Link>
    </li>);

    return <div style={{ display: "flex", flexDirection:"column"}}>
        <Helmet>
            <title>Catalogue</title>
        </Helmet>
        <h1>Catalogue</h1>
        <h4>{restaurant.name}</h4>
        <ul>{productsList}</ul>
    </div>
}

export default Catalogue;