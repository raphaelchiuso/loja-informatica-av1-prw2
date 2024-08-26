import React from 'react';
import ProductCard from './ProductCard';

const Section = ({ title, products }) => {
    const sectionClass = title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace('ç', 'c');
    
    return (
        <div className={`section ${sectionClass}`}>
            <h2>{title}</h2>
            <div className="product-list">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Section;
