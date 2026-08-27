// import React from 'react';

import Aunt from "./Aunt";
import Dad from "./Dad";
import Uncle from "./Uncle";

const Grandpa = () => {
    return (
        <div >
            <h3>Gradpa</h3>
            <section className="flex">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;