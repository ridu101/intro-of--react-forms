// import React from 'react';

import Brother from "./Brother";
import MySelf from "./MySelf";
import Sister from "./Sister";

const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Dad;