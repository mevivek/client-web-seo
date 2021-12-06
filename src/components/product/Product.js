import './Product.css';

function Product(props) {
    const { product } = props;

    return <div className="linear-horizontal">
        <img src={product.image} alt={product.name} />
        <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    </div>
}

export default Product;