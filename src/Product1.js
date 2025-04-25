import ProductCard from './Card';
import React from 'react';

const Product1 = () => {
    const productList = [
        {
            id: 1,
            image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cool Headphones',
            price: '$59.99',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1719523677291-a395426c1a87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww',
            title: 'Running Shoes',
            price: '$89.99',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Smart Watch',
            price: '$120.00',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1575844264771-892081089af5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VHJhdmVsJTIwQmFja3BhY2t8ZW58MHx8MHx8fDA%3D',
            title: 'Travel Backpack',
            price: '$75.50',
        }
    ];
    return (
        <div style={{ padding: 10,display:"flex",flexWrap:"wrap" }}>
            {productList.map(product => (
                <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default Product1;