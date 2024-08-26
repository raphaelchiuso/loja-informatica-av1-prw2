import React from 'react';

const ProductCard = ({ product }) => {
    const brandImageMap = {
        "HP": "/images/hp.png",
        "Dell": "/images/dell.png",
        "Positivo": "/images/positivo.png",
        "Asus": "/images/asus.png",
        "xing Ling genérico": "/images/xing-ling.png"
    };

    return (
        <div style={styles.card}>
            <img 
                src={brandImageMap[product.brand] || "/images/default.png"} 
                alt={product.brand} 
                style={styles.image}
            />
            <h3>{product.name}</h3>
            <p>Preço: R$ {product.price}</p>
            <p>Estado: {product.condition}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '2px solid #ffff',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px',
        textAlign: 'center',
        width: '200px'
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'contain',
        marginBottom: '8px'
    }
};

export default ProductCard;
