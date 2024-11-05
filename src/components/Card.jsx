import React from 'react';

const Card = ({ product }) => {
    const { product_id,product_title,product_image,category,price,description,Specification,availability,rating} = product || {}
    console.log(product);
    return (
        <div>
            {product_title}
        </div>
    );
};

export default Card;