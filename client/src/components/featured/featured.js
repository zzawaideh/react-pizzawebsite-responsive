import React from 'react';
import { FeatureContainer, FeatureButton } from './featuredElements';

const Featured = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the day</h1>
            <p>Truffle Alfredo souce topped with 24 carrot gold dust</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Featured
