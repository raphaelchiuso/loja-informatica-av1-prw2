import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
    const [section, setSection] = useState('');
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [condition, setCondition] = useState('Novo');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({ section, brand, name, price, condition });
        setSection('');
        setBrand('');
        setName('');
        setPrice('');
        setCondition('Novo');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Seção:</label>
                <select value={section} onChange={(e) => setSection(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="Computadores">Computadores</option>
                    <option value="Acessórios">Acessórios</option>
                    <option value="Impressoras">Impressoras</option>
                    <option value="Games">Games</option>
                    <option value="Gadgets">Gadgets</option>
                </select>
            </div>
            <div>
                <label>Marca:</label>
                <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="HP">HP</option>
                    <option value="Dell">Dell</option>
                    <option value="Positivo">Positivo</option>
                    <option value="Asus">Asus</option>
                    <option value="xing Ling genérico">xing Ling genérico</option>
                </select>
            </div>
            <div>
                <label>Nome:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Preço:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="checkbox-group">
    <label>
        <input 
            type="radio" 
            name="condition" 
            value="Novo" 
            checked={condition === 'Novo'} 
            onChange={(e) => setCondition(e.target.value)} 
        />
        Novo
    </label>
    <label>
        <input 
            type="radio" 
            name="condition" 
            value="Usado" 
            checked={condition === 'Usado'} 
            onChange={(e) => setCondition(e.target.value)} 
        />
        Usado
    </label>
</div>

            <button type="submit">Inserir Produto</button>
        </form>
    );
};

export default ProductForm;
