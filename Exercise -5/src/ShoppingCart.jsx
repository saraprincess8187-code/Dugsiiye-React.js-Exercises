import { useState } from 'react';
const ShoppingCart = () => {

    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = (e) => {
        if(productName.trim() !== '' && price.trim() !== '') {
            const newProduct = {
                id: crypto.randomUUID(),
                name: productName,
                price: parseFloat(price),
                quantity: 1,
            }

            setProducts([...products, newProduct]);
            setProductName('');
            setPrice('');
        }

    }

    const removeProduct = (id) => {

        const updatedProduct = products.filter(product => product.id !== id);
        setProducts(updatedProduct);

    }

    const increaseQuantity = (id) => {
        const updatedProduct = products.map(product => (
            product.id === id ? {...product, quantity : product.quantity + 1} : product
        ))
        setProducts(updatedProduct);
    }

    const decreaseQuantity = (id) => {
        const updatedProducts = products.map(product => (
            product.id === id && product.quantity >1 ? {...product, quantity : product.quantity - 1} : product
        ))
        setProducts(updatedProducts);
    }

    const totalPrice = products.reduce((total, product) => total + product.price * product.quantity , 0)
    return(
        <>
        <h1>Simple Shopping Cart</h1>

        <div>   
            <h2>Add a Product</h2>

            <input type="text" 
            placeholder='Product Name' 
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            />

            <input type="number"
            min='0'
            placeholder='Price' 
            onChange={(e) => setPrice(e.target.value)}
            value={price} 
            />

            <button onClick={handleAddProduct}>Add Product</button>

        </div>
        
        {
            products.length > 0 ? (
                <div>
                    <h2>Products in Cart</h2>
                    <ul>
                        {
                            products.map(product => (
                                <li key={product.id}>
                                    <strong>{product.name}</strong> - ${product.price.toFixed(2)}

                                    <div>
                                        Quantity:
                                        <button onClick={() => decreaseQuantity(product.id)}>-</button>
                                        {product.quantity}
                                        <button onClick={() => increaseQuantity(product.id)}>+</button>
                                    </div>

                                    <button onClick={ () => removeProduct(product.id)}>Remove</button>

                                </li>

                            ))
                        }
                    </ul>

                        <h4>Total Price: ${totalPrice}</h4>

                </div>
                    
            ) : <p>The Cart is Empty.</p>
        } 
        
            </>
    )
}

export default ShoppingCart