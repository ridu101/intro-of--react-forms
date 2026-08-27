// import React from 'react';

import Aunt from "./Aunt";
import Dad from "./Dad";
import Uncle from "./Uncle";

const Grandpa = ({asset}) => {
    return (
        <div >
            <h3>Gradpa</h3>
            <section className="flex">
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;