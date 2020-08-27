import React from 'react';

const PriceCount = ({price}) => {

    let totalPrice = price.reduce((acc,course) => (acc + course.price), 0);

    return (
        <>
            <h5>Total Price: ${totalPrice}</h5>
        </>
    );
};

export default PriceCount;