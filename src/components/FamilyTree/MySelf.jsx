// import React from 'react';

import Friend from "./Friend";
import Spacial from "./Spacial";

const MySelf = ({asset}) => {
    
    return (
        <div>
            <h3>Ridu</h3>
            <section>
                <Spacial asset={asset}></Spacial>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default MySelf;