// import React from 'react';

import Cousin from "./Cousin";

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className="flex">
                <Cousin name='Jund'></Cousin>
                <Cousin name='Mumn'></Cousin>
                <Cousin name='Ehsn'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;