import './Product.css';

function Product(props) {
    const { product } = props;

    return <div className="linear-horizontal product">
        <img src={product.image} alt={product.name} style={{ width: 100, height: 100 }} />
        <div>
            <p style={{ fontWeight: 'bold' }}>{product.name}</p>
            <p style={{ fontSize: 12 }}>{product.description}</p>
            <p>{product.price}</p>
        </div>
    </div>
}

export default Product;