import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import Section from './components/Section';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);

    const handleAddProduct = (product) => {
        setProducts([...products, product]);
    };

    const sections = ["Computadores", "Acessórios", "Impressoras", "Games", "Gadgets"];

    return (
        <div>
            <h1>Loja de Informática</h1>
            <ProductForm onAddProduct={handleAddProduct} />
            {sections.map(section => {
                const sectionProducts = products.filter(product => product.section === section);
                if (sectionProducts.length > 0) {
                    return (
                        <Section 
                            key={section} 
                            title={section} 
                            products={sectionProducts} 
                        />
                    );
                }
                return null;
            })}
        </div>
    );
}

export default App;
