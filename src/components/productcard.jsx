import ViewProductButton from './button';

function ProductCard() {
    // Static dummy data
    const productData = {
        name: "Premium Headphones",
        price: "$299.99",
        image: "https://picsum.photos/200/200" // Using placeholder image
    };
    return (
        <div>
            <img 
                src={productData.image} 
                alt={productData.name}   
            />
            <h3>{productData.name}</h3>
            <p>{productData.price}</p>
            <ViewProductButton />
        </div>
    );
}

export default ProductCard;
