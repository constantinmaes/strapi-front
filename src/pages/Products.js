import { useEffect, useState } from 'react';

import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get(
                'http://localhost:1337/api/products?populate=*'
            );
            setProducts(data.data);
        }
        // Ce code s'exécute au premier chargement du composant
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            {products.map((product) => (
                <div>{product.attributes.name}</div>
            ))}
        </div>
    );
};

export default Products;
